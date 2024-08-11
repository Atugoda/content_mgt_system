import { Fragment, useState } from "react";
import "./App.css"
import Unit from "./Components/Unit";


const App = () => {
  //usestate used to save the components
  
  // const [imageUrl, setimageUrl] = useState("");
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [position, setPosition] = useState("");

  //used only one state onbehlf of the all other 4 usestates.

  const [inputdata,setinputdata] = useState({
    imageUrl: '',
    name:'',
    city:'',
    position:'',

  })
  
  const [mydata,setMydata] = useState([]);//to make the objects and sae them in an array.

  return (
    <Fragment>
<div>

</div>
    <div className="main_container">
      <div className="main_left">
        <input
          type="text"
          value={inputdata.imageUrl}
          placeholder='imageurl'
          onChange={(e) => {
            e.preventDefault();
            //() have to b placed as it needs the return 
            //... spreading option
            setinputdata(preinputdata=>({
              ...preinputdata,
              imageUrl:e.target.value

            }));
          }}
        />
        <input
          type="text"
          value={inputdata.name}
          placeholder="name"
          onChange={(e) => {
            e.preventDefault();
            setinputdata(preinputdata=>({
              ...preinputdata,
              name:e.target.value
            }))
          }}
        />
        <input
          type="text"
          value={inputdata.city}
          placeholder="city"
          onChange={(e) => {
            e.preventDefault();
            setinputdata(preinputdata=>({
              ...preinputdata,
              city:e.target.value
            }));
          }}
        />
        <input
          type="text"
          value={inputdata.position}
          placeholder="position"
          onChange={(e) => {
            e.preventDefault();
            setinputdata(preinputdata=>({
              ...preinputdata,
              position:e.target.value
            }));
          }}
        />
        <button
          onClick={() => {
            //replaced by te new value. therefore this will update continuously for the new values.
            setMydata(previousmydata=>{
              return [...previousmydata,
              {
                image:inputdata.imageUrl, //property value and the state value is given in two different names, therefore the both names have to be given.
                name:inputdata.name,
                city:inputdata.city,
                position:inputdata.position,
              },
            ];
            });
            setinputdata((previousimagurl) => {
              if (previousimagurl.imageUrl.length > 0) {
                return {
                  ...previousimagurl,
                  imageUrl:''
                };
              } else {
                return previousimagurl;
              }
            });

            setinputdata((previousname) => {
              if(previousname.name.length>0){
                return{
                  ...previousname,
                  name:''
                };
              }else{
                return previousname;
              }

            });
            // city object value in the previous city, that's why this can be written as previouscity,city.
            setinputdata((previouscity) =>
              previouscity.city.length > 0 ? ({
                ...previouscity, 
                city:''
              }) : previouscity
            );

            setinputdata((previouspostion) =>
              previouspostion.position.length > 0 ? ({
                ...previouspostion,position:' '})
                 : previouspostion
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
    </Fragment>
//?is used beacause to check that there is values or not, if there is values then map them otherwise do not map the values.
// unique key property is used to map the refreshed parts.in index 

);
};
export default App;
