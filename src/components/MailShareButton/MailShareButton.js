import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

// iconImage: The url of the image shown in share icon
// handleButtonClick: Function for hadling the share icon click

const MailShareButton = ({ iconImage, handleButtonClick }) => {
    const currentURL = window.location.href; //To get current url
    const pageTitle = document.title; //
    const window_size = "width=565,height=569";

    //Mail share function
    const handleMailClick = () => {
        let mailShareUrl = `mailto: { email_address }?subject = ${pageTitle} & body=${currentURL} { text }`;
        window.open(mailShareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        handleButtonClick()
    }
    return (
        <CustomButton iconImage={iconImage} handleIconClick={handleMailClick} />
    )
}

export default MailShareButton
