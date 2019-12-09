# VSCode Extension Template Vue

This projects aims to provide a template to ease the creation of VSCode extensions using Vue and Vuetify.

## Project setup

Install dependencies:

```
npm install
```

## When working on the front-end side

You just need to serve your code as you would in any other Vue project. Run:

```
npm run serve
```

Then, go to http://localhost:8080. 

## When working on the extension side

The template reads the content of the bundle files to display the Webview. It implies that you will need to build your
Vue project to reflect your changes to the front-end from the extension. If needed, run:

```
npm run build
```

On the other hand, you can skip this step if a bundle has already been generated and the front-end has not been modified
since.

You can now press `F5` to start debugging your extension.