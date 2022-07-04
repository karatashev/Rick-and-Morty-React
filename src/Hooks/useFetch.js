import { useState, useEffect } from "react";

export default function useFetch(url, params) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (() => {
      try {
        fetch(`${url}${params}`)
        .then((response) =>
          response.json()
          .then((data) => setData(data))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url,params]);

  return data
}
