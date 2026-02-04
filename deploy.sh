#!/bin/bash
# Deploy script for ariel-app
# Usage: bash deploy.sh [--no-pull]

APP_DIR="/var/www/u3358714/data/www/ariel-app"
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

if [ "$NO_PULL" = false ]; then
  echo "1. Stash local changes..."
  git stash --include-untracked 2>&1
  echo ""

  echo "2. Git pull..."
  git pull origin master 2>&1
  echo ""

  echo "3. Restore local changes..."
  git stash pop 2>&1 || true
  echo ""
else
  echo "Skipping git pull (--no-pull)"
  echo ""
fi

echo "4. npm run build..."
npm run build 2>&1
BUILD_EXIT=$?
echo ""

if [ $BUILD_EXIT -ne 0 ]; then
  echo "BUILD FAILED! Aborting deploy."
  exit 1
fi

echo "5. PM2 restart..."
$PM2_PATH restart ariel 2>&1
echo ""

echo "=== DEPLOY COMPLETE ==="
