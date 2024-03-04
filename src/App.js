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

      <div className="card">
  <div className="card-body">
  Push Notification  </div>
</div>




        </div>       
     </>
  );
}

export default App;
