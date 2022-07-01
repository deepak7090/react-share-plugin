import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

// iconImage: The url of the image shown in share icon
// handleButtonClick: Function for hadling the share icon click

const LinkedInShareButton = ({ iconImage, handleButtonClick }) => {
    const currentURL = window.location.href; //To get current url
    const window_size = "width=565,height=569";

    //LinkedIn share function
    const handleLinkedInClick = () => {
        let lnkShareUrl = "https://www.linkedin.com/cws/share?url=" + currentURL;
        window.open(lnkShareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        handleButtonClick();
    }

    return (
        <CustomButton iconImage={iconImage} handleIconClick={handleLinkedInClick} />
    )
}

export default LinkedInShareButton
