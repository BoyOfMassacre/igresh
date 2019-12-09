const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Stwórz okno przeglądarki.
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  win.webContents.openDevTools();
}

app.on('ready', createWindow)