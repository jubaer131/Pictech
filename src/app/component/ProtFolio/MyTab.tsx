"use client"

import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProtfolioDetails from './ProtfolioDetails';



const MyTab = () => {


    const [Portfolio, setPortfolio] = useState([])

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };


    useEffect(() => {
        fetch("http://localhost:8000/protfolio")
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




    return (
        <div >
            <Tabs>
                <TabList className="flex items-center justify-between lg:w-[466px] mx-auto my-12">
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
                    <div className='grid lg:grid-cols-2 gap-5'>
                        {
                            Portfolio.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-5'>

                        {
                            item1.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-5'>

                        {
                            item2.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-5'>

                        {
                            item3.map((item) => (
                                <ProtfolioDetails key={item._id} item={item}></ProtfolioDetails>
                            ))
                        }


                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-2 gap-5'>

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