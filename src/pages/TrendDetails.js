import React from "react";
import { useParams } from "react-router-dom";

function TrendDetails() {
    const { trendName } = useParams();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-sky-500 mb-4">#{trendName}</h1>
            <p className="text-gray-700">
                This is the trending page for <strong>#{trendName}</strong>.
            </p>
            <p className="text-gray-500 mt-2">
                Here you can display all tweets related to <strong>#{trendName}</strong>.
            </p>
        </div>
    );
}

export default TrendDetails;
