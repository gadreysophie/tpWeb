
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
    function Drawing(){
        this.shapes = new Array();

        Drawing.prototype.addShape = function (shape) {
            this.shapes.push(shape);
        }

        Drawing.prototype.getShapes = function () {
            return this.shapes;
        }

        function Shape(thickness, color){
            this.thickness = thickness;
            this.color = color;
        }

        function Rectangle(x1, y1, x2, y2, thickness, color){
            Shape.call(this, thickness, color);
            this.x1 = x1;
            this.y1 = y1;
            this.width = x2;
            this.height = y2;
        }

        Rectangle.prototype.getInitX = function () {
            return this.x1;
        }
        Rectangle.prototype.getInitY = function () {
            return this.y1;
        }
        Rectangle.prototype.getWidth = function () {
            return this.width;
        }
        Rectangle.prototype.getHeight = function () {
            return this.height;
        }
    }
    Line.prototype = new Shape();
