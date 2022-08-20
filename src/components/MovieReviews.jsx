import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=T9avPPeAM9K8YekEzgG35AQ70pDFBdEx"
      )
      .then((reviews) => {
        setReviews(reviews.data.results);
        console.log(reviews.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {reviews.map((item) => {
        return (
          <div key={item.id}>
            <h1>Byline: {item.byline}</h1>
            <h1>Critics Pick: {item.critics_pick}</h1>
            <h1>Title: {item.display_title}</h1>
            <h1>Headline: {item.headline}</h1>
            <img src={item.multimedia?.src} alt="" />
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default MovieReviews;
