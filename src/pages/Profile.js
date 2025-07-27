import React, { useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
const OPENWEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";

function Profile() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported by your browser");
            return;
        }
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lng: longitude });

                try {
                    // Reverse geocoding to get City, State, Country
                    const geoRes = await axios.get(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
                    );
                    const address = geoRes.data.results[0].formatted_address;

                    // Fetch weather
                    const weatherRes = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
                    );

                    setWeather({
                        address: address,
                        temp: weatherRes.data.main.temp,
                        condition: weatherRes.data.weather[0].description,
                    });
                } catch (error) {
                    console.error(error);
                    alert("Failed to fetch location/weather data");
                }
                setLoading(false);
            },
            (error) => {
                alert("Unable to retrieve location");
                setLoading(false);
            }
        );
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <button
                onClick={getLocation}
                className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            >
                Obtain Location
            </button>

            {loading && <p className="mt-4">Fetching location...</p>}

            {location && weather && (
                <div className="mt-6">
                    <h2 className="font-bold text-lg mb-2">Your Location:</h2>
                    <p>{weather.address}</p>
                    <p>
                        Weather: {weather.temp}°C, {weather.condition}
                    </p>

                    <div className="mt-4" style={{ height: "400px", width: "100%" }}>
                        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                            <GoogleMap
                                mapContainerStyle={{ height: "400px", width: "100%" }}
                                center={location}
                                zoom={12}
                            >
                                <Marker position={location} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
