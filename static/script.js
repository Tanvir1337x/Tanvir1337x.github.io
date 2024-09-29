class NeonTrail {
  constructor() {
    this.trails = [];
    document.addEventListener("mousemove", this.createTrail.bind(this));
  }

  createTrail(e) {
    const trail = document.createElement("div");
    trail.className = "trail";
    document.body.appendChild(trail);

    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    this.trails.push(trail);

    setTimeout(() => {
      trail.remove();
      this.trails.shift();
    }, 700);
  }
}

new NeonTrail();
