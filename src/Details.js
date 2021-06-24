import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';

const Details = () => {
  const { id } = useParams(); // why {} not []
  const [ids, setIds] = useState([]);

  useEffect(() => {
    requestId();
    console.log(this);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //[] dependency array, render once  //question console log choltei thake jodi dependancy array na dei..why?

  async function requestId() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    setIds(json.pets);
  }
  return (
    <div className="details">
      {ids.map((id) => {
        return (
          <div key={id}>
            <Carousel images={id.images} />
            {/* <img src={id.images[0]} alt={id.name} /> */}
            <h2>{id.name}</h2>
            <h2>{`${id.animal} — ${id.breed} — ${id.city}, ${id.state}`}</h2>
            <button>Adopt {id.name}</button>
            <p>{id.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
