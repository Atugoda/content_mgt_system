import {useState} from "react";
const App = () =>{

//usestate used to save the components

const[imageUrl,setimageUrl] = useState('')
const[name,setName] = useState('')
const[city,setCity] = useState('')
const[position,setPosition] = useState('')

  return (
  <div className="main_container">
    <div className="main_left">
      <input type='text' value={imageUrl}/>
      <input type='text'value={name}/>
      <input type='text'value={city}/>
      <input type='text'valu={position}/>
      <button>submit</button>
      </div>

      <div className="main_right"></div>

  </div>
  )
}
export default App;