const containerE1 = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorcontainerE1 = document.createElement ('div');

    colorcontainerE1.classList.add
    ('color-container');
    containerE1.appendChild(colorcontainerE1);

    
}
const colorcontainerEls = document.querySelectorAll('.color-container');
 gerenratecolors();
function gerenratecolors(){
    colorcontainerEls.forEach((colorcontainerE1)=> {
        const newcolorcode = randomcolor();
        colorcontainerE1.style.backgroundColor = '#' + newcolorcode;
        colorcontainerE1.innerText = '#' + newcolorcode;
        
     
        
        
      
        

    });

}
function randomcolor (){
    const chars = '0123456789abcdef'
    const colorcodelength = 6;
    let colorcode = ''
    for (let index = 0; index < colorcodelength; index++) {
        const randomnumber =Math.floor (Math.random() * 
        chars.length)
        colorcode += chars.substring(randomnumber, randomnumber +1);
        
    
    }
    return colorcode;
}