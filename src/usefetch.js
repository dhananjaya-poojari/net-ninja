import { useState, useEffect } from "react";

const Usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch(url)
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
  }, []);

  return { data, isPending, error };
};

export default Usefetch;
