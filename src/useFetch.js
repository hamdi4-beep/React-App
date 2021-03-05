import {useState, useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(function() {
        fetch(url).then(function(res) {
            if (!res.ok) throw Error("Couldn't fetch the data.");
            return res.json();
        }).then(function(data) {
            setData(data);
            setIsPending(false);
        }).catch(function(err) {
            console.log(err);
            setIsPending(false);
        });
    }, [url]);

    return {data, isPending}
}

export default useFetch;