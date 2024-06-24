{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  env.GREET = "Initializing rune-pouch";
  cachix.enable = false;
  packages = with pkgs; [git corepack nodejs-slim jq awscli2 git-chglog];
  languages = {
    typescript.enable = true;
    python.enable = true;
  };

  enterShell = ''
    clear
    echo $GREET
    devenv info
  '';
}
