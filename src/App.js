import { useState } from "react";
import "./App.css"
import Unit from "./Components/Unit";

const App = () => {
  //usestate used to save the components

  const [imageUrl, setimageUrl] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");

  const [mydata,setMydata] = useState([]);//to make the objects and sae them in an array.
 console.log(mydata);
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
                image:imageUrl, //property value and the state value is given in two different names, therefore the both names have to be given.
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

      <div className="main_right"> 
        {mydata?.map(({image,name,city,position},index)=>(<Unit
         image={image}
         name={name}
         city={city}
         position={position}
         key = {index}
         />))}
      </div>
    </div>
//?is used beacause to check that there is values or not, if there is values then map them otherwise do not map the values.
  );
};
export default App;
