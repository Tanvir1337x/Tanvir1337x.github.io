const ANIMATION = [
  {
    name: "blurred-circle-transition",
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-out);
      }

      ::view-transition-new(root) {
        mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>') center / 0 no-repeat;
        animation: scale 2s ease-in-out, fadeIn 2s ease-in-out;
      }

      ::view-transition-old(root),
      .rosybrown::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }

      .rosybrown::view-transition-new(root) {
        animation: scale 2s ease-in-out, fadeIn 2s ease-in-out;
      }

      @keyframes scale {
        0% {
          mask-size: 0;
        }
        50% {
          mask-size: 100vmax;
        }
        100% {
          mask-size: 200vmax;
        }
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  },
];
