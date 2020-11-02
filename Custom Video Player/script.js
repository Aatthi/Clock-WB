    // Get our Elements
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress_filled');

    const toggle = player.querySelector('.toggle');
    const skipButton = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player_slider');



    // Build Our Functions 
    function togglePLay() {
        if (video.paused){
            video.play();
        } else {
            video.pause();
        }
    }

    function updateButton(){ 
        const icon = this.paused ? '►' : '❚❚';
        console.log('Update the button');
        toggle.textContent = icon;
    }

    function skip() {
        console.log(this.dataset.skip);
        video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleRangeUpdate() {
        console.log(this.value)
    }


  
    // Hook up the Event Listeners
    video.addEventListener('click', togglePLay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);

    toggle.addEventListener('click', togglePLay);

    skipButton.forEach(button => button.addEventListener('click', skip));
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));   