const fs = require('fs')
const path = require('path')
const joinPath = path.join(__dirname,'project-dist','bundle.css')

fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (error,files) => {
    if (error) throw error
    fs.writeFile(joinPath,'', (error) => { if (error) throw error })
    files.forEach(file => {
        if (file.isFile() && file.name.split('.')[1]==='css') {
            fs.readFile (path.join(__dirname, 'styles', file.name), (error, data) => {
                if (error) throw error
                fs.appendFile(joinPath, data, e => { if (e) throw e })
            })
        }
    })
})