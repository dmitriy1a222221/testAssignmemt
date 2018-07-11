
document.addEventListener('DOMContentLoaded', () => {
    (function scroll() {
        let counter__list = document.querySelector('.counter__list');
        let counterBlock = document.querySelector('.counter');
        let elements = document.querySelectorAll('.counter__list li');
        let count = 0;
        let currElement = [1];
        let arrScrollHeight = [0, 100, 200, 300, 400];

        counterBlock.innerHTML = `${1}/${elements.length}`;

        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowUp'){
                (function keyUp() {
                    count--;
                    if(count < 0) count = arrScrollHeight.length-1;
                    currElement.splice(0, 1, currentElement());
                    counterBlock.innerHTML = `${currElement}/${elements.length}`;
                    counter__list.style.cssText = `transform: translateY(-${arrScrollHeight[count]}vh)`
                })()
            }

        });
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowDown'){
                (function keyDown() {
                    count++;
                    if(count === arrScrollHeight.length) count = 0;
                    currElement.splice(0, 1, currentElement());
                    counterBlock.innerHTML = `${currElement}/${elements.length}`;
                    counter__list.style.cssText = `transform: translateY(-${arrScrollHeight[count]}vh)`
                })()
            }

        });
        function currentElement () {
            console.log(count);
            let currentEl;
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