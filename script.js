let PlayerBtnOne = document.querySelector('.plsub1')
let PlayerBtnTwo = document.querySelector('.plsub2')

let PlayerInputOne = document.querySelector('.inputone')
let PlayerInputTwo = document.querySelector('.inputtwo')

document.querySelector('.playerboxtwo').style.display = 'none'
document.querySelector('.result').style.display = 'none'

let playernumber = document.querySelector('.playernumber');

function one(){
    PlayerBtnOne.addEventListener('click' , ()=>{
        if(!PlayerInputOne || PlayerInputOne.value < 1 || PlayerInputOne.value > 10 || isNaN(PlayerInputOne.value) ){
            document.querySelector('.inptuonestatus').style.color = '#ff0000'
        }
        else{
            document.querySelector('.inptuonestatus').style.color = 'transparent';
            document.querySelector('.playerboxone').style.display = 'none'
            document.querySelector('.playerboxtwo').style.display = 'block'
            playernumber.innerHTML = 'Player 2';
        }
    })
}
one();





function two(){
    let count = 5;
    PlayerBtnTwo.addEventListener('click' , ()=>{
        if(!PlayerInputTwo || PlayerInputTwo.value < 1 || PlayerInputTwo.value > 10 || isNaN(PlayerInputTwo.value)){

            document.querySelector('.inputtwostatus').innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Please Enter a number between 1-10`
            document.querySelector('.inputtwostatus').style.color = '#ff0000'
        }
        else{
            count -= 1
            document.querySelector('.inputtwostatus').style.color = '#ff0000'
            document.querySelector('.inputtwostatus').innerHTML = `You can try ${count} times`
            if(PlayerInputOne.value != PlayerInputTwo.value && count < 1 ){
                document.querySelector('.playerboxone').style.display = 'none'
                document.querySelector('.playerboxtwo').style.display = 'none'
                document.querySelector('.result').style.display = 'grid'
                document.querySelector('b').innerHTML = 'Player 1 Winer'
                playernumber.innerHTML = 'Player 1'
            }
            if(PlayerInputOne.value == PlayerInputTwo.value && count >= 1){
                document.querySelector('.playerboxone').style.display = 'none'
                document.querySelector('.playerboxtwo').style.display = 'none'
                document.querySelector('.result').style.display = 'grid'
                document.querySelector('b').innerHTML = 'Player 2 Winer'

            }
        }
    })
}
two();


document.querySelector('.reset').addEventListener('click' , ()=>{
    location.reload()
})