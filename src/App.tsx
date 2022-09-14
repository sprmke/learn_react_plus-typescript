import './App.css';
import { UserContextProvider } from './components/context/UserContext';
import { Counter } from './components/class/Counter';

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <Counter message={'The count value is'} />
      </UserContextProvider>
    </div>
  );
}

export default App;
