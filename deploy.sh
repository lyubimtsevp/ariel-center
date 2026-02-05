#!/bin/bash
# Deploy script for ariel-app
# Usage: bash deploy.sh [--no-pull]

APP_DIR="/var/www/u3358714/data/www/ariel-app"
SITE_DIR="/var/www/u3358714/data/www/ariel"
LOCK_FILE="/var/www/u3358714/data/www/ariel-app/.deploy.lock"
PM2_PATH="/var/www/u3358714/data/.nvm/versions/node/v20.19.6/bin/pm2"
NO_PULL=false

if [ "$1" = "--no-pull" ]; then
  NO_PULL=true
fi

# Lock: ждём если уже идёт сборка (макс 5 минут)
WAIT=0
while [ -f "$LOCK_FILE" ]; do
  if [ $WAIT -ge 300 ]; then
    echo "Timeout waiting for lock. Removing stale lock."
    rm -f "$LOCK_FILE"
    break
  fi
  echo "Build in progress, waiting..."
  sleep 5
  WAIT=$((WAIT + 5))
done

# Ставим lock
echo $$ > "$LOCK_FILE"
trap 'rm -f "$LOCK_FILE"' EXIT

cd "$APP_DIR" || exit 1

echo "=== DEPLOY START ==="

# 1. Проверяем симлинки ariel/ -> ariel-app/public/
echo "1. Verifying symlinks..."

# images
if [ ! -L "$SITE_DIR/images" ]; then
  echo "   Fixing images symlink..."
  rm -rf "$SITE_DIR/images"
  ln -s "$APP_DIR/public/images" "$SITE_DIR/images"
fi

# docs
if [ ! -L "$SITE_DIR/docs" ]; then
  echo "   Fixing docs symlink..."
  rm -rf "$SITE_DIR/docs"
  ln -s "$APP_DIR/public/docs" "$SITE_DIR/docs"
fi

# uploads/booking
if [ ! -L "$SITE_DIR/uploads/booking" ]; then
  echo "   Fixing uploads/booking symlink..."
  mkdir -p "$SITE_DIR/uploads"
  rm -rf "$SITE_DIR/uploads/booking"
  ln -s "$APP_DIR/public/uploads/booking" "$SITE_DIR/uploads/booking"
fi

echo "   Symlinks OK"
echo ""

if [ "$NO_PULL" = false ]; then
  echo "2. Stash local changes..."
  git stash --include-untracked 2>&1
  echo ""

  echo "3. Git pull..."
  git pull origin master 2>&1
  echo ""

  echo "4. Restore local changes..."
  git stash pop 2>&1 || true
  echo ""
else
  echo "Skipping git pull (--no-pull)"
  echo ""
fi

echo "5. npm run build..."
npm run build 2>&1
BUILD_EXIT=$?
echo ""

if [ $BUILD_EXIT -ne 0 ]; then
  echo "BUILD FAILED! Aborting deploy."
  exit 1
fi

echo "6. PM2 restart..."
$PM2_PATH restart ariel 2>&1
echo ""

# Очистка стухших HTML-страниц в ariel/ (на случай если что-то появится снова)
echo "7. Cleanup stale pages in site dir..."
for dir in about admin booking contacts documents education faq gallery jobs logistics management media news prices requisites science services specialists 404 _not-found _next .next; do
  if [ -d "$SITE_DIR/$dir" ] && [ ! -L "$SITE_DIR/$dir" ]; then
    echo "   Removing stale: $dir"
    rm -rf "$SITE_DIR/$dir"
  fi
done
# Удаляем стухшие HTML в корне (кроме .htaccess)
find "$SITE_DIR" -maxdepth 1 -name '*.html' -delete 2>/dev/null
find "$SITE_DIR" -maxdepth 1 -name '*.txt' -delete 2>/dev/null
echo "   Cleanup done"
echo ""

echo "=== DEPLOY COMPLETE ==="
