Package.describe({
    summary: "Wrapper for punkave's Sanitize HTML node package",
    version: '1.11.3',
    git: 'https://github.com/djedi23/meteor-sanitize-html.git',
    name: 'djedi:sanitize-html'
});

Npm.depends({'sanitize-html': '1.11.3'});

Package.onUse(function (api) {
    api.addFiles('sanitize-html.js', 'server');
    api.export('sanitizeHtml', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:sanitize-html');
  api.addFiles('sanitize-html-tests.js', 'server');
});
