import './App.css';
import ConstructorList from './ConstructorList';


function App() {
  const formulaOne = [
  {
    name: 'Mercedes',
    engine: 'Mercedes',
    championships: 8,
    drivers: ['George Russell', 'Lewis Hamilton'] 
  },
  {
    name: 'McLaren',
    engine: 'Mercedes',
    championships: 8,
    drivers: ['Lando Norris', 'Oscar Paistri'] 
  },
  {
    name: 'Mercedes',
    engine: 'Mercedes',
    championships: 8,
    drivers: ['George Russell', 'Lewis Hamilton'] 
  },
  {
    name: 'Redbull',
    engine: 'Honda',
    championships: 5,
    drivers: ['Max Verstappen', 'Sergio Perez'] 
  },
  {
    name: 'Ferrari',
    engine: 'Ferrari',
    championships: 16,
    drivers: ['Charles Leclerc', 'Carlos Sainz'] 
  }
]
  return (
    < div>
    <ConstructorList />
    </div>
  );
}

export default App;
