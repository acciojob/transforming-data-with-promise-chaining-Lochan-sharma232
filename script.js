
document.getElementById("btn").addEventListener("click",function(e){
const input=parseInt(document.getElementById("ip").value);
if(isNaN(input)){
    alert("Please enter a valid number");
    return;
}
else{
let =  processInput(input)
}
});
 function processInput(input){

let myPromise=new Promise(function (resolve){
		setTimeout(()=> {
			console.log(`Result:${input}`);
			resolve(input);
		},2000)//2second delay
	})
    .then((value)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let result=value-2;
                console.log(`Result:${result}`);
                resolve(result);
            },1000);
        })
    })
       .then((value)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let result=value-3;
                console.log(`Result:${result}`);
           resolve(result);
            },2000)
       });
      })
.then((value)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let result=value/2;
            console.log(`Result:${result}`);
            resolve(result);
        },2000)
    });
})
.then((value)=>{
   return new Promise(resolve=>{
    setTimeout(()=>{
        let result=value+10;
        console.log(`Final Result: ${result}`);
        document.getElementById("output").innerHTML=`Result: ${result}`;
        resolve(result);
    },1000)
   });
})
}
