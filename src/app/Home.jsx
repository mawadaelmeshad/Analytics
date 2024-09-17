'use client';
import FifthSec from './components/FifthSec';
import FirstSec from './components/FirstSec';
import Footer from './components/Footer';
import FourthSec from './components/FourthSec';
import LastSec from './components/LastSec';
import Nav from './components/Nav';
import SecondSec from './components/SecondSec';
import ThirdSec from './components/ThirdSec';
import './custom_styles/home.css'
function Homee(){
    return(
        <div className="home">
                <Nav />
                <FirstSec />
                <SecondSec />
                <ThirdSec />
                <FourthSec />
                <FifthSec />
                <LastSec />
                <Footer />



        </div>
    )
}
export default Homee;