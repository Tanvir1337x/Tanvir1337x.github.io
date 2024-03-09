let
  pkgs = import <nixpkgs> {};
  serveHttp = pkgs.mkShell {
    buildInputs = [pkgs.python3];

    shellHook = ''
      python -m http.server --bind 0.0.0.0
    '';
  };
in
  serveHttp
