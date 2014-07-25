Package.describe({
    summary: 'Sanitze HTML'
});

Npm.depends({'sanitize-html': '1.3.0'});

Package.on_use(function (api) {
    //  api.use('webapp', 'server');
    api.add_files(['sanitize-html.js'], 'server');

    api.export('SanitizeHtml', [ 'server']);

});