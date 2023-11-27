import './Hero.css'
import heroimg from '../../Assets/hero.png'
import { Icon } from '@iconify/react';

const Hero = () => {
    return(
        <div className='hero'>
         <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hero-hand-icon'>
                 <p>New</p>
                 <Icon icon="twemoji:waving-hand" className='hand_img'/>
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className='hero-latest-btn'>
             <div>Latest Collections</div>
             <Icon icon="bx:right-arrow" className='arrow_img'/>
            </div>
         </div>
         <div className='hero-right'>
            <img src={heroimg} alt='' className='hero_img'/>
         </div>
        </div>
    )
}

export default Hero;