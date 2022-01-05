#!/usr/bin/env node

const fs = require('fs'); //  this is how to import fs module in javaScript
// // npm is node package manager
// i  means install
// fs is a package of node // fs packager can read or write the command
// if you will add wcat in script so it is local variable and if you want 
//  to set global variable so you need to add bin section and add wcat after that 
// npm init will use to make package.json file 
// npm link to link  to global path use npm unlink if you want to unlink and 
// if you don't have root access then use sudo npm link you will get the acess


// console.log("hello worldn");

// this  is predefined method is use to write something in exist file
// let data = fs.readFileSync('abc.txt' , "utf-8");// and this methods is used to read the file

// console.log(data);
// fs.writeFileSync("abc.txt" , data + "hello I am changing the text of abc.txt")// this is the way you can appened the txt and if you want to override then remove +data
// console.log(data);
// // console.log(varr);
// console.log(fs.existsSync("abc.txt")); // to check this file is exist or not if exist it will return true otherwise it will return falsee

// fs.writeFileSync("abc.txt", data + " hello we are here for helping you so calm down");

// console.log(fs.existsSync("abc.txt"));
// let cmds = process.argv.slice(2);

// console.log(cmds);

// console.log(process.argv.slice(2));
// let cmds  =  process.argv.slice(2);
// function wcat(cmds) {
//     if(cmds.length ==0){
//         console.log("Invalid input");
//         return;
//     }
//     let data = fs.readFileSync(cmds[0], "utf-8");
//     console.log(data);
    
// }
// wcat(cmds);

// this is for multiple file if you wanna print and if one file doesn't exist then it will not run further files
// let cmds  =  process.argv.slice(2);
// function wcat(cmds) {
//     if(cmds.length ==0){
//         console.log("Invalid input");
//         return;
//     }

//     for(i in cmds){
//         if(!fs.existsSync(cmds[i])){
//             console.log(cmds[i] + " doesn't exist");
//             return;

//         }
//     }

//     for(i in cmds){
//         let data = fs.readFileSync(cmds[i], "utf-8");
//         console.log(data);
//     }
// }
//// this is recommended
// wcat(cmds);

// this is the code for if your one is doesn't exist then your further files will run smoothly and the doesn't exist file will show it doesn't exist

// let cmds  =  process.argv.slice(2);
// function wcat(cmds) {
//     if(cmds.length ==0){
//         console.log("Invalid input");
//         return;
//     }

//     for(i in cmds){
//         if(!fs.existsSync(cmds[i])){
//             console.log(cmds[i] + " doesn't exist");
//             return;

//         }else {
//             let data = fs.readFileSync(cmds[i], "utf-8");
//         console.log(data);
//     }
//     }
// // this is not recommended because after the error its not good to run the code 
//     // for(i in cmds){
        
//     // }
// }
// wcat(cmds);

// if your file name has space inside the name like "intro class" so you can type like this 
//  like intro" "class use a string

//   this is for if you want remove  white space lines 
// let cmds  =  process.argv.slice(2);
// function wcat(cmds) {
    
//     let options = cmds.filter(function (data, index) {
//         return data.startsWith("-");// you can use   data.chatAt(0);
//     });

//     let files = cmds.filter(function (data, index) {
//         return !data.startsWith("-");
//     });

//     if(files.length ==0){
//         console.log("Invalid input");
//         return;
//     }

//     for(i in files){
//         if(!fs.existsSync(files[i])){
//             console.log(files[i] + " doesn't exist");
//             return;

//         }
//     }
//     let  k = 1;
//     for(i in files){
//         let data = fs.readFileSync(files[i], "utf-8");
//         if(options.includes("-s")){ // use -s to remove spaces 
//             let lines = data.split( "\n");// this is for change string into array
//             let allText = "";
//             for(j in lines){
//                 if(lines[j] !=""){//// th
//                     // console.log(lines[j]);
//                     allText +=  lines[j] + "\n";// this will do the same
//                 }
//             }
//             // console.log(lines);
//                 console.log(allText);// this will do the same
//                 // return; // remove this if you want to run multiple files 
                
//             }else{
//                 console.log(data);
//             }
            
//         }
// }

// // command for remove spaces in the file is "wcat -s fileName" or "wcat fileName -s";

// wcat(cmds);

// let cmds  =  process.argv.slice(2);
// function wcat(cmds) {
    
//     let options = cmds.filter(function (data, index) {
//         return data.startsWith("-");// you can use   data.chatAt(0);
//     });

//     let files = cmds.filter(function (data, index) {
//         return !data.startsWith("-");
//     });

//     if(files.length ==0){
//         console.log("Invalid input");
//         return;
//     }

//     for(i in files){
//         if(!fs.existsSync(files[i])){
//             console.log(files[i] + " doesn't exist");
//             return;

//         }
//     }
//     let  k = 1;
//     for(i in files){
//         let data = fs.readFileSync(files[i], "utf-8");
//         if(options.includes("-n")){ //// use -n for adding 1 number before the numbers
//             let lines = data.split( "\n");// this is for change string into array
//             let allText = "";
//             for(j in lines){
//                 if(lines[j] !=""){//// th
//                     // console.log(lines[j]);
//                     allText += k++ +" "  + lines[j] + "\n";// this will do the same
//                 }
//             }
//             // console.log(lines);
//                 console.log(allText);// this will do the same
//                 // return;
                
//             }else{
//                 console.log(data);
//             }
            
//         }
// }

// // command for remove spaces in the file is "wcat -s fileName" or "wcat fileName -s";

// wcat(cmds);

/////////// this is 3rd 

// this is for only add number before the lines

//  let cmds  =  process.argv.slice(2);
// function wcat(cmds) {
    
//     let options = cmds.filter(function (data, index) {
//         return data.startsWith("-");// you can use   data.chatAt(0);
//     });

//     let files = cmds.filter(function (data, index) {
//         return !data.startsWith("-");
//     });

//     if(files.length ==0){
//         console.log("Invalid input");
//         return;
//     }

//     for(i in files){
//         if(!fs.existsSync(files[i])){
//             console.log(files[i] + " doesn't exist");
//             return;

//         }
//     }
//     let k = 1;
//     for(i in files){
//         let data = fs.readFileSync(files[i], "utf-8");
//         if(options.includes("-s")){ // use -s to remove spaces 
//             let lines = data.split( "\n");// this is for change string into array
//             let allText = "";
//             for(j in lines){
//                 if(lines[j] !=""){//// th
//                             if(options.includes("-n")){
//                             console.log(k++ + ". " + lines[j]);
//                             }else{
//                             console.log(lines[j]);
//                             }
                    

//               //       allText +=  lines[j] + "\n";// this will do the same
//                 }
//             }
// //             console.log(lines);
// //                 console.log(allText);// this will do the same
// //                 return; // remove this if you want to run multiple files 
                
//             }else if(options.includes("-n")){
//               let lines = data.split( "\n");
//               for(j in lines){
//               console.log(k++ + ". " + lines[j]);
//               }


//             }else{
//                 console.log(data);
//             }
            
//         }
// }

// // command for remove spaces in the file is "wcat -s fileName" or "wcat fileName -s";

// wcat(cmds);


let cmds =  process.argv.slice(2);

function wcat(cmds) {

    let options = cmds.filter(function (data, index) {
       return data.startsWith("-"); 
    });

    let files = cmds.filter(function (data, index) {
        return !data.startsWith("-");
    });

    if(files.length ==0){
        console.log("Invalid Input");
        return;
    }

    for(i in files){
       if(!fs.existsSync(files[i])){
           console.log(files[i] + " doesn't exist");
           return;
       }
    }
// this is writing command 
    if(options.includes("-w")){
        if(options.length !=1 || files.length !=2 || cmds.indexOf("-w")!=1){
            console.log("Invalid input1");
            return;
        }

        let data = fs.readFileSync(files[0] , "utf-8");

        fs.writeFileSync(files[1] , data);
        return;

    }
    // this is append command 

    if(options.includes("-a")){
        if(options.length!=1 ||  files.length!=2 || cmds.indexOf("-a") !=1){
            console.log("Invalid Input2");
            return;

        }
        let append = fs.readFileSync(files[0], "utf-8");
        let abc  = fs.readFileSync(files[1] , "utf-8" );

        fs.writeFileSync(files[1], abc+ append );
        return;
    }
    // appened data removing empty lines

    if(options.includes("-ws") ){
        if(options.length!=1 ||  files.length!=2 || cmds.indexOf("-ws") !=1){
            console.log("Invalid Input3");
            return;
        }
        let data = fs.readFileSync(files[0], "utf-8");
        let lines = data.split("\n");
        // for (i in lines){
        //     if(lines[i] != ""){
        //         console.log(lines[i]);
        //     }
        // }
        let  avii = fs.readFileSync(files[1], "utf-8");
        fs.writeFileSync(files[1] , avii+lines);
        return;
    }

// this is reading command
    let  k =1;
    for(i in files){
        let data = fs.readFileSync(files[i] , "utf-8");

        if(options.includes("-s")){
            let lines = data.split("\n");
            for(j in lines){
                if(lines[j] != ""){
                    if(options.includes("-n") || options.includes("-b")){
                        console.log(k++ + "." + lines[j]);
                    }else{
                        console.log(lines[j]);
                    }
                }
            }

        }else if((options.includes("-n") && !options.includes("-b") )  || options.includes("-n") && options.includes("-b") && options.indexOf("-n")<options.indexOf("-b") ){
             let lines = data.split("\n");
            for(j in lines){
                console.log(k++ + ". " + lines[j]);
            }

        }else if (options.includes("-b")){
            let lines = data.split("\n");
            for(j in lines){
                if(lines[j] != ""){
                    console.log(k++ + "."+ lines[j]);
                }else{
                    console.log(lines[j]);
                }
            }

        }
        else{
            console.log(data);
        } 

    }
    
}
wcat(cmds);
















