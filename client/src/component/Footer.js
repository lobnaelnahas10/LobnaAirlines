import React from 'react'
import {FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input,Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Contact Us</h1>
                    <ul>
                        <li><Link to = '/'>Home</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                    <li><Link to = '/questions'>FAQS</Link></li>
                    <li><Link to = '/aboutus'>About Us</Link></li>
                       
                        
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <ul>
                        <p>Any questions? Let us know German University in Cairo
New Cairo City . Main Entrance El-Tagamoa El-Khames or call us on 01229614447</p>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Newsletter</h1>
                    <ul>
                        <li>
                            <Stack spacing={3}>
                            <Input variant="flushed" placeholder="email@example.com" size="10" width="200px"/>
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul>
                </div>

                <div className="creditsIcons">
                    <ul>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img1"/></li>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img2" /></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" /></li>
                        <li><img src="https://i.imgur.com/IDHC2iv.png" className="img4" /></li>
                    </ul>
                    
                </div>
                
                <div className="paragraphFooter"><p>Copyright ©2021 All rights reserved | This template is made with ♡ by Developers of GUC</p>
                <Link to = '' >Ahmed Hamed</Link>
                <Link to = ''  >Abdelrahman Mostafa</Link>
                <Link to = ''  >Omar Amin</Link>
                <Link to = '' >Mai Alaa</Link>
                <Link to = ''  >Ahmed Sameh</Link>
                
                </div>



            </footer>

        </div>
    )
}

export default Footer;