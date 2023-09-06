import React from 'react';

export default function Details({ details }) {
console.log(details)
  return (
    <main className='main-detail mt-10'>
      <section>
        <p className='p-3'>
          {details.map((item, index) => {
            if (item.main && item.main.temp !== undefined) {
              return <section key={index} >
              <section className='flex justify-evenly around items-center'>
              <p>
              <p className='text-center text-[40px]' >{Math.floor((item.main.temp)+274.15)} K</p>
              </p>
              <p className='text-center text-[90px]' >{item.main.temp}°c</p>
              <p>
              <p className='text-center text-[40px]' >{Math.floor((item.main.temp*1.8)+32)}° F</p>
              </p>
              </section>
              <p className='text-[25px] text-center'>{item.name} {item.sys.country}</p>
              <section className='flex justify-evenly my-16'>
              <p className='text-[22px]'>{item.clouds.all}% clouds</p>
              <p className='text-center text-[22px] font-thin' >{item.main.temp_min}°c/{item.main.feels_like}°c</p>
              <p className='text-[22px]'>{item.weather[0].description} </p>
              </section>
              <section className='flex justify-evenly mt-10 latnlong'>
              <span className='text-[17px]'>Latitude: {item.coord.lat}</span>
              <span className='text-[17px]'>Longitude: {item.coord.lon}</span>
              </section>
              <section className='extra'>
              <section className='flex justify-around items-center mt-10 text-[25px]'>
              <span>Wind Speed: {item.wind.speed}m/sec</span>
                <span className='flex items-center space-x-5'>{} <span> Wind Direction {item.wind.deg}°</span> </span>
              </section>
              <section className='flex items-center text-justify justify-evenly text-[26px] my-10'>
                <p>Pressure {item.main.pressure}hPa</p>
                <p>Visibility {(item.visibility)/1000} KM</p>
                <p>Humidity {item.main.humidity}%</p>
              </section>
              </section>
              </section>;
            } else {
              return <section className='flex justify-center items-center h-[70vh]'><div class="loader "></div></section>
            }
          })}
        </p>
      </section>
    </main>
  );
}
