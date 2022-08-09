import { useState, useEffect } from "react";

const Usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) throw Error("could not fetch for that resource");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
        seterror(null);
      })
      .catch((err) => {
        seterror(err.message);
        setPending(false);
      });

    return () => abortCont.abort();
  }, []);

  return { data, isPending, error };
};

export default Usefetch;
