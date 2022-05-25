const fs = require('fs');
const translate = require("translate");
var arr = [];
const path = require('path');

const directoryPath = path.join(__dirname, '');



// translate by url file
async function  dich(UrlFile)  {
     var  a  = fs.readFileSync(UrlFile,"utf-8");
     const result = a.split(/\r?\n/);
     for(var  i = 2;i<result.length;i+=4){
          result[i]= await translate(result[i], "vi");
          console.log(i)
      }
     fs.writeFileSync(UrlFile,result.join("\n"))
}
// 
fs.readdir(directoryPath, function (err, files) {
   
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    files.forEach( (filee)=> {
       arr.push(filee);
       
    });
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr)
    
    for (let i = 3; i < arr.length; i++) {
        const testFolder = `./${arr[i]}`;
    
        fs.readdir(testFolder, (err, files) => {
            files.forEach(file => {
                if(file.includes(".srt")){
                    console.log(file)
                //
                // console.log("bat dau dich : " + file);
                 dich(path.join(__dirname,arr[i],file));
                fs.rename(path.join(__dirname,arr[i],file), path.join(__dirname,arr[i],file.replace(".en [TutFlix.ORG]","[TutFlix.ORG].en")) ,()=>{
                        console.log("done");
                    })
                }
            });
        });
    }
        
    
   
});
