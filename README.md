# Visual Studio Code Custom Settings

This project includes custom configuration files for Visual Studio Code (VSCode) to enhance your development experience. The configuration includes:

- **`settings.json`**: Custom VSCode settings for improving workspace behavior.
- **`custom.css`**: A custom CSS file to modify the appearance of VSCode.
- **`custom.js`**: JavaScript file for adding additional functionalities or automation in your VSCode setup.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Required Extensions](#required-extensions)

## Description

This repository allows you to configure Visual Studio Code to suit your specific needs and style preferences.

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/sattorbekh/vscode-settings.git
cd vscode-settings
```

### 2. Locate your VSCode User Directory

VSCode stores user-specific configuration files in a directory that varies by OS. Locate your user settings directory:

- **Windows**: `C:\Users\<YourUser>\AppData\Roaming\Code\User`
- **MacOS**: `/Users/<YourUser>/Library/Application Support/Code/User`
- **Linux**: `~/.config/Code/User`

### 3. Copy the Configuration Files

Copy the following files from this repository into your VSCode user directory:

- `settings.json` → `~/.config/Code/User/settings.json`
- `custom.css` → Copy to the appropriate location.
- `custom.js` → Copy to the appropriate location.

### 4. Restart VSCode

Once you’ve copied the settings, restart VSCode to apply the changes.

## File Structure

```
/vscode-settings
|-- settings.json       # Custom VSCode settings for your environment
|-- custom.css          # Custom CSS for styling VSCode UI
|-- custom.js           # Custom JS for additional features or automation
|-- README.md           # This file
```

## Required Extensions

1. **[GitHub Light](https://marketplace.visualstudio.com/items?itemName=github.github-vscode-theme)**
2. **[Charmed Icons](https://marketplace.visualstudio.com/items?itemName=chrisdavidmills.charmed-icons)**
3. **[Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)**
4. **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
