'use client';
import Nav from './components/Nav';
import './custom_styles/home.css'
function Homee(){
    return(
        <div className="home">
                <Nav />
                <div className='home-container md:w-1/2 sm:w-auto px-16 w-auto py-32'>
                    <h2 className='text-4xl font-bold'>Monitor your business on real-time dashboard</h2>
                    <p className='text-text py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aliquid saepe molestias tenetur aspernatur, repellendus fugiat non dolores sequi laborum ducimus ipsum magni consequuntur. Quasi, amet quidem! In, culpa ipsum?</p>
                    <button style={{border: '1px solid #EF2A82',borderRadius:'64px',backgroundColor:'#EF2A82'}} className="py-2 px-10">Try for free</button>

                </div>


        </div>
    )
}
export default Homee;