const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // we can also expose variables, not just functions

  getInfo: (callback) => ipcRenderer.on('initialize-window', (event, uid) => callback(uid))
})