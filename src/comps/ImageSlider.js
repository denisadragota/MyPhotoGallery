import React, {useState} from 'react';
import useFirestore from "./hooks/UseFirestore";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa";

const ImageSlider = () => {
    const {docs} = useFirestore('images');
    const [current, setCurrent] = useState(0);
    //const length = docs.length;

    const nextSlide = () => {
        setCurrent(current===(docs.length-1)?0:(current+1));

    };
    const prevSlide = () => {
        setCurrent(current===0?(docs.length-1):(current-1));

    };
    if (!Array.isArray(docs) || docs.length <= 0)
    {
        return null;
    }

    return (
        <section className = 'slider' >


                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}  />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {docs.map((doc)=> {

                    return (
                        <div
                            className={doc.key===current ? 'slide active': 'slide'}
                            key={doc.key}>
                            {doc.key === current  && (< img src = {doc.url} alt ="slide pic" className='image'/>)}
                        </div>
                    );

                })}


        </section>
    );
};
export default ImageSlider;
