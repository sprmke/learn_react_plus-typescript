import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Michael',
    last: 'Manlulu',
  };

  const nameList = [
    { first: 'Michael', last: 'Manlulu' },
    { first: 'Mikki', last: 'Manlulu' },
    { first: 'Mateo', last: 'Manlulu' },
  ];

  return (
    <div className='App'>
      <Greet name='Mike' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
