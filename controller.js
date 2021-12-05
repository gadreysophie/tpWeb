
let editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {

	this.currentShape = 0;
	this.ctx = ctx;

	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById("spinnerWidth").onchange=(e) => this.currLineWidth = e.target.value;
	//Rectangle
	document.getElementById("butRect").onclick=() => this.currEditingMode = editingMode.rect;
	//Ligne
	document.getElementById("butLine").onclick=() => this.currEditingMode = editingMode.line;

	document.getElementById("colour").onchange=(e) => this.currColour = e.target.value;

	/*
	rectButton.addEventListener('click', function () {
		this.currEditingMode = editingMode.rect
	}.bind(this));

	lineButton.addEventListener('click', function () {
		this.currEditingMode = editingMode.line
	}.bind(this));

	widthSpinBox.addEventListener('input', function (evt) {
		this.currLineWidth = evt.target.value
	}.bind(this));

	colorPicker.addEventListener('input', function (evt) {
		this.currColour = evt.target.value
	}).bind(this);
 	*/

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	Pencil.prototype.onInteractionStart = function (dnd){
		drawing.paint();
		switch (this.currEditingMode){
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.xInit, dnd.yInit, dnd.xFinal-dnd.xInit,dnd.yFinal-dnd.yInit, this.currLineWidth, this.currColour);
			break;
			case editingMode.line:
				this.currentShape = new Line(dnd.xInit,dnd.yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
				break;
			default:
				break;
		}
		drawing.addShape(this.currentShape);
		drawing.updateShapeList();
	}.bind(this);

	Pencil.prototype.onInteractionUpdate = function (dnd) {
		drawing.paint();
		switch (this.currEditingMode){
			case editingMode.rect:
				this.currentShape.width = dnd.xFinal - dnd.xInit;
				this.currentShape.height = dnd.yFinal - dnd.yInit;
				this.currentShape.paint();
				break;
			case editingMode.line:
				this.currentShape.x2 = dnd.xFinal;
				this.currentShape.y2 = dnd.yFinal;
				this.currentShape.paint();
				break;
			default:
				break;
		}
		drawing.paint(ctx);
	}.bind(this);

	Pencil.prototype.onInteractionEnd = function (dnd) {
		this.currentShape.finalX = dnd.finalX;
		this.currentShape.finalY = dnd.finalY;
		this.currentShape.paint(this.ctx);
		drawing.addShape(this.currentShape);
		drawing.paint(this.ctx);
	}.bind(this);

};


