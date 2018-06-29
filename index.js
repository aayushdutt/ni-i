var fs = require('fs');

const initialisePackage = (data) => {
  data.scripts = {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  data.dependencies = {}


  fs.writeFile("./package_test.json", JSON.stringify(data, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("package.json file created.");
  }); 
}

module.exports = {
  initialisePackage
}
