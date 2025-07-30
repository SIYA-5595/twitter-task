import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const Profile = () => {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    const API_KEY = "AIzaSyBhyebhS34ZA5QvWj2HiMlu2eU2K4mMgq0"; // Replace with your Google Maps API Key
    const WEATHER_KEY = "9c4524d48d607940fcf919121017942a"; // Replace with your OpenWeather API key

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    setLocation({ lat, lng });

                    // Weather Data Fetch
                    try {
                        const weatherResponse = await fetch(
                            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`
                        );
                        const weatherData = await weatherResponse.json();
                        console.log("Weather Data:", weatherData);
                        setWeather({
                            temp: weatherData.main.temp,
                            desc: weatherData.weather[0].description,
                            city: weatherData.name,
                            country: weatherData.sys.country,
                        });
                    } catch (err) {
                        console.error("Weather API error:", err);
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
            <button
                onClick={getUserLocation}
                className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
            >
                Obtain Location
            </button>

            {location && (
                <div className="mt-6">
                    <h3 className="font-bold text-lg">Your Location:</h3>
                    <p>
                        Latitude: {location.lat}, Longitude: {location.lng}
                    </p>

                    {/* Weather Info */}
                    {weather ? (
                        <div className="mt-4 bg-blue-50 p-4 rounded-md shadow">
                            <h4 className="text-lg font-bold">Weather Info</h4>
                            <p className="text-gray-700">
                                <strong>City:</strong> {weather.city}, {weather.country}
                            </p>
                            <p className="text-gray-700">
                                <strong>Temperature:</strong> {weather.temp}°C
                            </p>
                            <p className="text-gray-700">
                                <strong>Condition:</strong> {weather.desc}
                            </p>
                        </div>
                    ) : (
                        <p className="mt-2 text-gray-500">Fetching weather data...</p>
                    )}

                    {/* Google Map */}
                    <div className="mt-4">
                        <LoadScript googleMapsApiKey={API_KEY}>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
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
};

export default Profile;
