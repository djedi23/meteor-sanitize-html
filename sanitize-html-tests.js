Tinytest.add('sanitizeHtml', function (test) {
    var dirty = 'some <b>really tacky</b> HTML';
    var clean = sanitizeHtml(dirty);
    test.equal(dirty, clean);



    clean = sanitizeHtml(dirty, {
        allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
        allowedAttributes: {
            'a': [ 'href' ]
        }
    });
    test.equal(dirty, clean);



    dirty1 = '<u>some</u> <b>really tacky</b> HTML';
    clean = sanitizeHtml(dirty1, {
        allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
        allowedAttributes: {
            'a': [ 'href' ]
        }
    });
    test.equal(dirty, clean);

});
