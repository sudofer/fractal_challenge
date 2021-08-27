import React from "react";
import "./PlaceItem.css";
export default function PlaceItem({ id, name, website_url, address }) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>
          <a href={`/places/${id}`}>{name}</a>
        </td>
        <td>{website_url}</td>
        <td>{address}</td>
      </tr>
    </>
  );
}
