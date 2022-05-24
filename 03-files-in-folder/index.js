const path = require('path');
const fs = require('fs');
const joinPath = path.join(__dirname, 'secret-folder');

fs.readdir(joinPath, { withFileTypes: true },
  (error, files) => {
    if (error) console.log(error.message);
    else {
      const isFile = files.filter((e) => e.isFile());
      isFile.forEach((file) => {
        const output = [];
        let filePath = path.join(joinPath, file.name);
        output.push(path.parse(filePath).name);
        output.push(path.extname(filePath).slice(1));
        fs.stat(filePath, (error, stats) => {
          if (error) console.log(error.message);
          else {
            output.push(stats.size);
            console.log(output.join(' - '));
          }
        });
      });
    }
  },
);