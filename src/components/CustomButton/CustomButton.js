import React from 'react'
import assets from '../../assets'
import './styles.css'

const CustomButton = ({ iconImage, handleIconClick }) => {
    return (
        <div className='sub-wrapper' onClick={handleIconClick}>
            <img className='image-wrapper' src={iconImage ? iconImage : assets.images.noImageIcon} alt="button-logo" />
        </div>
    )
}

export default CustomButton
