import { useState } from "react";

export function getCurrentDate(separator = "/") {
  return new Date().getFullYear();
}

export default function RaidSection() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/Raid/section/section.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched section"));
  }
  return (
    <div className="view full-page">
      <h1>LE RAID {getCurrentDate()}</h1>
    </div>
  );
}
