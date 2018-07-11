
document.addEventListener('DOMContentLoaded', () => {
    (function sroll() {
        let wrappBlock = document.querySelector('.wrapp-block');
        let counterBlock = document.querySelector('.counter');
        let elments = document.querySelectorAll('.wrapp-block li');
        let count = 0;
        let currentEl = 1;
        let arrSrollHeight = [0, 100, 200, 300, 400];
        console.log(count);


        function currentElement () {
            switch (count) {
                case 0:
                    currentEl = 1;
                    break;
                case 1:
                    currentEl = 2;
                    break;
                case 2:
                    currentEl = 3;
                    break;
                case 3:
                    currentEl = 4;
                    break;
                case 4:
                    currentEl = 5;
                break;

            }

        }


        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowUp'){
                (function keyUp() {
                    count--;
                    if(count < 0) count = arrSrollHeight.length-1;
                    currentElement();
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count]}vh)`
                })()
            }

        });
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowDown'){
                (function keyDown() {
                    count++;
                    currentElement();
                    if(count === arrSrollHeight.length) count = 0;
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count]}vh)`
                })()
            }

        });
        counterBlock.innerHTML = `${currentEl}/${elments.length}`;
    })()
});