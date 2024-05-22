document.getElementById('astroImage').addEventListener('click', function () {
    const countdownElement = document.getElementById('countdown');
    let countdown = 3;
    countdownElement.textContent = countdown;
    countdownElement.style.display = 'block';
    
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            countdownElement.textContent = countdown;
        } else {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';
            openFullscreen(document.getElementById('astroImage'));
        }
    }, 1000);
});

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

