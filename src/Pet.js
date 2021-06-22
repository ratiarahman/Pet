const Pet = ({ name, animal, breed, location, images, id }) => {
  let dummyImage = "http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length){
    dummyImage = images[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
          <img src={dummyImage} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;

// const Pet = (props) => {
//     return React.createElement('div', {}, [
//       React.createElement('h2', {}, props.name),
//       React.createElement('h3', {}, props.animal),
//       React.createElement('h3', {}, props.breed),
//     ]);
//   };
