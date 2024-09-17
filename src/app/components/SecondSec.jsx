import Card from "./Card";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";



export default function SecondSec(){
    return(
        <div className="features bg-[#eeeef4] text-text pb-4 px-4">
            <div className="features-container text-center">
                <h2 className="title">Main Features</h2>
                <p className="pb-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat eveniet incidunt rem</p>
                <div className="cards flex flex-row justify-around md:flex-nowrap md:gap-0 flex-wrap gap-20">
                    <Card 
                        icon={<FaRegClock />} 
                        name="Monitoring 24/7" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat eveniet incidunt rem" 
                    />
                    <Card 
                        icon={<HiOutlineDesktopComputer/>} 
                        name="Widget System" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat eveniet incidunt rem" 
                    />
                    <Card 
                        icon={<IoRocketOutline />} 
                        name="Best Performance" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat eveniet incidunt rem" 
                    />

                </div>
                
            </div>

        </div>
    )
}