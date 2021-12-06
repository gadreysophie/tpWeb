
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xInit = 0;
  this.yInit = 0;
  this.xFinal = 0;
  this.yFinal = 0;
  this.mousePressed = false;
  this.wait = true;
  this.canvas = canvas;
  this.pencil = interactor;

  this.getInitX = function() {
    return   this.xInit;
  }.bind(this) ;

  this.getInitY = function() {
    return   this.yInit;
  }.bind(this) ;

  this.getFinalX = function() {
    return   this.xFinal;
  }.bind(this) ;

  this.getFinalY = function() {
    return   this.yFinal;
  }.bind(this) ;

	// Developper les 3 fonctions gérant les événements

  this.pickUp = function (evt){
    console.log(evt);
    this.mousePressed = true;
    let pos = getMousePosition(canvas, evt);
    this.xInit = pos.x;
    this.yInit = pos.y;
    this.xFinal = pos.x;
    this.yFinal = pos.y;
    this.pencil.onInteractionStart(this);
  }.bind(this);

  this.move = function (evt){
    let mousePos;
    if (this.mousePressed) {
      mousePos = getMousePosition(canvas, evt);
      this.xFinal = mousePos.x;
      this.yFinal = mousePos.y;
      this.pencil.onInteractionUpdate(this);
    }
  }.bind(this);

  this.drop = function (evt){
      this.mousePressed = false;
      let pos = getMousePosition(canvas,evt);
      this.xFinal = pos.x;
      this.yFinal = pos.y;
      this.pencil.onInteractionEnd(this);
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  console.log(canvas);
  console.log(this);
  canvas.addEventListener('mousedown', this.pickUp, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.drop, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };

};



