"use client"

import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProtfolioDetails from './ProtfolioDetails';
import { ClockLoader } from 'react-spinners';



const MyTab = () => {


    const [Portfolio, setPortfolio] = useState([])

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };


    useEffect(() => {
        fetch("https://next-and-typescript-server.vercel.app/saaspicprotfolio")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPortfolio(data)
            })
    }, [])



    const item1 = Portfolio.filter((item) => item.typeOfBusiness33 === 'Business');
    const item2 = Portfolio.filter((item) => item.typeOfBusiness33 === "Corporate");
    const item3 = Portfolio.filter((item) => item.typeOfBusiness33 === "Creative");
    const item4 = Portfolio.filter((item) => item.typeOfBusiness33 === "Startup");



    if (!Portfolio) return <div className="w-full h-[660px] flex items-center justify-center"><ClockLoader color="orange" size={70} />  </div>



    return (
        <div >
            <Tabs>
                <TabList className="lg:flex items-center justify-between lg:w-[466px] mx-auto max-sm:grid grid-cols-3 gap-2 max-sm:p-5 my-12">
                    {["All", "Bussiness", "Corporate", "Creative", "Startup"].map((tabName, index) => (
                        <Tab
                            key={index}
                            className="focus:outline-none cursor-pointer "
                            onClick={() => handleTabClick(index)}
                        >

                            <div className={`border border-[#E6E8F1] lg:h-11  flex justify-between  items-center gap-7  p-2 rounded-[4px] ${activeTabIndex === index ? 'text-white bg-violet-600' : 'text-[#6d7568]'}`}>
                                <button className={` p-2 rounded-md ${activeTabIndex === index ? 'text-white bg-violet-600' : 'text-[#6d7568]'}`}>{tabName}</button>
                            </div>
                        </Tab>
                    ))}

                </TabList>

                <TabPanel >
                    <div className='grid lg:grid-cols-2 gap-6 max-sm:p-5 '>
                        {
                            Portfolio.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-6'>

                        {
                            item1.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-6'>

                        {
                            item2.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-6'>

                        {
                            item3.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-6'>

                        {
                            item4.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyTab;