window.onload = function () {
    console.log('hello');


    const containerCanvas = document.getElementById('container');

    console.log(containerCanvas)


    containerCanvas.height = window.innerHeight * 0.8;
    const ctx = containerCanvas.getContext('2d');
    ctx.fillStyle = "green";


    //function to get random symbol
    function randomSymbol(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //create array of symbols
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    //add space, because
    alphabet.push(" ")


    //slow down animation
    var fps = 15;

    function draw() {
        setTimeout(function () {
            requestAnimationFrame(draw);
            //calculate how many rows if using fontsize 24px;
            const rows = containerCanvas.height / 24;
            console.log(rows);


            for (let i = 0; i < rows; i++) {

                //pick random symbol
                let symbol = alphabet[randomSymbol(0, 26)]

                //fade previous
                ctx.clearRect(0, i * 24, 24, 24)

                //draw text
                ctx.fillText(symbol, 0, i * 24);
            }
     

        }, 1000 / fps);
    }

    draw();


    // function renderFrame()    {
    //     requestAnimationFrame(renderFrame);

    //     //calculate how many rows if using fontsize 24px;
    // const rows=containerCanvas.height/24;
    // console.log(rows);

    // //get random symbol
    // function randomSymbol(min, max) { // min and max included 
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    //   }

    // //create array of symbols
    // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    // const alphabet = alpha.map((x) => String.fromCharCode(x));
    // //add space, because
    // alphabet.push(" ")

    // for (let i=0; i<rows; i++){

    //     //pick random symbol
    //     let symbol=alphabet[randomSymbol(0,26)]

    //     //fade previous
    //     ctx.clearRect(0,i*24, 24,24)

    //     //draw text

    //     ctx.fillText(symbol, 0, i*24);
    // }

    // }

    // renderFrame();

}