import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Details = () => {
  const { id } = useParams(); // why {} not []
  const [ids, setIds] = useState([]);

  useEffect(() => {
    requestId();
  });
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
            <img src={id.images[0]} alt={id.name} />
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
