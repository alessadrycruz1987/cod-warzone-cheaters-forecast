const PATH = 'android/app/src/main/AndroidManifest.xml';
const ENCODING = 'utf8';
const BEFORE = `<uses-permission android:name="android.permission.INTERNET" />
</manifest>`;
const AFTER = `<uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</manifest>`;

var fs = require('fs');
var file = fs.readFileSync(PATH, ENCODING);
var result = file.replace(BEFORE, AFTER);

module.exports = function (ctx) {
    fs.writeFileSync(PATH, result);
};
