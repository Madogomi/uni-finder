import { useState } from "react";

function useFetch() {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ data, setData ] = useState(null);

    async function fetcher () {
        try {
            setError(null);
            setData(null);
            setLoading(true);

                const res = await fetch("https://script.google.com/macros/s/AKfycbwD7WILN8JXVirDJd5NAZmjR7ZkxxyJPWYFARXCp6AD6_qXUG5VJArgET-a__TOdfs0fg/exec");
                if(!res.ok) {
                    throw new Error("Something went wrong");
                    
                }
                const respond = await res.json();

                setData(respond);

        } catch (error) {
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, data, fetcher };
}

export default useFetch;