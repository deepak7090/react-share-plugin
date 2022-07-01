import React, { useState } from 'react'
import assets from '../../assets'
import CustomButton from '../CustomButton/CustomButton'
import './styles.css'

const ShareComponent = () => {
    const currentURL = window.location.href;
    const pageTitle = document.title;
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleFacebookClick = () => {
        let fb_shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + currentURL;
        let window_size = "width=565,height=569";
        window.open(fb_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
    }

    const handleTwitterClick = () => {
        let tw_shareUrl = "https://twitter.com/intent/tweet?text=" + pageTitle + "&url=" + currentURL;
        let window_size = "width=565,height=569";
        window.open(tw_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
    }
    const handleLinkedInClick = () => {
        let lnk_shareUrl = "https://www.linkedin.com/cws/share?url=" + currentURL;
        let window_size = "width=565,height=569";
        window.open(lnk_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
    }
    const handleMailClick = () => {
        let lnk_shareUrl = `mailto: { email_address }?subject = ${pageTitle} & body=${currentURL} { text }`;
        let window_size = "width=565,height=569";
        window.open(lnk_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
    }
    const handleWhatsAppClick = () => {
        let wts_shareUrl = "whatsapp://send?text=" + currentURL;
        let window_size = "width=565,height=569";
        window.open(wts_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
    }
    return (
        <div className='main-wrapper'>
            <CustomButton logo={assets.images.whatsappLogo} handleButtonClick={handleWhatsAppClick} />
            {isOpen && (
                <>
                    <CustomButton logo={assets.images.facebookLogo} handleButtonClick={handleFacebookClick} />
                    <CustomButton logo={assets.images.twitterLogo} handleButtonClick={handleTwitterClick} />
                    <CustomButton logo={assets.images.linkedinLogo} handleButtonClick={handleLinkedInClick} />
                    <CustomButton logo={assets.images.mailLogo} handleButtonClick={handleMailClick} />
                    <CustomButton logo={assets.images.closeIcon} handleButtonClick={handleClick} />
                </>
            )
            }
            {!isOpen && (
                <CustomButton logo={assets.images.shareIcon} handleButtonClick={handleClick} />
            )
            }
        </div>
    )
}

export default ShareComponent
