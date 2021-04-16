import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  // CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';
import LB from '../../images/PurpleLemonBars.jpg';
import Cake from '../../images/Cake.jpg';
import Gummy1 from '../../images/gummy1.jpeg';
import Gummy2 from '../../images/gummy2.jpeg';
import Gummy3 from '../../images/gummy3.jpeg';
import Powder from '../../images/Powder.png';
import Capsules from '../../images/Capsules.jpg';
// import Choco1 from '../../images/choco1.jpg';
import './index.styles.css';

const items = [
  {
    src: LB,
    altText: 'Space Lemon Bars',
    caption: 'Space Lemon Bars',
  },
  {
    src: Cake,
    altText: 'Cinnamon Bundt Cake',
    caption: 'Cinnamon Bundt Cake',
  },
  {
    src: Gummy1,
    altText: 'Gummy 1',
    caption: 'Gummy 1',
  },
  {
    src: Gummy2,
    altText: 'Gummy 2',
    caption: 'Gummy 2',
  },
  {
    src: Gummy3,
    altText: 'Gummy 3',
    caption: 'Gummy 3',
  },
  {
    src: Powder,
    altText: 'Powder',
    caption: 'Powder',
  },
  {
    src: Capsules,
    altText: 'Capsules',
    caption: 'Capsules',
  },
  // {
  //   src: Choco1,
  //   altText: 'Chocolates 1',
  //   caption: 'Chocolates 1',
  // }
];

const MyCara = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption />
      </CarouselItem>
    );
  });

  return (
    <div className='caraDivHello'>
      <Carousel
        className='kari'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {/* <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        className="thing"
      /> */}
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>

      <Link className='homeBDiv' to='/products'>
        <Button className='HomeBtn'>Click here to view our products</Button>
      </Link>
    </div>
  );
};

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // If set to false, carousel will not Autoplay (i.e. will not automatically cycle).
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
  // controls whether the touch gestures on the Carousel works or not (default: true)
  enableTouch: PropTypes.bool,
};

CarouselItem.propTypes = {
  // ...Transition.propTypes,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  in: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  slide: PropTypes.bool,
};
CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string,
};
export default MyCara;
