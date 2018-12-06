// import electron = require('electron');

const { app, BrowserWindow} = require('electron')
// import { app, BrowserWindow } from 'electron';
// const path = require('path')
// const url = require('url')
let win
function createWindow() {
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL("http://localhost:3000/")

  win.on('close', () => {
    win = null
  })
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
