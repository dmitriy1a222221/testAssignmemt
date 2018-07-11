
document.addEventListener('DOMContentLoaded', () => {
    (function sroll() {
        let wrappBlock = document.querySelector('.wrapp-block');
        let counterBlock = document.querySelector('.counter');
        let count = 0;
        let arrSrollHeight = [0, 100, 200, 300, 400];

        counterBlock.innerHTML = `${document.querySelectorAll('.wrapp-block li').length}`;

        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowUp'){
                (function keyUp() {
                    count--;
                    if(count <= 0) count = 0;
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count]}vh)`
                })()
            }

        });
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowDown'){
                (function keyDown() {
                    count++;
                    if(count = arrSrollHeight.length) count = arrSrollHeight.length;
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count]}vh)`
                })()
            }

        });
    })()
});