var fs = require('fs');

const initialisePackage = (data) => {
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
