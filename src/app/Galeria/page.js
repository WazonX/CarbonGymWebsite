'use client'
import React from "react";
import image1 from "./1.jpeg"
import image2 from "./2.jpeg"
import image3 from "./3.jpeg"
import image4 from "./4.jpeg"
import image5 from "./5.jpeg"
import image6 from "./6.jpeg"
import image7 from "./7.jpeg"
import image8 from "./8.jpeg"
import image9 from "./9.jpeg"
import image10 from "./10.jpeg"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



function Gallery({ items, setIndex }) {
    return (
      <ul className='gallery-container mx-auto w-75'>
        {items.map((image, i) => (
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
  
  function SingleImage({ image, onClick }) {
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
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
  
  const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]