import { useEffect, useState } from "react";

const MockData = () => {
    const [earnings, setEarnings] = useState<number | null>(null);

    useEffect(() => {
        // Let earnings be a random number between 0 and 1000
        setEarnings(Math.floor(Math.random() * 1000));
    }, []);

    return <>{earnings !== null && <p>You earned $ {earnings} in total!</p>}</>;
};

export default MockData;
