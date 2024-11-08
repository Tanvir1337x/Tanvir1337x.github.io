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

let styleElement = document.getElementById("dynamicStyles");

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme || "default";
};

let currentTheme = getInitialTheme();
document.documentElement.className = currentTheme;

const toggleButtons = document.querySelectorAll(".theme-toggle");
toggleButtons.forEach((button) => {
  button.setAttribute("aria-pressed", currentTheme === "rosybrown");
});

const injectCSS = (css) => {
  styleElement.textContent = css;
};

const switchTheme = (button) => {
  currentTheme = currentTheme === "default" ? "rosybrown" : "default";
  document.documentElement.className = currentTheme;
  button.setAttribute("aria-pressed", currentTheme === "rosybrown");
  localStorage.setItem("theme", currentTheme);
  injectCSS(ANIMATION.css);
};

const toggleTheme = (button) => {
  if (!document.startViewTransition) {
    switchTheme(button);
  } else {
    document.startViewTransition(() => switchTheme(button));
  }
};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("theme-toggle")) {
    toggleTheme(event.target);
  }
});
