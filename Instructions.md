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

### 3.4 Updating/Adding Team Members
#### Location
Team member data is stored in `/src/TeamSection.jsx` in the `TeamSection` component.
#### Adding a New Team Member
1. **Add the image import** at the top of the file:
   ```jsx
   import newMemberImg from './assets/team/newmember.jpeg';

2. Add the member to the team array in the TeamSection component:
    - name: 'Member Name',
   - role: 'Role/Position',
    - title: 'Title/Affiliation',
   -  image: newMemberImg, 
   - website: 'https://example.com'

3. Add the image file to /src/assets/team/ folder as a JPEG or PNG file.

#### Updating an Existing Member
Simply modify the corresponding object in the team array with the new information.


## 4. Deployment to GitHub Pages

Once you have finished modifications and verified them locally, you can deploy the changes online.

### Option 1: One-Click Script (Recommended)

We have provided a script that automatically handles git commit and deployment.

1.  Run the script in your terminal:
    ```bash
    ./deploy.sh
    ```
2.  Follow the prompts. It will ask for a commit message (or press Enter to use the default).
3.  Wait for the success message.

### Option 2: Manual Deployment

If you prefer to run commands manually:

1.  **Commit Changes**:
    ```bash
    git add .
    git commit -m "Your commit message"
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```
    This bundles the project and pushes it to the `gh-pages` branch.

3.  **Check Online Version**:
    After deployment, GitHub Pages may take a few minutes to update.

## Command Summary

| Command | Description |
|---------|-------------|
| `./deploy.sh` | **Automated update & deploy script** |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build production version (build only, no deploy) |
| `npm run deploy` | Build and deploy (manual mode) |
