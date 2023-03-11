import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
const Gallery = ({ images }) => {
  return (
    <div className="gallery__section text-white bg-c-primary section">
      <div className="section-title mb-10 text-center">
        <h5>Our Story?</h5>
        <h2 className="before:left-[50%] before:translate-x-[-50%]">Gallery</h2>
      </div>

      <div className="gallery-content container mx-auto">
        {images.map((img) => {
          return (
            <motion.div
              whileHover={{
                y: "-3%",
              }}
              key={img.id}
              className={`gallery-img-wrapper ${img.class ? img.class : ""}`}
            >
              <LazyLoadImage src={img.img} effect="blur" width="100%" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
