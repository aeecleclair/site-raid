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
  const paragraphs =
    data.description !== undefined && data.description.split("\n");
  return (
    <div className="view full-page">
      <h1>LE RAID {getCurrentDate()}</h1>
      <div className="devenir-container">
        {paragraphs &&
          paragraphs.map((d, index) => {
            return (
              <div className="">
                <br />
                {index !== paragraphs.length - 1 ? (
                  <h4 key={index} className="raid-section">
                    {d}
                  </h4>
                ) : (
                  <a href="/inscription" key={index} className="register">
                    {d}
                  </a>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
