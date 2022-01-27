const body=document.querySelector('body')
const about=document.querySelector('about')
window.addEventListener('scroll',()=>{
    let value=window.scrollY
    let colorvar= Math.round(255-(value/4)) 
    if (colorvar>=0) {
      body.style.backgroundColor=`rgb(255,255,${colorvar})`
      body.style.color=`black`
    }
    else{
      colorvar=Math.abs(colorvar)
      body.style.backgroundColor=`rgb(${255-colorvar-10},${255-colorvar-10},0)`
      body.style.color=`white`

    }

})