const input=document.getElementById("ip");
const output=document.getElementById("output");
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{

const promise1=new Promise((resolve)=>{
setTimeout(()=> {
		resolve(Number(input.value));
		},2000)//2second delay
	});
    promise1.then((num)=>{
        output.textContent=`Result: ${num}`;       
        return num;
    })
      
    .then((num) =>{
    const promise2=new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(num*2);
          },1000);  
    });
    return promise2;
})
    .then((num)=>{
    output.textContent=`Result: ${result}`;
   return num;
    })
    .then((num)=>{
        const promise3=new Promise((resolve)=>{
    setTimeout(()=> {
        resolve(num-3);
    },1000);
});
return promise3;
})
    .then((num)=>{
        output.textContent=`Result: ${result}`;
        return num;
    })
    .then((num)=>{
        const promise4=new Promise((resolve)=>{
            setTimeout(()=> {
                resolve(num/2);
            },1000);
        });
        return promise4;
    })
    .then((num)=>{
        output.textContent=`Result: ${result}`;
        return num;
    })
    .then((num)=>{
        const promise5=new Promise((resolve)=>{
            setTimeout(()=> {
                resolve(num+10);
            },1000);
        });
        return promise5;
    })
    .then((num)=>{
        output.textContent=`Final Result: ${result}`;
    })
    .catch((error)=>{
        console.log(error);
    });
		});
