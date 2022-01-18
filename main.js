
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    canvas.width=800
    canvas.height=600

// Code temporaire pour tester le DnD

   // new DnD(canvas, new Pencil());
    new Pencil(ctx, new Drawing(), canvas);

    ctx.fillStyle = '#F0F0F3'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

// Code temporaire pour tester l'affiche de la vue

    let rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
    //console.log(ctx);
    rec.paint(ctx);
    let ligne = new Line(10, 20, 50, 100, 5, '#00CCC0');
    ligne.paint(ctx);







