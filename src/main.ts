import $Console from './lib/Console';
import { app, BrowserWindow } from 'electron';
import $Config from './misc/config';
import * as path from "path";

const config = new $Config();
const con = new $Console();


function $CreateWindow() {
  // Create the browser window.
  const $MainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    backgroundColor: config.$GlobalColor(),
    fullscreenable: true,
    titleBarStyle: "hidden",
    icon: path.join(__dirname, config.$GlobalIcon()),
    title: config.$GlobalAppName('case'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegrationInSubFrames: true,
      webSecurity: true,
      webviewTag: false,
      preload: path.join(__dirname, "preload.js"),
      devTools: config.$DebugConsole()
    }
  });

  // and load the index.html of the app.
  $MainWindow.loadFile(path.join(__dirname, "../index.html"));

  // Open the DevTools.
  $MainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  $CreateWindow();

  con.log('App is Running now!')

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) $CreateWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
