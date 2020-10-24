
import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    '/static/77e184939cd1f8f52289b2844bf4f8ba/xxl_kfz63354356_img_9845.jpg',
    '/static/bedebffd1a407249625bb21d98b3a6b9/xxl_kfz63354356_img_9846.jpg',
    '/static/a2858a8e8bc61a5745a3eff4af2237cb/xxl_kfz63354356_img_9847.jpg'
];

const Slideshow = () => {
    return (
        <div>
            <Slide easing="ease" autoplay={false} transitionDuration={250}>                
                {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                            <div style={{ backgroundImage: `url(${each})` }} />
                        </div>
                ))}
            </Slide>
        </div>
    )
};

export default Slideshow;