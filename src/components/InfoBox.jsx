import './styles.css'
import React, { useState } from 'react';
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'

export default function InfoBox() {

    const [displayText, setDisplayText] = useState('I am a dedicated student with a passion for becoming a full-stack software developer. With a positive mindset and an optimistic personality, I approach challenges as opportunities for growth. Eager to embrace the world of coding, I\'m excited to contribute my skills to create innovative and impactful solutions.'); 
    const [isAboutClicked, setIsAboutClicked] = useState(true);
    const [isInterestsClicked, setInterestsClicked] = useState(false);

    const handleAbout = () => {
        // Update the state to change the text content
        setDisplayText('I am a dedicated student with a passion for becoming a full-stack software developer. With a positive mindset and an optimistic personality, I approach challenges as opportunities for growth. Eager to embrace the world of coding, I\'m excited to contribute my skills to create innovative and impactful solutions.');
        setIsAboutClicked(true);
        setInterestsClicked(false);
    };

    const handleInterest = () => {
        setDisplayText('A more "presentable" interest of mine would be trading, which means I enjoy staring at the stock market in my leisure moments. If we were being real though, I find joy in listening to K-Pop and crafting with polymer clay or making jewellry.');
        setIsAboutClicked(false);
        setInterestsClicked(true);
    };

    const handleMailButton= () => {
        window.location.href = 'mailto:lleyi0606@gmail.com'
    }

    const handleLinkedinButton = () => {
        window.open('https://www.linkedin.com/in/linleyi/', '_blank');
    }

    return (
        <>
        <div className='infobox-main-container'>
            <div className='infobox-middle-container'>
                <div className='info-button-container'>
                    <button className={`info-button ${isAboutClicked ? 'clicked' : ''}`} onClick={handleAbout}>
                    About
                    </button>
                    <button className={`info-button ${isInterestsClicked ? 'clicked' : ''}`} onClick={handleInterest}>
                    Interests
                    </button>
                </div>
                <div className='infobox-container'>
                    <p className="content_text">{displayText}</p>
                </div>    
            </div>


        </div>

        <div className='button-container'>
            <button className='button' onClick={handleMailButton}>
                <img src={mail} alt="Icon" className='button-icon'></img>
                Email
            </button>
            <button className='button' onClick={handleLinkedinButton}>
                <img src={linkedin} alt="Icon" className='button-icon'></img>
                LinkedIn
            </button>
        </div>
        </>

    )
}