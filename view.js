
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.



Drawing.prototype.updateShapeList = function () {

    let div = document.getElementById("shapeList");
    div.innerHTML = "";

    let i = 0;
    this.shapes.forEach(function (shape, key) {
        let item = document.createElement("li");
        let butt = document.createElement("button");

        butt.setAttribute("type", "button");
        butt.setAttribute("class", "btn btn-class");
        butt.setAttribute("data-shapeId", ""+key);

        butt.addEventListener("click", (evt)=> {

            console.log(evt);
            console.log(this)
            console.log(butt);

            this.shapes.delete(butt.getAttribute("data-shapeId"));
            div.removeChild(item);
            this.paint();
        });

        let span = document.createElement("span");
        span.setAttribute("class", "glyphicon glyphicon-remove-sign");

        if (Rectangle.prototype.isPrototypeOf(shape)) {
            item.textContent = "Rectangle";
        } else if (Line.prototype.isPrototypeOf(shape)) {
            item.textContent = "Line";
        } else {
            console.log("Unknown shape" + shape);
        }

        butt.appendChild(span);
        item.appendChild(butt);
        div.appendChild(item);
        console.log('pass par la1')

        i++;
    }.bind(this));
}

        Rectangle.prototype.paint = function () {
            ctx.beginPath();
            Shape.prototype.paint.call(this);
            console.log(this.getInitX());
            ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
            ctx.stroke();
        };

        Line.prototype.paint = function () {
            Shape.prototype.paint.call(this);
            ctx.beginPath();
            ctx.moveTo(this.getInitX(), this.getInitY());
            ctx.lineTo(this.getFinalX(), this.getFinalY());
            ctx.stroke();
        };

        Drawing.prototype.paint = function () {
            ctx.fillStyle = '#F0F0F3'; //to set the background color
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            console.log(this.getShapes());
            this.getShapes().forEach(function (eltTableau, key) {
                eltTableau.paint(ctx);
            });
 //           this.updateShapeList(this);
        };

        Shape.prototype.paint = function () {
            //console.log("width view "+ this.thickness)
            ctx.lineWidth = this.thickness;
            ctx.strokeStyle = this.color;
        };

        Shape.prototype.clear = function () {
            canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };


