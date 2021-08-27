import "./App.css";
import axios from "axios";
import Places from "./Places";
import PlaceDetail from "./PlaceDetail";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const api = "https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places";

export default function App(params) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => setData(res.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Places data={data} />
        </Route>
        <Route path="/places">
          <PlaceDetail data={data} />
        </Route>
      </div>
    </Router>
  );
}
