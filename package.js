Package.describe({
    summary: 'Sanitze HTML',
    version: '1.6.1',
    git: 'https://github.com/djedi23/meteor-modules.git'
});

Npm.depends({'sanitize-html': '1.6.1'});

Package.on_use(function (api) {
    api.versionsFrom('1.0');

    api.add_files(['sanitize-html.js'], 'server');
    api.export('sanitizeHtml', [ 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:sanitize-html');
  api.addFiles('sanitize-html-tests.js', 'server');
});
