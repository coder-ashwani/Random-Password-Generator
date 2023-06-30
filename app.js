const upperset= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset= "abcdefghijklmnopqrstuvwxyz";
const numberset= "1234567890";
const symbolset= "!@$%&*:#~";

// imporatant selectors
const passbox= document.getElementById("tbox");
const totalchar=document.getElementById("plength");
const upperinput=document.getElementById("upperinput");
const lowerinput=document.getElementById("lowerinput");
const numberinput=document.getElementById("numberinput");
const symbolinput=document.getElementById("symbolinput");


const getrandomdata = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatepassword = (password= "") =>{
    if(upperinput.checked){
        password += getrandomdata(upperset);
    }
    if(lowerinput.checked){
        password += getrandomdata(lowerset);
    }
    if(numberinput.checked){
        password += getrandomdata(numberset);
    }
    if(symbolinput.checked){
        password += getrandomdata(symbolset);
    }
    if(password.length < totalchar.value){
         return generatepassword(password);
    }
    
//    passbox.innerText = truncatestring(password,totalchar.value); this line is not working , I don't know the reason if yo know it please tell
   console.log(truncatestring(password,totalchar.value));
   document.getElementById("tbox").value = truncatestring(password,totalchar.value);
//    document.getElementById("tbox").value="text djkafs";
}

document.getElementById("btn").addEventListener("click",function(){
    generatepassword();
})

function truncatestring(str,num) {
    if(str.length>num){
        let substr =str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}

 
// console.log("hello");