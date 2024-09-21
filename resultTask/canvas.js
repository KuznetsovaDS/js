(function () {
    "use strict";
    var canvas = document.getElementById('myCanva');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    if (ctx && typeof ctx.createLinearGradient === 'function') {
    var gradient = ctx.createLinearGradient(0, 0, 300, 300);
       gradient.addColorStop(0, 'blue');
       gradient.addColorStop(0.5, 'green');
       gradient.addColorStop(1, 'red');
       ctx.fillStyle = gradient;
       ctx.fillRect(0,0, 300, 300);
    } else {
            console.log("Canvas не поддерживает градиенты");
        }
    } else {
        console.log("Canvas не поддерживается");
    }
})();