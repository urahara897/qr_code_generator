import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type in the URL: ",
            name: "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_codes/qr_image.png'));
        console.log("QR Code Generated!!!!");
        fs.writeFile('text_files/url.txt', url, err => {
            if (err) {
                console.log("Error in writing to file");
                throw err;
            } else {
                console.log("File saved!!!!");
            }
        })
    })
    .catch((error) => {
        console.log("Error in generating QR Code");
        throw error;
    });