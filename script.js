'use strict';

const videos = gsap.utils.toArray('.video');
gsap.set(videos, {opacity: 0});
gsap.registerPlugin(ScrollTrigger);

videos.forEach((video) => {
  ScrollTrigger.create ({
    
    trigger: video,
    start: 'top center',
    end: 'bottom center',
    markers: false,
    onEnter: () => {
      gsap.to(video, {opacity: 1});
      video.play()
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });  
});


