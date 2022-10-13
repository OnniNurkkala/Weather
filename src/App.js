import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLat(position.coords.latitude)
        setLat(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    } else {
      alert("Selaimesi ei tue paikannusta!")
    }

  }, [])

  if (isLoading) {
    return <p>Ladataan sijaintiasi...</p>
  } else {

    return (
      <div className="App">
        <p>
          Sijaintisi: 
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng} />
      </div>
    );
  }
}


export default App;