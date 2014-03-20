exports.appConfig = function (app) {

    var express = require('express');

    var path = require('path');

    //环境变量
    app.set('port', 80);                                                                                                //HTTP服务器端口
    app.set('socport', 7003);                                                                                           //TCP服务器端口
    app.set('views', path.join(__dirname, 'views'));                                                                    //设置视图目录
    app.set('view engine', 'ejs');                                                                                      //设置视图模板引擎

    //中间件
    app.use(express.compress());                                                                                        //压缩响应数据
    app.use(express.favicon());                                                                                         //favicon
    app.use(express.cookieParser('ov_orange'));                                                                         //cookie解析并用ov_orange签名
    app.use(express.bodyParser());                                                                                      //解析请求body
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express['static'](path.join(__dirname, 'public')));

};