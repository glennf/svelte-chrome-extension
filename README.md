# Svelte Chrome Extension

This is a project template for building Chrome Extensions with [Svelte](https://svelte.dev).

## Get started

Install the dependencies:

``` bash
npm install
npm run build
```

## Running in development mode

To start the development server, run:

```
npm run dev
```

## Loading the extension in Chrome

1. Open Chrome and navigate to [chrome://extensions/](chrome://extensions/).
2. Enable "Developer mode" using the toggle in the top right corner.
3. Click "Load unpacked" and select the public directory of this project.

## Project structure

- `public/`: Contains the static files and the build output.
- `build/`: Contains the built JavaScript and CSS files.
- `background.js`: The background script for the extension.
- `popup.html`: The HTML file for the popup.
- `popup.js`: The JavaScript file for the popup.
- `popup.css`: The CSS file for the popup.
- `manifest.json`: The manifest file for the Chrome Extension.
- `src/`: Contains the source files for the extension.
- `App.svelte`: The main Svelte component.
- `background.js`: The background script source file.
- `main.js`: The entry point for the main app.
- `popup/`: Contains the source files for the popup.
- `index.js`: The entry point for the popup.
- `Popup.svelte`: The Svelte component for the popup.
- `scripts/`: Contains utility scripts.
- `setupTypeScript.js`: Script to set up TypeScript.

## Deploying the extension
To deploy the extension, you can package the contents of the public directory and upload it to the Chrome Web Store.

This is a project template for building Chrome Extensions with [Svelte](https://svelte.dev).

## Get started

Install the dependencies:

``` bash
npm install
npm run build
```

## Running in development mode

To start the development server with Rollup, run:

```
npm run dev
```

## Deploying the extension

To deploy the extension, you can package the contents of the public directory and upload it to the [Chrome Web Store](https://developer.chrome.com/docs/extensions/).

Additional resources
[Svelte](https://svelte.dev)
[Chrome Extensions](https://developer.chrome.com/docs/extensions/)
