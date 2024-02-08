class Paint {
  MODE = "NONE";
  isMouseDown = false;
  $brush;
  $eraser;
  $navigator;
  $undo;
  $download;
  $colorPicker;
  $canvas;

  constructor() {
    this.assignElements();
    this.initCanvasContext();
    this.attachListener();
  }

  assignElements() {
    this.$brush = document.getElementById("brush");
    this.$eraser = document.getElementById("eraser");
    this.$navigator = document.getElementById("navigator");
    this.$undo = document.getElementById("undo");
    this.$download = document.getElementById("download");
    this.$colorPicker = document.getElementById("colorPicker");
    this.$canvas = document.getElementById("canvas");
  }

  initCanvasContext() {
    this.context = this.$canvas.getContext("2d");
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  attachListener() {
    this.$brush.addEventListener("click", this.onClickBrush.bind(this));
    this.$canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    this.$canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.$canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
    this.$canvas.addEventListener("mouseout", this.handleMouseOut.bind(this));
  }

  handleMouseDown(event) {
    this.isMouseDown = true;
    this.context.beginPath();
  }

  handleMouseMove(event) {
    if (!this.isMouseDown) return;
    this.context.lineTo(event.offsetX, event.offsetY);
    this.context.stroke();
  }

  handleMouseUp(event) {
    this.isMouseDown = false;
  }

  handleMouseOut(event) {
    this.isMouseDown = false;
  }

  onClickBrush() {
    this.MODE = this.MODE === "NONE" ? "BRUSH" : "NONE";
    console.log(this.MODE);
    this.$brush.classList.toggle("active");
    this.context.fillStyle = "#000000";
  }
}

new Paint();
