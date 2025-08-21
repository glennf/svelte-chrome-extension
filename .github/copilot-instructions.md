# Svelte Chrome Extension

This is a Chrome Extension built with Svelte using Rollup as the build system. The extension includes a popup interface with a simple click counter and a background script.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build
- Install dependencies: `npm install` -- takes 5-8 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- Build the extension: `npm run build` -- takes 1 second. NEVER CANCEL. Set timeout to 30+ seconds.
- Development mode: `npm run dev` -- starts watch mode for auto-rebuilding on changes. NEVER CANCEL. Logs "waiting for changes..." when ready.
- Start local server: `npm run start` -- serves the public directory on http://localhost:8080. Use this to test popup.html locally.

### Build Outputs
The build process creates files in `public/build/`:
- `popup.js` - Compiled Svelte popup component
- `popup.css` - Extracted CSS for popup
- `background.js` - Compiled background script

## Project Structure

### Key Directories
- `public/` - Contains static files and build outputs, ready for Chrome extension loading
- `src/` - Source files for the extension
- `src/popup/` - Popup component source files
- `scripts/` - Utility scripts including TypeScript setup

### Important Files
- `public/manifest.json` - Chrome extension manifest (Manifest V2)
- `public/popup.html` - Popup HTML template that loads build/popup.js and build/popup.css
- `public/index.html` - Standard web app HTML (not used by Chrome extension)
- `src/popup/Popup.svelte` - Main popup Svelte component with click counter
- `src/popup/index.js` - Popup entry point that mounts Popup.svelte to document.body
- `src/background.js` - Background script (logs "Background script running")
- `src/App.svelte` - Main app component (not used by Chrome extension)
- `src/main.js` - Main app entry point (not used by Chrome extension)
- `rollup.config.js` - Build configuration for popup and background scripts with separate entry points

## Chrome Extension Development

### Loading Extension in Chrome
1. Build the extension: `npm run build`
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top right corner
4. Click "Load unpacked" and select the `public/` directory
5. The extension will appear with a browser action icon

### Testing Changes
1. Make code changes in `src/`
2. Run `npm run build` to rebuild
3. Go to `chrome://extensions/` and click the refresh icon for your extension
4. Test the extension functionality

## Validation

### Manual Testing Requirements
ALWAYS test the extension popup functionality after making changes:
1. Build the extension: `npm run build`
2. Test popup locally: `npm run start` then visit http://localhost:8080/popup.html
3. Verify the click counter increments when clicking the "Clicks: 0" button
4. Load extension in Chrome (see instructions above) and test popup from browser action

### Complete End-to-End Validation Workflow
After making any code changes, run this complete validation:
1. `npm run build` -- ensure build succeeds without errors
2. `npm run start` -- start local server 
3. Visit http://localhost:8080/popup.html in browser
4. Click the button multiple times to verify counter increments properly
5. Load/reload the extension in Chrome at chrome://extensions/
6. Click the extension icon and verify popup opens with working counter
7. Stop the development server

### Development Testing
- Use `npm run dev` for development with automatic rebuilding on file changes
- Test popup changes by refreshing http://localhost:8080/popup.html
- Background script changes require rebuilding and extension reload in Chrome

## TypeScript Support

### Optional TypeScript Setup
Run `node scripts/setupTypeScript.js` to convert the project to TypeScript:
- Adds TypeScript dependencies and configuration
- Converts files to use TypeScript
- Adds `npm run check` script for type checking
- Creates `.vscode/extensions.json` recommending Svelte extension

Note: This script modifies the project structure permanently.

## Development Notes

### Build System
- Uses Rollup with multiple entry points (popup and background)
- No test framework configured
- No linting or formatting tools configured
- Uses Manifest V2 for Chrome extensions

### Dependencies
- Svelte 4.2.19 for UI components
- Rollup 2.79.1 for bundling
- sirv-cli for local development server

### Common Patterns
- Popup component uses standard Svelte reactive patterns
- Background script is minimal (only logs a message)
- All extension assets must be in `public/` directory for Chrome loading

### Known Issues and Warnings
- npm install shows deprecation warnings for rollup-plugin-terser and glob packages (these are harmless)
- Project has both extension files (popup.html) and standard web app files (index.html) - only popup.html is used by the extension
- TypeScript setup script permanently modifies project structure

## Troubleshooting

### Common Problems
- **Extension not loading**: Ensure you select the `public/` directory, not the repository root
- **Popup not working**: Check browser console for errors, verify build/popup.js exists
- **Changes not reflecting**: Rebuild with `npm run build` and reload extension in Chrome
- **Development server fails**: Check that port 8080 is available

### File Watching Issues
If `npm run dev` doesn't detect changes:
1. Stop the watch process
2. Run `npm run build` manually
3. Restart `npm run dev`

## Common Tasks

The following are frequently run commands and their expected behavior:

### Repository Structure
```
ls -la [repo-root]
.git
.gitignore
README.md
package-lock.json
package.json
public/
rollup.config.js
rollup.config_old.js
scripts/
src/
```

### Build Directory Contents
After running `npm run build`:
```
ls -la public/build/
background.js
popup.css
popup.js
```

### Development Workflow
1. `npm install` - Install dependencies (5 seconds)
2. `npm run build` - Build extension (1 second)
3. Load `public/` directory as unpacked extension in Chrome
4. Make changes in `src/`
5. `npm run build` - Rebuild
6. Refresh extension in Chrome
7. Test functionality

Always ensure the popup click counter works after any changes to validate the extension is functioning correctly.