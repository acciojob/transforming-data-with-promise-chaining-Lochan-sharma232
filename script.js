//your JS code here. If required.
let user1=document.getElementById("ip");
let user2=document.getElementById("btn");
let user3=document.getElementById("output");

btn.addEventListener("onclick",function(e){
	e.preventDefault();
	let myPromise=new Promise(function (resolve,reject){
		setTimeout(function() {
			output.textContent=`Result: ${number}`;
			resolve(number);
		},2000)//2second delay
	})
})
