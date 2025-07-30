import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                setLocation({ lat, lon });

                // Weather API (Replace with your API key)
                const weatherRes = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_OPENWEATHER_API_KEY&units=metric`
                );
                setWeather(weatherRes.data);
            });
        } else {
            alert('Geolocation not supported!');
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <button
                onClick={getLocation}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Locate Me
            </button>

            {location && (
                <div className="mt-4">
                    <iframe
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${location.lat},${location.lon}&zoom=12`}
                    ></iframe>
                </div>
            )}

            {weather && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl shadow text-center">
                    <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
                    <p className="capitalize text-gray-700">{weather.weather[0].description}</p>
                    <p className="text-gray-600">{weather.name}, {weather.sys.country}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
