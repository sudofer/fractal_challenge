import React from "react";
import PlaceItem from "./PlaceItem";
import "./Places.css";
export default function Places({ data }) {
  return (
    <>
      <h1>Places page</h1>
      <table>
        <tr>
          <th>Business ID</th>
          <th>Business Name</th>
          <th>Website</th>
          <th>Address</th>
        </tr>

        {data.map((place) => {
          return (
            <PlaceItem
              key={place.id}
              id={place.id}
              name={place.name}
              website_url={place.website_url}
              address={place.address}
            />
          );
        })}
      </table>
    </>
  );
}
