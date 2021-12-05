
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

    Drawing.prototype.updateShapeList = function () {
        var div = document.getElementById("shapeList");
        div.innerHTML = "";
    }

    var i = 0;

    drawing.shapes.forEach(function (shape) {

        var item = document.createElement("li");
        var butt = document.createElement("button");

        butt.setAttribute("type", "button");
        butt.setAttribute("class", "btn btn-class");
        butt.setAttribute("data-shapeId", "li");

        butt.addEventListener("click", function (evt) {
            drawing.shapes = drawing.shapes.filter(function (value, index, arr) {
                return value != shape
            });
            drawing.paint();
        });

        var span = document.createElement("span");
        span.setAttribute("class", "glyphicon glyphicon-remove-sign");

        if(Rectangle.prototype.isPrototypeOf(shape)){
            item.textContent = "Rectangle";
        } else if(Line.prototype.isPrototypeOf(shape)){
            item.textContent = "Line";
        } else {
            console.log("Unknown shape" + shape);
        }

        butt.appendChild(span);
        item.appendChild(butt);
        div.appendChild(item);

        i++;
        });

    Rectangle.prototype.paint = function () {
        ctx.beginPath();
        Shape.prototype.paint.call(this);
        ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
        ctx.stroke();
    };

    Line.prototype.paint = function () {
        ctx.beginPath();
        Shape.prototype.paint.call(this);
        ctx.moveTo(this.getInitX(), this.getInitY());
        ctx.lineTo(this.getFinalX(), this.getFinalY());
        ctx.stroke();
    };

    Drawing.prototype.paint = function () {
        ctx.fillStyle = '#000000'; //to set the background color
        ctx.fillRect(0,0, canvas.width, canvas.height);
        this.getShape().forEach(function (eltTableau) {
            eltTableau.paint();
        });
        this.updateShapeList(this);
    }

    Shape.prototype.paint = function () {
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = this.color;
    }