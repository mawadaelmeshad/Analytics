import Link from "next/link";
import Logo from '../imgs/logo.png'
import Image from "next/image";

function Nav(){
    return(
        <div className="nav flex flex-row py-8 px-16">
            <Image src={Logo} alt="logo" style={{width:'200px', height:'100%'}} />
            <ul className="flex flex-row px-16 justify-center gap-10 pt-2 text-text cursor-pointer">
                <li>Products</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
                <div className="flex flex-row justify-between gap-20">
                    <p>Sign in</p>
                    <button style={{border: '1px solid #8794BA',borderRadius:'64px'}} className="py-2 px-10">Sign up</button>
                </div>


            </ul>
        </div>
    )

}
export default Nav;