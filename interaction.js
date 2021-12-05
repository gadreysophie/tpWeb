
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xInit = 0;
  this.yInit = 0;
  this.xFinal = 0;
  this.yFinal = 0;
  this.mousePressed = false;
  this.pencil = interactor;

	// Developper les 3 fonctions gérant les événements
  this.pickUp = function (evt){
    this.mousePressed = true;
    pos = getMousePosition(canvas, evt);
    this.xInit = pos.x;
    this.yInit = pos.y;
    this.xFinal = pos.x;
    this.yFinal = pos.y;
  }.bind(this);

  this.move = function (evt){
    if(this.mousePressed){
      mousePos = getMousePosition(canvas, evt);
      this.xFinal = mousePos.x;
      this.yFinal = mousePos.y;
      this.pencil.onInteractionUpdate(this);
    }
  }.bind(this);

  this.drop = function (evt){
    if(this.mousePressed){
      pos = getMousePosition(canvas,evt);
      this.xFinal = pos.x;
      this.yFinal = pos.y;
      this.pencil.onInteractionEnd(this);
      this.mousePressed = false;
    }
  }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mouseDown', this.pickUp, false);
  canvas.addEventListener('mouseMove', this.move, false);
  canvas.addEventListener('mouseUp', this.drop, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



