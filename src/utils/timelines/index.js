import { TimelineMax as Timeline, Power1 } from 'gsap';

const getLogInTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const contentInner = node.querySelector('[node="half"]');

    timeline
        .from(contentInner, 0.4, { autoAlpha: 0, left: '35%', delay: 0.15, ease: Power1.easeIn });
    
    return timeline;
  }

  const getSignUpTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const contentInner = node.querySelector('[node="half"]');
    
    timeline
      .from(contentInner, 0.4, { autoAlpha: 0, right: '35%', delay: 0.15, ease: Power1.easeIn });
    
    return timeline;
  };

  const getLayerTimeLine = (node, delay, direction ) => {
    const timeline = new Timeline({ paused: false });
    const layer = node.querySelector('[transition="layer"]');
    const text = node.querySelector('[transition="text"]');
    const button = node.querySelector('[transition="button"]');
    
    if(direction === 'left') {
        timeline
            .set(layer, { right: 0} )
            .to(layer, 0.3, { right: '20%', width: '70%' })
            .to(layer, 0.3, { left: 0, right: 'auto', width: '30%' })
            
    }

    if(direction === 'right') {
        timeline
            .to(layer, 0.3, { left: '20%', width: '70%' })
            .to(layer, 0.31, { right: 0, left: 'auto', width: '30%' })
            
    }

    return timeline;
  };

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;
  let layerTimeLine;

    switch( pathname ) {
        
        case '/signup':
        timeline = getSignUpTimeline(node, delay)
        layerTimeLine = getLayerTimeLine(node, delay, 'left')
        break;

        case '/login':
        timeline = getLogInTimeline(node, delay);
        layerTimeLine = getLayerTimeLine(node, delay, 'right')
        break;

        default: 
        timeline;
    }

    if(timeline !== undefined) {
        window
        .loadPromise
        .then(() => requestAnimationFrame(() => {
            layerTimeLine.play();
            timeline.play();
        }))
    }
}

// Shits not firing.
export const exit = (node) => {
  const timeline = new Timeline({ paused: true });
  const contentInner = node.querySelector('[node="half"]');
    console.log('fired')
    
    if(direction ==='right') {
        timeline
            .to(contentInner, 0.15, { autoAlpha: 0, left: '35%', delay: 0.15, ease: Power1.easeIn });
            console.log('right')
    }
    
    if(direction === 'left') {
        timeline
            .to(contentInner, 0.15, { autoAlpha: 0, right: '35%', delay: 0.15, ease: Power1.easeIn });
            console.log('left')
    }

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
  
}