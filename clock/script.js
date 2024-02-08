let clock = document.querySelector('.time')
let text = document.querySelector('.box')
// setInterval(()=>{
    let time = new Date().toLocaleTimeString()
    clock.innerHTML = time
    if(time >= 12){
        text.innerText = "Good Morning"
    }else if(time >= 17){
        text.innerText = "Good Morning"
    }else if(time >= 0){
        text.innerText = "Good Morning"
    }else{
        text.innerText = "Good evening"
    }
// },100)
