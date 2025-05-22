document.getElementById("btn").addEventListener("click",function(e){
const input=parseFloat(document.getElementById("ip").value);
if(isNaN(input)){
    alert("Please enter a valid number");
    return;
}
processInput(input)
.then(result=>{
    document.getElementById("output").innerHTML=`Final Result: ${result}`;
});
});
function processInput(number){
new Promise(function (resolve){
		setTimeout(()=> {
			console.log(`Result:${number}`);
			resolve(number);
		},2000)//2second delay
	})
    .then(value=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let number=value*2;
                console.log(`Result:${number}`);
                resolve(number);
            },2000);
        });
	})
			.then(value=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let number=value-3;
                console.log(`Result:${number}`);
           resolve(number);
            },1000)
       });
      })
.then(value=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let number=value/2;
            console.log(`Result:${number}`);
            resolve(number);
        },1000);
    });
})
.then(value=>{
   return new Promise(resolve=>{
    setTimeout(()=>{
        let number=value+10;
        console.log(`Final Result: ${number}`);
    resolve(number);
    },1000)
   });
});
}
