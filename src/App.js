import './App.css';
import {Routes,Route} from "react-router-dom"
import { Login } from './containers/Login/Login';
import { OTPScreen } from './containers/OTP/OTPScreen';
import { Offers } from './containers/Offer/Offer';
import { ProductDetails } from './containers/Details/ProductDetails';
import {ImageScreen} from './containers/ImageScreen/ImageScreen';



function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={ <Login/>}/>
       
        <Route path ="/otpScreen" element={ <OTPScreen/>}/>
        
        <Route path ="/offers" element={ <Offers/>}/>
      
        <Route path ="/details" element={ <ProductDetails/>}/>
       
        <Route path ="/imageScreen" element={ <ImageScreen/>}/>
        

      </Routes>

         


    </div>
  );
}

export default App;
