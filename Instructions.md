# Project Development & Deployment Guide

This document guides collaborators on how to set up the local environment, modify tutorial content, and deploy updates to GitHub Pages.

## 0. Prerequisites

Before starting, please ensure the following tools are installed on your computer:

- **[Node.js](https://nodejs.org/)**: Recommended to install the latest LTS version.
- **Git**: For version control.
- **VS Code** (Recommended): For code editing.

## 1. Installation

After cloning the repository to your local machine, run the following command in the project root directory to install dependencies:

```bash
npm install
```

## 2. Local Development

Before modifying content, it is recommended to start the local development server for preview:

```bash
npm run dev
```

Upon success, the terminal will display the local access address (usually `http://localhost:5173`). Open this address in your browser to view changes in real-time.

## 3. Modifying Content

The core data and resources for this project are located in the `src` directory.

### 3.1 Modifying Text

All tutorial steps, titles, and descriptions are stored in the **`src/tutorialData.js`** file.

- Open `src/tutorialData.js`.
- Find the corresponding step array (e.g., `signInSteps`, `workspaceSteps`, etc.).
- Directly modify the `title` or `description` fields in the objects.

### 3.2 Adding or Replacing Images

Image resources are located in the **`src/assets/tutorial_assets/`** directory, categorized by chapter folders.

**Steps:**

1. **Add Image**: Place new image files (`.png`, `.jpg`) into the corresponding subfolder under `src/assets/tutorial_assets/` (e.g., `1_sign_in/`).
2. **Reference Image**: In `src/tutorialData.js`, use the `asset()` helper function to reference the new image.
   
   ```javascript
   {
       // References src/assets/tutorial_assets/1_sign_in/new_image.png
       image: asset('1_sign_in/new_image.png'), 
       title: 'New Step Title',
       description: 'New Step Description'
   },
   ```

**Note**: The argument for the `asset()` function is the path relative to `src/assets/tutorial_assets/`.

### 3.3 Modifying Code and Styles

- **Page Components**: The main logic is in `src/Tutorial.jsx`.
- **Entry File**: `src/main.jsx`.
- **Styles**: The project uses the Ant Design component library; styles are mainly controlled via inline styles or component properties.

## 4. Deployment to GitHub Pages

Once you have finished modifications and verified them locally, use the following command to deploy changes online.

1. **Ensure Changes are Committed**:
   Please commit your code to the local git repository first (you don't strictly need to push to the main branch immediately, but the git state must be clean for the deployment script).

2. **Run Deployment Script**:
   Run in the terminal:
   
   ```bash
   npm run deploy
   ```

   **This command automatically performs the following:**
   - Runs `vite build`: Bundles the project into the `dist` folder.
   - Runs `gh-pages -d dist`: Pushes the content of the `dist` folder to the remote repository's `gh-pages` branch.

3. **Check Online Version**:
   After the deployment script completes, GitHub Actions or GitHub Pages service may take a few minutes to update and clear cache. Wait a moment and then visit your GitHub Pages URL to see the latest content.

## Command Summary

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build production version (build only, no deploy) |
| `npm run deploy` | Build and deploy to GitHub Pages |
