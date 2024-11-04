'use client'
import React from "react";
import image1 from "./Image-1.jpeg"
import image2 from "./Image-2.jpeg"
import image3 from "./Image-3.jpeg"
import image4 from "./Image-4.jpeg"
import image5 from "./Image-5.jpeg"
import image6 from "./Image-6.jpeg"
import image7 from "./Image-7.jpeg"
import image8 from "./Image-8.jpeg"
import image9 from "./Image-9.jpeg"
import image10 from "./Image-10.jpeg"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]


function Gallery({ items, setIndex }:{items:any,setIndex:any}) {
    return (
      <ul className='gallery-container mx-auto w-75'>
        {items.map((image:any, i:any) => (
          <motion.li
            className="gallery-item"
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{y:-10}}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            onClick={() => setIndex(i)}
            style={{ backgroundImage: `url(`+image.src+`)` }}
            layoutId={image}
          />
        ))}
      </ul>
    );
  }
  
  function SingleImage({ image, onClick }:{image:any,onClick:any}) {
    return (
      <div className="single-image-container" onClick={onClick}>
        <motion.div
          layoutId={image}
          className="single-image"
          style={{ backgroundImage: `url(`+image.src+`)` }}
        />
      </div>
    );
  }
  
  export default function App() {
    const [index, setIndex] = useState(false);
  
    return (
      <div className="w-100">
        <Gallery items={images} setIndex={setIndex} />
        <AnimatePresence>
          {index !== false && (
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 0.8, transition:{duration:0.3} }}
              exit={{ opacity: 0, transition:{duration:0.3}  }}
              key="overlay"
              className="overlay"
              onClick={() => setIndex(false)}
            />
          )}
  
          {index !== false && (
            <SingleImage
              key="image"
              index={index}
              image={images[index]}
              setIndex={setIndex}
              onClick={() => setIndex(false)}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
  
