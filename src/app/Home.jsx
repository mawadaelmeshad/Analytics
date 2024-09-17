'use client';
import FirstSec from './components/FirstSec';
import Nav from './components/Nav';
import SecondSec from './components/SecondSec';
import './custom_styles/home.css'
function Homee(){
    return(
        <div className="home">
                <Nav />
                <FirstSec />
                <SecondSec />



        </div>
    )
}
export default Homee;