const fs = require('fs')
const path = require('path')
const folder = path.join(__dirname, 'files')
const pathCopy = path.join(__dirname, 'files-copy')

fs.mkdir(pathCopy, { recursive: true }, err => { if (err) throw err })
fs.readdir(folder, (error, files) => {
  if (error) throw error
  files.forEach(f => {
    fs.stat(`${folder}/${f}`, (error, file) => {
      if (file.isFile()) {
        const folderFile = path.join(folder, f)
        const copyFolder = path.join(pathCopy, f)
        fs.copyFile(folderFile, copyFolder, error => { if (error) throw error })
        }
    })
})
console.log('files copied!')
})
