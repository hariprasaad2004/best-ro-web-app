# Story 12: Electron Desktop App & Windows .exe Installer Build
**ID:** `STORY-12`  
**Priority:** `P1 (Showroom Desktop Deployment)`  
**Scope:** Package React Admin Studio into a native Windows .exe setup installer using Electron & electron-builder  

---

## 1. Description & Goal
Package the React Admin Studio into a native desktop application for the showroom PC in Erode. Configure `electron/main.js` to create the native desktop window, connect to the cloud MongoDB Atlas API, and configure `electron-builder` to compile `Best Water Systems Admin Setup 1.0.0.exe`.

---

## 2. Dependencies to Install
Run in `admin-desktop/`:
```bash
npm install --save-dev electron electron-builder concurrently cross-env wait-on
```

---

## 3. Builder Configuration (`admin-desktop/package.json`)
```json
{
  "name": "best-water-systems-admin",
  "version": "1.0.0",
  "main": "electron/main.js",
  "scripts": {
    "dev:react": "vite",
    "dev:electron": "wait-on http://localhost:5173 && cross-env NODE_ENV=development electron .",
    "dev": "concurrently \"npm run dev:react\" \"npm run dev:electron\"",
    "build": "vite build",
    "build:exe": "npm run build && electron-builder --win nsis"
  },
  "build": {
    "appId": "com.bestwatersystems.admin",
    "productName": "Best Water Systems Admin",
    "directories": {
      "output": "dist-installer"
    },
    "win": {
      "target": "nsis"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "shortcutName": "Best Water Systems Admin"
    }
  }
}
```

---

## 4. Verification & Build Command
Run:
```bash
npm run build:exe
```

### Acceptance Criteria:
- Electron-builder completes compilation with exit code 0.
- Installer file `admin-desktop/dist-installer/Best Water Systems Admin Setup 1.0.0.exe` is generated.
- Running the installer on Windows installs the software, places a desktop shortcut, and launches the app connected to the cloud backend.
