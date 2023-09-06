import React, { useState, useEffect } from 'react'
import apiKey from './constants';
import Nav from './components/Nav';
import Details from './components/Details';

function App() {
  const [long, setLong] = useState('')
  const [lat, setLat] = useState('')
  const [loc, setLoc] = useState(false)
  const [img, setImg] = useState([])
  const [cityName, setCityName] = useState('')
  const [city, setCity] = useState(false)
  const [details, setDetails] = useState([])




  // get location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
  }, [loc])



  // openweather api call


  useEffect(() => {
    function fetchWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || 'haridwar'}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(res => setDetails([res]))
        .catch((err) => {
          console.log(err)
        })
    }
    fetchWeather();

  }, [city, cityName])
console.log(cityName);
  useEffect(() => {
    function fetchWeather() {
      let currentLong = 78.1196
      let currentLat = 29.8856
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat || currentLat}&lon=${long || currentLong}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          setDetails([data])
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchWeather();
    console.log('hello')
  }, [loc, lat, long])



  // get bg img

  useEffect(() => {
    function unsplash() {
      let orientation;
      let weather = 'summer'
      let currentWeather = details[0]?.name;
      if (window.innerWidth > 500) { orientation = 'landscape'; }
      else { orientation = 'portrait' }
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${currentWeather || weather}+sky&orientation=${orientation}&client_id=MLtlOJwSOKZtDVrtlYXf19l3rVRZAlal_jzrawcMSNM`)

        .then(response => response.json())
        .then(json => {
          setImg([json])
        })
    }
    unsplash()
  }, [details])
 

  // app component
  return (
    <main >
      {img.map((item, index) => {
        return (<img
          key={index}
          alt='img'
          src={item.results[0].urls.full}
          className='absolute -z-10 h-full w-full'
        />)
      })}
      <Nav setLoc={setLoc} loc={loc} setCityName={setCityName} setCity={setCity} city={city} />
      <Details details={details}/>
    </main>
  );
}

export default App;
