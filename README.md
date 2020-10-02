# Notes

Angular creates components with 3 files in a folder with the name of the component you created. Components are recommended to be created using the "ng create component" command in your terminal. The html file is the html template, the typescript or .ts file will contain your logic. The other file is the css and the test script you probably won't touch. Services are like providers or helper functions that would provide the data stream the typescript files will manipulate.

# MyApp

https://angular.io/tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




#BEGIN IN USE#################################################################

alias tree="cmd //c tree/f"


help () {
    clear
    echo " - gohome                    Takes me to my home directory"
    echo " - cat [filename]            Outputs the contents of a file right in the terminal"
    echo " - touch [filename]          Creates a new file"
    echo " - mkdir [directory]         Creates a new directory"
    echo " - mg [directory]            Creates a new directory and goes into it"
    echo "git add --all             Stages all modified files to be committed"
    echo "gaa                       Stages all modified files to be committed"
    echo "git commit -m [message]   Commits all staged files"
    echo "gcm [message]             Commits all staged files"
    echo "git push origin [branch]  Uploads your branch to Github"
    echo "gpo [branch]              Uploads your branch to Github"
    echo "changeorigin              Changes where you push your code"
    echo      "su-grunt-jsonserver () makes file structure for json"
}

#makes it easier to reload the zshrc file to save new aliases
alias save="source ~/.zshrc"
#opens your .zshrc file so you can make more custom aliases and methods
alias customize="code ~/.zshrc"

#takes me back to root
alias gohome="cd ~"

# creates basic directory with HTML, CSS, and JS, links the CSS and JS sheets and opens Visual Studio
cbc() {
   mkdir src
   cd src
   touch index.html
   mkdir styles
   cd styles
   touch main.css
   cd ../
   mkdir api
   cd api
   touch database.json
   cd ../
   mkdir script
   cd script
   touch main.js
   cd ../
   touch .gitignore
   echo ".DS_Store" >.gitignore
   echo "<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="/styles/main.css">
   <title>Document</title>
</head>
<body>
   <script src="/script/main.js"></script>
</body>
</html> " >> index.html
   code .
}

#shorthand for git status
alias gs='git status'

#create a new directory and cd to it
mg() {
[ -n "$1" ] && mkdir -p "$@" && cd $_;
}

#used to create a gitIgnore file
gic() {
   touch .gitignore
   echo ".DS_Store" >.gitignore
}


#shorthand for starting json-server, edit later to accept diff database names#
#alias jserv='json-server -p 8088 -w database.json'#
alias jserv='json-server -p 8088 -w'
#go to this in a browser http://localhost:8088/#

#END IN USE##################################################################
