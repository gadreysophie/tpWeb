
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


function Drawing() {
        this.shapes = new Map();

        Drawing.prototype.addShape = function (shape) {
            var key = uuidv4();
            this.shapes.set(key, shape);
            return key;
        };

        Drawing.prototype.getShapes = function () {

            return this.shapes;
        };
    }

        function Shape(thickness, color){
            this.thickness = thickness;
            this.color = color;

            this.getThickness = function (){
                return this.thickness;
            }.bind(this);

            this.getColor = function () {
                return this.color;
            }.bind(this);
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

        function Line (x1,y1,x2,y2,width,color){

            Shape.call(this,width,color);
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
