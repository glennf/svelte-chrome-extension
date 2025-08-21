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

## Automated Releases

This repository includes automated release creation using GitHub Actions. When you push a version tag, a new release will be automatically created with a packaged extension ready for distribution.

### Creating a Release

1. Update the version in `public/manifest.json` if needed
2. Create and push a version tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
3. The GitHub Actions workflow will automatically:
   - Build the extension
   - Package it into a ZIP file
   - Create a GitHub release
   - Attach the packaged extension for download

### Release Artifacts

Each release includes:
- `svelte-chrome-extension-v{version}.zip` - Complete extension package ready for Chrome installation

## Deploying the extension

To deploy the extension, you can:

1. **Use automated releases**: Push a version tag to create a release automatically (recommended)
2. **Manual deployment**: Package the contents of the public directory and upload it to the [Chrome Web Store](https://developer.chrome.com/docs/extensions/)

## Additional resources

- [Svelte](https://svelte.dev)
- [Chrome Extensions](https://developer.chrome.com/docs/extensions/)
