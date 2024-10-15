import React from 'react';
import Image from 'next/image';

const FreeFor30 = () => {
    return (
        <div>
            <div className="lg:w-[1920px] h-auto relative" style={{ aspectRatio: '1920/ 630' }}>
                <Image
                    src='https://i.ibb.co.com/fkxkyyz/CTA.png'
                    layout="fill"
                    objectFit="cover"
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
};

export default FreeFor30;