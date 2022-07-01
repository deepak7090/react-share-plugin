import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

// iconImage: The url of the image shown in share icon
// handleButtonClick: Function for hadling the share icon click

const FacebookShareButton = ({ iconImage, handleButtonClick }) => {
    const currentURL = window.location.href; //To get current url
    const window_size = "width=565,height=569";

    //Facebook share function
    const handleFacebookClick = () => {
        let fbShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + currentURL;
        window.open(fbShareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        handleButtonClick();
    }
    return (
        <CustomButton iconImage={iconImage} handleIconClick={handleFacebookClick} />
    )
}

export default FacebookShareButton
