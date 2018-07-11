
document.addEventListener('DOMContentLoaded', () => {
    (function sroll() {
        let wrappBlock = document.querySelector('.wrapp-block');
        let counterBlock = document.querySelector('.counter');
        let elments = document.querySelectorAll('.wrapp-block li');
        let count = {countNum: 0};
        let currentEl = [];
        let arrSrollHeight = [0, 100, 200, 300, 400];


        function currentElement () {
            switch (count[0]) {
                case 0:
                    currentEl[0] = 1;
                    break;
                case 1:
                    currentEl[0] = 2;
                    break;
                case 2:
                    currentEl[0] = 3;
                    break;
                case 3:
                    currentEl[0] = 4;
                    break;
                case 4:
                    currentEl[0] = 5;
                break;

            }

        }


        document.addEventListener('keyup', (event) => {
            currentElement();
            const keyName = event.key;
            if(keyName === 'ArrowUp'){
                (function keyUp() {
                    count[0]--;
                    console.log(count[0]);
                    if(count[0] < 0) count[0] = arrSrollHeight.length;
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count[0]]}vh)`
                })()
            }

        });
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if(keyName === 'ArrowDown'){
                (function keyDown() {
                    count[0]++;
                    if(count[0] = arrSrollHeight.length) count[0] = 0;
                    wrappBlock.style.cssText = `transform: translateY(-${arrSrollHeight[count[0]]}vh)`
                })()
            }

        });
        counterBlock.innerHTML = `${currentEl[0]}/${elments.length}`;
    })()
});