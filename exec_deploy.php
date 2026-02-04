<?php
header('Content-Type: text/plain');

putenv('HOME=/var/www/u3358714/data');
putenv('PM2_HOME=/var/www/u3358714/data/.pm2');
putenv('PATH=/var/www/u3358714/data/.nvm/versions/node/v20.19.6/bin:/usr/bin:/bin');

$app_dir = '/var/www/u3358714/data/www/ariel-app';
$ftp_root = '/var/www/u3358714/data';
$pm2_path = '/var/www/u3358714/data/.nvm/versions/node/v20.19.6/bin/pm2';

echo "=== EXECUTE DEPLOY ===\n\n";

// Check if files exist in FTP root
echo "Checking files...\n";
$tar_exists = file_exists("$ftp_root/.next-scrollbar-gutter.tar.gz");
echo "TAR in FTP root: " . ($tar_exists ? "YES" : "NO") . "\n";
if ($tar_exists) {
    echo "TAR size: " . filesize("$ftp_root/.next-scrollbar-gutter.tar.gz") . " bytes\n";
}
echo "\n";

if (!$tar_exists) {
    echo "ERROR: TAR file not found in $ftp_root\n";
    echo "Listing FTP root:\n";
    exec("ls -lah $ftp_root/*.tar.gz 2>&1", $ls_out);
    echo implode("\n", $ls_out) . "\n";
    exit(1);
}

echo "1. Move TAR to ariel-app...\n";
exec("mv $ftp_root/.next-scrollbar-gutter.tar.gz $app_dir/ 2>&1", $mv_out, $mv_ret);
echo "Return code: $mv_ret\n";
if ($mv_ret !== 0) {
    echo "Output: " . implode("\n", $mv_out) . "\n";
}
echo "\n";

echo "2. Remove old .next...\n";
exec("cd $app_dir && rm -rf .next 2>&1", $rm_out, $rm_ret);
echo "Return code: $rm_ret\n\n";

echo "3. Extract new build...\n";
exec("cd $app_dir && tar -xzf .next-scrollbar-gutter.tar.gz 2>&1", $tar_out, $tar_ret);
echo "Return code: $tar_ret\n";
if ($tar_ret !== 0) {
    echo "Output: " . implode("\n", $tar_out) . "\n";
}
echo "\n";

echo "4. Remove archive...\n";
exec("cd $app_dir && rm .next-scrollbar-gutter.tar.gz 2>&1");
echo "Done\n\n";

echo "5. PM2 restart...\n";
exec("$pm2_path restart ariel 2>&1", $pm2_out, $pm2_ret);
echo implode("\n", $pm2_out) . "\n";
echo "Return code: $pm2_ret\n\n";

echo "=== DEPLOY COMPLETE ===\n";
