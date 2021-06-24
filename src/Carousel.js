import { useState } from 'react';

const Carousel = ({ images }) => {
  let [active, setActive] = useState(0);
  // let active = 0;
  let dummyImage = 'http://pets-images.dev-apis.com/pets/none.jpg';
  function handleIndexClick(e) {
    setActive(+e.target.dataset.index);
  }
  if (images.length) {
    dummyImage = images[active];
  }
  return (
    <div className="carousel">
      <img className="thumbnail" src={dummyImage} alt="animal" />
      <div className="carousel-smaller">
        {images.map((image, index) => {
          return (
            // eslint-disable-next-line
            <img src={image} alt="animal thumbnail" key={image} onClick={handleIndexClick} data-index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
