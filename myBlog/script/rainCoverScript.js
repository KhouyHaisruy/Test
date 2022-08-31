function rain(){
    let amount = 200;
    let cover = document.querySelector('.img-cover');
    let i = 0;
    while(i < amount){
        let drop = document.createElement('r');

        let size = Math.random()*5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 0.2 +size+'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay+'s';
        drop.style.animationDuration = 1+ duration+'s';

        cover.appendChild(drop);
        i++
    }
}
rain();