import { useState } from "react";
import "./App.css"

const App = () => {
  //usestate used to save the components

  const [imageUrl, setimageUrl] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");

  const [mydata,setMydata] = useState("");

  return (
    <div className="main_container">
      <div className="main_left">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => {
            e.preventDefault();
            setimageUrl(e.target.value);
          }}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }}
        />
        <input
          type="text"
          value={position}
          onChange={(e) => {
            e.preventDefault();
            setPosition(e.target.value);
          }}
        />
        <button
          onClick={() => {
            //replaced by te new value. therefore this will update continuously for the new values.
            setMydata(previousmydata=>{
              return [...previousmydata,
              {
                image:imageUrl,
                name,
                city,
                position,
              },
            ];
            });
            setimageUrl((previousimagurl) => {
              if (previousimagurl.length > 0) {
                return " ";
              } else {
                return previousimagurl;
              }
            });
            setName((previousname) =>
              previousname.length > 0 ? " " : previousname
            );
            setCity((previouscity) =>
              previouscity.length > 0 ? " " : previouscity
            );
            setPosition((previouspostion) =>
              previouspostion.length > 0 ? " " : previouspostion
            );
          }}
        >
          submit
        </button>
      </div>

      <div className="main_right"></div>
    </div>
  );
};
export default App;
