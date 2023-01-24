import './App.css';
import ConstructorList from './ConstructorList';


function App() {
  const teams = [
  {
    name: 'Mercedes',
    engine: 'Mercedes',
    championships: 8,
    isKendrasFavorite: false,
    drivers: ['George Russell', 'Lewis Hamilton'] 
  },
  {
    name: 'McLaren',
    engine: 'Mercedes',
    championships: 8,
    isKendrasFavorite: true,
    drivers: ['Lando Norris', 'Oscar Paistri'] 
  },
  {
    name: 'Haas',
    engine: 'Ferrari',
    championships: 0,
    isKendrasFavorite: false,
    drivers: ['Kevin Magnussen', 'Nico Huklenberg'] 
  },
  {
    name: 'Redbull',
    engine: 'Honda',
    championships: 5,
    isKendrasFavorite: false,
    drivers: ['Max Verstappen', 'Sergio Perez'] 
  },
  {
    name: 'Ferrari',
    engine: 'Ferrari',
    championships: 16,
    isKendrasFavorite: false,
    drivers: ['Charles Leclerc', 'Carlos Sainz'] 
  }
]
  return (
    < div>
    <ConstructorList teams={teams} />
    </div>
  );
}

export default App;
