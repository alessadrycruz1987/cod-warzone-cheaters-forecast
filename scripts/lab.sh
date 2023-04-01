# CLEANS WORKSPACE
rm -rf .angular
rm -rf ./android
rm -rf ./node_modules
rm -rf ./www
rm -rf ./package-lock.json

# INTALLS MODULES
npm install

# PREPARES ANDROID
ionic cap add android
npx @capacitor/assets generate --android
ionic cap sync
ionic build

# BUILDS ANDROID PLATFORM
ionic cap build android --no-open
