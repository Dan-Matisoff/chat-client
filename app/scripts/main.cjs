const { WebContentsView } = require('electron')
const { app, BrowserWindow, ipcMain } = require('electron/main')

path = require("node:path")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  }) 

  win.loadFile('app/index.html')
  //win.webContents.openDevTools()
}

const createChatWindow = (uid) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'chatbox-preload.js')
    },
    title: 'PESTERING ' + uid,
  })

  win.loadFile('app/chatbox.html')
  win.webContents.once('did-finish-load', () => {
    win.webContents.send('initialize-window', uid)
  })
  //win.webContents.openDevTools()
}


app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  ipcMain.on('make-chat-window', (event, inputID) => createChatWindow(inputID))
  createWindow()
  

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})