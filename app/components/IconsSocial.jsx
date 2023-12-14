import React from 'react'
import Image from 'next/image'

const IconsSocial = ({ iconNames }) => {
    return (
        <div className="flex">
            {iconNames.map((icon, index) => (
                <Image
                    key={index}
                    src={`/icons/software/${icon}.svg`}
                    alt={`icon-${icon}`}
                    className='mr-4 mt-4 cursor-pointer transform transition-transform hover:scale-110'
                    height={25}
                    width={25}
                />
            ))}
        </div>
    )
}

export default IconsSocial