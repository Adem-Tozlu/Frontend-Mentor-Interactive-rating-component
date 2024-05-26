const span =document.querySelectorAll('span');
const page1 = document.querySelectorAll('.page1');
const page2 = document.querySelector('.page2');
const submit = document.querySelector('.submit');
const points = document.querySelector('.points');

let letztesElement = null;
span.forEach((item) => {

    item.dataset.ursprünglicheFarbe = item.style.backgroundColor;
    item.dataset.ursprünglichefarbeinnen = item.style.color;

    item.addEventListener('click', () => {
        
        
        if(letztesElement !== null){
            letztesElement.style.backgroundColor = letztesElement.dataset.ursprünglicheFarbe;
            letztesElement.style.color = letztesElement.dataset.ursprünglichefarbeinnen;
        }
        letztesElement = item;
        letztesElement.style.backgroundColor = 'white';
        letztesElement.style.color = 'black';
      
        points.textContent = `You selected ${letztesElement.innerText} out of 5`;
    });
});

page1.forEach((item) => {
    

submit.addEventListener('click', () => {
    if(letztesElement === null){
        alert('Please select an option');
        return;
    }

item.style.display = 'none';
page2.style.display = 'block';

});});



