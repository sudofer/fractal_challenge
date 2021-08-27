import React from "react";
import "./PlaceDetail.css";
export default function PlaceDetail({ data }) {
  let url = window.location.href;

  let split = url.split("/");

  let index = parseInt(split[split.length - 1]);

  const place = data[index - 1];

  return (
    <>
      <div className="back_home">
        <a href="/">Go back to Places</a>
      </div>
      <div className="detail_box">
        <div className="place_img">
          {place ? (
            <img
              src={place.logo_url}
              alt={place.name}
              width="450"
              height="350"
            />
          ) : (
            <div>Place Image Missing</div>
          )}
        </div>
        <div className="business_info">
          {place ? (
            <ul>
              <li>
                <b>Business Name</b>: {place.name}
              </li>
              <li>
                <b>Address</b>: {place.address}
              </li>
              <li>
                <b>Website</b>: {place.website_url}
              </li>
              <li>
                <b>Hours:</b>
                {Object.keys(place.hours).map((day) => (
                  <div>{`${day}: ${place.hours[day]}`}</div>
                ))}
              </li>
            </ul>
          ) : (
            <div>Place Info Missing</div>
          )}
        </div>
      </div>
    </>
  );
}
