import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

// iconImage: The url of the image shown in share icon
// handleButtonClick: Function for hadling the share icon click

const TwitterShareButton = ({ iconImage, handleButtonClick }) => {
    const currentURL = window.location.href; //To get current url
    const pageTitle = document.title; //
    const window_size = "width=565,height=569";

    //Twitter share function
    const handleTwitterClick = () => {
        let twShareUrl = "https://twitter.com/intent/tweet?text=" + pageTitle + "&url=" + currentURL;
        window.open(twShareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        handleButtonClick();
    }

    return (
        <CustomButton iconImage={iconImage} handleIconClick={handleTwitterClick} />
    )
}

export default TwitterShareButton
