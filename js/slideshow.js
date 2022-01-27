const box1=document.querySelector('#box1')
const box2=document.querySelector('#box7')
let images=['brandpiper.png','ubon.jpg','ultimate.png']
let index=0


function change() {
    box1.style.backgroundImage=`url('assets/${images[index]}')`;
    if (index<images.length) {
        console.log('good');
        index++
    }
    else{
        index=0
        box1.style.backgroundImage=`url('assets/${images[index]}')`;
    }
        setTimeout(change, 2000);
}
change()




