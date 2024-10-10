import React, { useState } from 'react';
import { AiOutlineSound } from 'react-icons/ai';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTab = () => {


    const [activeTabIndex, setActiveTabIndex] = useState(0); // Track active tab index

    const handleTabClick = (index) => {
        setActiveTabIndex(index); // Set the active tab index on click
    };


    return (
        <div >
            <Tabs>
                <TabList className="lg:flex items-center justify-between ">
                    {["All", "Bussiness", "Corporate", "Creative", "Startup"].map((tabName, index) => (
                        <Tab
                            key={index}
                            className="focus:outline-none cursor-pointer"
                            onClick={() => handleTabClick(index)}
                        >

                            <div className={`border border-[#E6E8F1] lg:h-11 flex justify-between  items-center gap-7 p-2 rounded-[4px] ${activeTabIndex === index ? 'text-white bg-violet-600' : 'text-[#6d7568]'}`}>
                                <button className={` p-2 rounded-md ${activeTabIndex === index ? 'text-white bg-violet-600' : 'text-[#6d7568]'}`}>{tabName}</button>
                            </div>
                        </Tab>
                    ))}

                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyTab;