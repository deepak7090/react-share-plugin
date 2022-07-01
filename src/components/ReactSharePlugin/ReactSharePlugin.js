import React, { useState } from 'react'
import assets from '../../assets'
import CustomButton from '../CustomButton/CustomButton'
import './styles.css'

const ReactSharePlugin = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    //To handle the collapse click
    const handleCollapseClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {children &&
                <div className='main-wrapper'>
                    {isOpen ? (
                        <>
                            {children}
                            <CustomButton iconImage={assets.images.closeIcon} handleIconClick={handleCollapseClick} />
                        </>
                    )
                        : (
                            <>
                                {children[0]}
                                <CustomButton iconImage={assets.images.shareIcon} handleIconClick={handleCollapseClick} />
                            </>
                        )
                    }
                </div>
            }
        </>
    )
}

export default ReactSharePlugin
