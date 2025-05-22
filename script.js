function clickHandler() {
  let div = document.getElementById("output")
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
		  //alert(document.getElementById("ip").value)
        resolve(document.getElementById("ip").value)
      }, 2000)
    })
  }
  function promise2(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num*2)
      }, 2000)
    })
  }
  function promise3(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num-3)
      }, 1000)
    })
  }
  function promise4(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num/2)
      }, 1000)
    })
  }
  function promise5(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num+10)
      }, 1000)
    })
  }
  promise1().then((res)=>{
	  //alert(res)
    div.textContent=`Result: ${res}`;
    return promise2(res)
  }).then((res)=>{
    div.textContent=`Result: ${res}`;
    return promise3(res)
  }).then((res)=>{
    div.textContent=`Result: ${res}`;
    return promise4(res)
  }).then((res)=>{
    div.textContent=`Result: ${res}`;
    return promise5(res)
  }).then((res)=>{
    div.textContent=`Final Result: ${res}`;
    
  })
}