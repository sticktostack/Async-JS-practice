let textG = function(){
  console.log(Math.floor(Math.random()*10)+10);
}

let interval ;
let h = document.getElementById('heading')
let a = document.querySelector('#start').addEventListener('click',function(){
  h.innerHTML = 'Generating'
  interval = setInterval(function(){
    textG()
  },1000)
})

document.querySelector('#end').addEventListener('click',function(){
  h.innerHTML = 'Stopped'
  clearInterval(interval)
})
