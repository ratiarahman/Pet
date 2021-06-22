import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import Details from './Details'; //question ..regarding Switch

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

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
