import React from "react";
import Col from "react-bootstrap/Col";

export const Stars = ({ rating, numRatings }) => {
  let starArray = [
    { fill: "black" },
    { fill: "black" },
    { fill: "black" },
    { fill: "black" },
    { fill: "black" },
  ];

  if (Number(rating) && numRatings) {
    const ratingStars = Number(rating);

    starArray.forEach((element, idx) => {
      if (ratingStars >= idx + 1) {
        starArray[idx] = { fill: "#ff3466" };
      }
    });
  }

  return (
    <>
      <Col className="ml-0 pl-0">
        {starArray.map((el, idx) => {
          return (
            <svg
              width="20"
              height="15"
              viewBox="0 0 10 10"
              fill='red'
              xmlns="http://www.w3.org/2000/svg"
              key={idx}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.97812 3.00891C7.92567 2.84027 7.78701 2.71729 7.61901 2.69213L5.3933 2.35299L4.39866 0.23898C4.24933 -0.0796599 3.75067 -0.0796599 3.60134 0.23898L2.6067 2.35299L0.380985 2.69213C0.21299 2.71729 0.0743266 2.84027 0.0218835 3.00891C-0.0305595 3.17754 0.0129948 3.36202 0.133881 3.48594L1.7445 5.13131L1.36496 7.45496C1.33563 7.62918 1.40407 7.8062 1.54095 7.91055C1.67873 8.01583 1.86095 8.02888 2.00939 7.94596L3.99956 6.84935L5.99061 7.94596C6.0555 7.98136 6.12661 7.99906 6.19772 7.99906C6.28927 7.99906 6.38171 7.96925 6.45905 7.91055C6.59504 7.8062 6.66349 7.62918 6.63504 7.45496L6.2555 5.13131L7.86612 3.48594C7.98701 3.36202 8.03056 3.17754 7.97812 3.00891Z"
              />
            </svg>
          );
        })}
        <span className="rating-count"><strong>{rating}</strong> ({numRatings})</span>
      </Col>
    </>
  );
};
