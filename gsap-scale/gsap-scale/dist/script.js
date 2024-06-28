gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({scrollTrigger:{
        trigger: '.container',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        markers: true,
              pinSpacing: false,
      scrub: true,
    }
     })
            tl.to('.circle', {
              scale: 5
       })
            .to('h1', {
              scale: 10,
             
            }, 0)
            .to(['.circle', 'h1'], {
              opacity: 0
            })