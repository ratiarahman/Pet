import { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const ANIMALS = ['bird', 'dog', 'cat', 'rabbit'];
  const breeds = [];
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');


  const updateLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" onChange={updateLocation} value={location.toUpperCase()} placeholder="Location" />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onblur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onblur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
