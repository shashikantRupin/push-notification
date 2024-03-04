import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(./images/4.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "100vh",
          position: "relative",  
        }}
      >
      <Navbar/>
 
        
      {/* <div class="card" style="width: 18rem;"> 
      <h1 sx={{color:'white'}} > Push Notification </h1> 
      </div>
        */}

      <div className="card">
  <div className="card-body">
  Push Notification  </div>
</div>




        </div>       
     </>
  );
}

export default App;
