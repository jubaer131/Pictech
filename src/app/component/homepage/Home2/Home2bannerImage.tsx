import React from 'react';
import Image from 'next/image';

const Home2bannerImage = () => {
    return (
        <>
            <div className='lg:max-w-[1290px] w-full ml-[400px] pt-20'>
                <h2 className='text-center text-white text-[20px] font-normal'>Companies of all sizes trust Resend to deliver <br /> their most important emails.</h2>
                <div className='lg:flex  items-center justify-between max-sm:grid grid-cols-2 gap-4 max-sm:p-12 pt-6 lg:pb-10 '>

                    <Image

                        src="https://i.ibb.co.com/PCP29C6/Company-logo.png"
                        width={127}
                        height={48}
                        alt="Picture of the author"

                    />
                    <Image

                        src="https://i.ibb.co.com/Tr7dbFx/Company-logo-1.png"
                        width={127}
                        height={48}
                        alt="Picture of the author"

                    />


                    <Image

                        src="https://i.ibb.co.com/tp2Nrb2/Company-logo-2.png"
                        width={127}
                        height={48}
                        alt="Picture of the author"

                    />
                    <Image

                        src="https://i.ibb.co.com/CWxGbD5/Company-logo-3.png"
                        width={127}
                        height={48}
                        alt="Picture of the author"

                    />


                    <Image

                        src="https://i.ibb.co.com/18G5rHw/Company-logo-4.png"
                        width={127}
                        height={48}
                        alt="Picture of the author"

                    />
                    <Image

                        src="https://i.ibb.co.com/xzfnzKj/Company-logo-5.png"
                        width={127}
                        height={48}
                        alt="Picture of the author"

                    />

                </div>
                <hr className='border border-[#2f2f36]' />
            </div>
        </>
    );
};

export default Home2bannerImage;