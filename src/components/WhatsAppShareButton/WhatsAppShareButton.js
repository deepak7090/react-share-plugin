import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

// iconImage: The url of the image shown in share icon
// handleButtonClick: Function for hadling the share icon click

const WhatsAppShareButton = ({ iconImage, handleButtonClick }) => {
    const currentURL = window.location.href; //To get current url
    const window_size = "width=565,height=569";

    //Whatsapp share function
    const handleWhatsAppClick = () => {
        let waShareUrl = "whatsapp://send?text=" + currentURL;
        window.open(waShareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        handleButtonClick();
    }

    return (
        <CustomButton iconImage={iconImage} handleIconClick={handleWhatsAppClick} />
    )
}

export default WhatsAppShareButton
