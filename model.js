
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
/*
    function Drawing(){
        this.shapes = new Array();
        this.getShapes = function() {
            return this.shapes;
        }.bind(this) ;

        this.addShape = function(form) {
            this.shapes.push(form);
        }.bind(this) ;
    }
 */
    function Drawing() {
        this.shapes = new Array();

        Drawing.prototype.addShape = function (shape) {
            this.shapes.push(shape);
        };

        Drawing.prototype.getShapes = function () {
            return this.shapes;
        };
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

            this.getHeight = function () {
                return this.height;
            }.bind(this);

            this.getInitX = function () {
                return this.x1;
            }.bind(this);

            this.getInitY = function () {
                return this.y1;
            }.bind(this);

            this.getWidth = function () {
                return this.width;
            }.bind(this);
        }

        Rectangle.prototype = new Rectangle();

        function Line(x1,y1,x2,y2,width,color){
            Shape.call(this, x1,y1,x2,y2,width,color);
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;

            this.getInitX = function () {
                return this.x1;
            }.bind(this);

            this.getInitY = function () {
                return this.y1;
            }.bind(this);

            this.getFinalX = function () {
                return this.x2;
            }.bind(this);

            this.getFinalY = function () {
                return this.y2;
            }.bind(this);
        };

    Line.prototype = new Line();
