
import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = ({slideImages}) => {
    return (
        <div>
            <Slide easing="ease" autoplay={false} transitionDuration={250}>                
                {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                            <div style={{ backgroundImage: `url(${each.publicURL})` }} />
                        </div>
                ))}
            </Slide>
        </div>
    )
};

export default Slideshow;