let
  pkgs = import <nixpkgs> {};
  serveHttp = pkgs.mkShell {
    buildInputs = [pkgs.python311Packages.flask];

    shellHook = ''
      python app.py
    '';
  };
in
  serveHttp
