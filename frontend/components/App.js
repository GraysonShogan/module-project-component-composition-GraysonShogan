import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
import Card from "./Card";

function App() {
  const [apod, setApod] = useState();

  useEffect(() => {
    function fetchPhoto() {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data);
          setApod(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchPhoto();
    // setApod();
  }, []);

  if (!apod) return "Fetching Photo of the Day...";
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  );
}

export default App;
