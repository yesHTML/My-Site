window.onload = function () {
    var time = 5;
    let animation = false;
    let up = true;
    function moveDown() {
        let id = null;
        const elem = document.getElementById("menu");   
        let mov = -450;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (mov == 0) {
            clearInterval(id);
            animation = false;
            //position check
            var menu = document.getElementById('menu');
            const cssObj = window.getComputedStyle(menu, null);
            let fromZero = parseInt(cssObj.getPropertyValue("top"), 10);
            console.log(fromZero);
            up = false;
          } else {
            mov = mov + time; 
            elem.style.top = mov + "px"; 
          }
        }
    }

    function moveUP() {
        let id = null;
        const elem = document.getElementById("menu");   
        let mov = -50;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (mov == -475) {
            clearInterval(id);
            animation = false;
            up = true;
          } else {
            mov = mov - time; 
            elem.style.top = mov + "px"; 
          }
        }
    }
        //select the thing we wanna drag
        var menu = document.getElementById('menu');
        const cssObj = window.getComputedStyle(menu, null);
        let fromZero = parseInt(cssObj.getPropertyValue("top"), 10);
        console.log(fromZero);
        //listen to the touchmove event, every time it fires, grab the location of the touch
        //then assign it to mustachio
        menu.addEventListener('touchmove', function (ev) {
            //grab the location of the touch
            var touchLocation = ev.targetTouches[0];
            //assign mustachio new coordinates based on the touch
            pos = touchLocation.pageY;

            if(pos <= 50){
                position = (pos - 475);
                menu.style.top = position + "px";
            }

            if(pos >= 450){
                position = (pos - 475);
                menu.style.top = position + "px";
            }
        })
        menu.addEventListener('touchend', function (ev) {
            //current mustachio position when dropped
            var y = parseInt(menu.style.top);
            if(position > -475 && up == true && animation == false){
                animation = true;
                moveDown();
            }

            if(position < 0 && up == false && animation == false){
                animation = true;
                moveUP();
            }

            y = parseInt(menu.style.top);
            console.log(y);
            if(y > 0){
                menu.style.top = "0px"
            }
        })
}