import React from "react"

var config = {
    showThumbnails: false,
    showPlayButton: false,
    lazyLoad: true,
    showNav: true,
    showFullscreenButton: false,
    disableKeyDown: true,
    renderLeftNav: (onClick, disabled) => (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
    ),
    renderRightNav: (onClick, disabled) => (
        <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
    ),

}

export default config;