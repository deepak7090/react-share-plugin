import React from 'react'
import './styles.css'

const CustomButton = ({ logo, handleButtonClick }) => {
    return (
        <div className='sub-wrapper' onClick={handleButtonClick}>
            <img className='image-wrapper' src={logo} alt="button-logo" />
        </div>
    )
}

export default CustomButton
