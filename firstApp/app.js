const fs = require("fs");

// fs.writeFile("./demo.txt", "This is demo", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Data written succesfully");
//   }
// });

// fs.writeFile("./next.txt", "This is data from next", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Data written succesfully");
//   }
// });

// fs.appendFile("./demo.txt", " This is appended.", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Data appended succesfully");
//   }
// });

// fs.copyFile("./next.txt", "./demo.txt", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Data copied succesfully");
//   }
// });

//^ ===================================================================

fs.mkdir("./demo", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Folder Created Successfully");
    fs.writeFile("./demo/arithmetic.txt", "Hello NodeJS.", (err) => {
      if (err) {
        throw err;
      } else {
        console.log("File created successfully");
        fs.appendFile(
          "./demo/Arithmetic.txt",
          " NodeJS is a Runtime Environment",
          (err) => {
            if (err) {
              throw err;
            } else {
              console.log("Data Appended successfully");
              fs.copyFile("./demo/Arithmetic.txt", "./demo.txt", (err) => {
                if (err) {
                  throw err;
                } else {
                  console.log("Data copied successfully");
                }
              });
            }
          }
        );
      }
    });
  }
});

setTimeout(() => {
  fs.rename("./demo/Arithmetic.txt", "./demo/add.txt", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File renamed successfully");
    }
  });
}, 3000);

setTimeout(() => {
  fs.unlink("./demo/add.txt", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File deleted successfully");
      fs.rmdir("./demo", (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Folder deleted successfully");
        }
      });
    }
  });
}, 5000);
