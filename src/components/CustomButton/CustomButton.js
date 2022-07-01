import React from 'react'
import './styles.css'

const CustomButton = ({ iconImage, handleIconClick }) => {
    return (
        <div className='sub-wrapper' onClick={handleIconClick}>
            <img className='image-wrapper' src={iconImage} alt="button-logo" />
        </div>
    )
}

export default CustomButton
