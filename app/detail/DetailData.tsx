import { useState } from "react";

const DetailData = () => {
    const [earnings, setEarnings] = useState<number | null>(null);


    // Replace 'API_ENDPOINT' with the actual API endpoint for retrieving wallet data
    fetch('API_ENDPOINT', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API response contains the earnings data
            setEarnings(data.earnings);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle the error, you might want to set an error state for user feedback
        });

    return <>{earnings !== null && <p>You earned $ {earnings} in total!</p>}</>;
};

export default DetailData;
