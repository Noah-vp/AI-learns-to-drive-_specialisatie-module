class Avoid {
    constructor(x1, y1, x2, y2) {
      this.a = createVector(x1, y1);
      this.b = createVector(x2, y2);
    }
  
    show() {
      rectMode(CORNERS);
      stroke(225, 0, 0)
      fill(255, 0, 0);
      rect(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }