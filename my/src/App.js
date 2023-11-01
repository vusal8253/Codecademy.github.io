import './App.css';

function App() {
    const cars = [
      {
        id: '1.', name: 'Volvo',
      },
      {
        id: '2.', name: 'Hyundai',
      },
      {
        id: '3.', name: 'BMW',
      },
      {
        id: '4.', name: 'KIA',
      }
    ];
  return (
    <div className="App">
    
      {
        cars.map((car)=>(
          <ul>
            <li>{car.id}</li>
            <li>{car.name}</li>

          </ul>
        ))
        

      
      }
    </div>
  );
}

export default App;
