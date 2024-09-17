import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../imgs/logo-gray.png';
import Image from 'next/image';
export default function Footer (){
    return(
        <div className='flex flex-row flex-wrap justify-between py-16 px-32 text-center'>
            <div>
                <Image src={Logo} alt='logo' width={190} height='100%' />
            </div>
            <div>
                <ul className='flex flex-row justify-center md:gap-10 gap-2 flex-wrap pt-2 text-text font-semibold'>
                    <li>Product</li>
                    <li>Pricing Plans</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex flex-row justify-center gap-5 pt-2 text-text text-xl flex-wrap'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
            </div>


        </div>

    );
}