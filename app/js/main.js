
document.addEventListener('DOMContentLoaded', () => {
    (function sroll() {
        let wrappBlock = document.querySelector('.wrapp-block');
        let counterBlock = document.querySelector('.counter');
        let elments = document.querySelectorAll('.wrapp-block li');
        let count = 0;
        let currElement = [1];
        let arrSrollHeight = [0, 100, 200, 300, 400];

        counterBlock.innerHTML = `${1}/${elments.length}`;

        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowUp'){
                (function keyUp() {
                    count--;
                    if(count < 0) count = arrSrollHeight.length-1;
                    currElement.splice(0, 1, currentElement());
                    counterBlock.innerHTML = `${currElement}/${elments.length}`;
                    console.log(currElement);
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count]}vh)`
                })()
            }

        });
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowDown'){
                (function keyDown() {
                    count++;
                    currElement.splice(0, 1, currentElement());

                    console.log(currElement);
                    if(count === arrSrollHeight.length) count = 0;
                    counterBlock.innerHTML = `${currElement}/${elments.length}`;
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count]}vh)`
                })()
            }

        });
        function currentElement () {
            console.log(count);
            var currentEl;
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
            return currentEl
        }


    })()
});