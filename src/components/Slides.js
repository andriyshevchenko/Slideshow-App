import React, { useState } from 'react';

function Slides({slides}) {

    const [index, updateIndex] = useState(0);
    const [slide, updateSlide] = useState(() => slides[index]);

    const restart = () => {
        updateSlide(slides[0])
        updateIndex(0); 
     }
 
    const nextSlide = () => {
       updateSlide(slides[index + 1])
       updateIndex(index + 1); 
    }

    const prevSlide = () => {
        updateSlide(slides[index - 1])
        updateIndex(index - 1); 
     }

    const isFirst = index === 0;
    const isLast = index === slides.length - 1;

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled={isFirst} onClick={restart}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={isFirst} onClick={prevSlide}>Prev</button>
                <button data-testid="button-next" className="small" disabled={isLast} onClick={nextSlide}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
