/* 

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});



---------------------------------------------------*/

window.onload = function() 
    {
        //display loader on page load 
        $('#loader').delay(100).fadeOut(1000);
    }
    document.addEventListener("DOMContentLoaded", function() {
        const textElement = document.querySelector('.dynamic-text');
        textElement.textContent = 'SAE India Collegiate Club of MNNIT';  // Dynamic text
      });
      
      
      
      
      
      
