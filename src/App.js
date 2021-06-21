import ReactDOM from 'react-dom';
import Pet from './Pet';

// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', { id: 'my-brand' }, 'Adopt Me'),
//     React.createElement(Pet, {
//       name: 'Gaddu',
//       animal: 'Dog',
//       breed: 'German Shephard',
//     }),
//     React.createElement(Pet, {
//       name: 'Ketty',
//       animal: 'Cat',
//       breed: 'Parsian Cat',
//     }),
//     React.createElement(Pet, {
//       name: 'Pinku',
//       animal: 'Dog',
//       breed: 'Havanese',
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Gaddu" animal="Dog" breed="German Shephard" />
      <Pet name="Ketty" animal="Cat" breed="Parsian Cat" />
      <Pet name="Pinku" animal="Dog" breed="Havanese" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
