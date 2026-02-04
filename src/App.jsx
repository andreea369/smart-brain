import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import ParticlesBg from 'particles-bg'
import './App.css'

function App() {
   const [input, setInput]=useState("");
   const [imageURL, setImageURL]=useState("");
   const [box, setBox]=useState({});
   const [route, setRoute]=useState("signin"); //signin,home
   const [isSignedIn, setIsSignedIn]=useState(false);
   const [user, setUser]= useState({
     id: '',
     name: '',
     email: '',
     entries: 0,
     joined: ''
   });

   function onInputChange(event){
     setInput(event.target.value);
   }

   function calculateFaceLocation(data){

      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image= document.getElementById('input-image');
      const width= Number(image.width);
      const height= Number(image.height);
      
    const boxData={
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          w:  clarifaiFace.right_col * width - (clarifaiFace.left_col * width),
          h:  clarifaiFace.bottom_row * height-(clarifaiFace.top_row * height)
        };

     return boxData;
      };
      
   

   function displayFaceBox(boxData){
    
      setBox(boxData);
   }

   

      function onImageSumbit(){
    //set the image URL to the input value when the button is clicked
      setImageURL(input);

      fetch('https://smart-brain-backend-osd9.onrender.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: input
        })
      })
        .then(response => response.json())
        .then(result => {
          if (result){
            fetch('https://smart-brain-backend-osd9.onrender.com/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              setUser({...user, entries: count});
            })
            .catch(console.log);
          }
          displayFaceBox(calculateFaceLocation(result));
        })  
        .catch(error => console.log('error', error));
     
   }

   function onRouteChange (route){
    
    if(route === "signin" || route === "register"){
      setIsSignedIn(false);
    }
    else if(route === "home"){
      setIsSignedIn(true);
    }
    else if(route === "signout"){
      setImageURL("");
      setBox({});
      setIsSignedIn(false);
      setUser({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      });
    }
      setRoute(route);
   }

   function loadUser(data){
     setUser({
       id: data.id,
       name: data.name,
       email: data.email,
       entries: data.entries,
       joined: data.joined
     });
   }
  return (
    <>
      <ParticlesBg type="cobweb" color="#ffffff" num={100} bg={true} />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "home" ? 
        <>  
           <Logo /> 
           <Rank name={user.name} entries={user.entries} />
           <ImageLinkForm onChange={onInputChange} onButtonClick={onImageSumbit}   />
           {imageURL.length > 0 && <FaceRecognition imgURL={imageURL} faceBox={box} />} 
         </> 
         : (
          route === "register" ? 
            <Register onRouteChange={onRouteChange} loadUser={loadUser} /> 
            : <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />  
            
        )
      }
      
    </>
  )
}

export default App

