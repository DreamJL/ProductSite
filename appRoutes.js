exports.appRoutes = function (app) {

    var product = require('./routes/product');

    //Lewu product page
    app.get('/', product.index);
    app.get('/home', product.home);
    app.get('/shop', product.shop);
    app.get('/details', product.details);
    app.get('/download', product.download);
    app.get('/preorder', product.preorder);
    app.get('/contact', product.contact);

};