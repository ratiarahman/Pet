import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Modal from './Modal';

const Details = () => {
  const { id } = useParams(); // why {} not []
  const [ids, setIds] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleAdopt() {
    window.open('http://bit.ly/pet-adopt');
    handleToggleModal();
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
            <button onClick={handleToggleModal}>Adopt {id.name}</button>
            <p>{id.description}</p>
            {showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {id.name}?</h1>
                  <div className="buttons">
                    <button onClick={handleAdopt}>Yes</button>
                    <button onClick={handleToggleModal}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Details;
