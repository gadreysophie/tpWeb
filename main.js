
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    canvas.width=800
    canvas.height=600

// Code temporaire pour tester le DnD

   // new DnD(canvas, new Pencil());

    ctx.fillStyle = '#F0F0F3'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

// Code temporaire pour tester l'affiche de la vue

    let rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
    console.log(ctx);
    rec.paint(ctx);
    let ligne = new Line(10, 20, 50, 100, 5, '#00CCC0');
    ligne.paint(ctx);

    new Pencil(ctx, new Drawing(), canvas);
// tester également Dessin

// Code final à utiliser pour manipuler Pencil.

    let drawing = new Drawing();
    //let pencil = new Pencil(ctx, drawing, canvas);

    drawing.paint(ctx, canvas);
    rec.paint();
    ligne.paint();
    drawing.updateShapeList();


/*
    function switchShape(index) {
        switch (index) {
            case editingMode.rect:
                pencil.currEditingMode = index;
                break;
            case editingMode.line:
                pencil.currEditingMode = index;
                break;
            case editingMode.cercle:
                pencil.currEditingMode = index;
                break;
        }
    }
 */


/*
    let save = function(){
        ajax.post("/titi", drawing.getShapes, function(){
        })
    };


    let ajax = {};
    ajax.x = function () {
            if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        let versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        let xhr;
        for (let i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    };

    ajax.send = function (url, callback, method, data, async) {
        if (async === undefined) {
        async = true;
    }

    let x = ajax.x();
        x.open(method, url, async);
        x.onreadystatechange = function () {
            if (x.readyState === 4) {
                callback(x.responseText)
            }
        };
        if (method === 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data)
    };

    ajax.get = function (url, data, callback, async) {
        let query = [];
        for (let key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
    };

    ajax.post = function (url, data, callback, async) {
        let query = [];
        for (let key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url, callback, 'POST', query.join('&'), async)
    };

 */

