document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');

    // Optional: Pause other videos when one plays
    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
        
        // Add a subtle fade-in effect when video loads
        video.addEventListener('loadeddata', () => {
            video.style.opacity = 1;
        });
    });

    console.log('Hyunart Portfolio Loaded');
});
