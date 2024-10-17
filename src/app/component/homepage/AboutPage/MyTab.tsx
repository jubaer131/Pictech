import React, { useState } from 'react';
import { PiCheck } from 'react-icons/pi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const MyTab: React.FC = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
    };

    return (
        <Tabs selectedIndex={activeTabIndex} onSelect={(index) => handleTabClick(index)}>
            <TabList className="lg:flex items-center">
                {["Our Mission", "Our Vision"].map((tabName, index) => (
                    <Tab
                        key={index}
                        className={`border-b-2 cursor-pointer focus:outline-none ${activeTabIndex === index ? 'border-violet-600 hover:border-violet-600 ' : 'border-gray-300'
                            }`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div
                            className={`flex items-center bg-[#f8f9fc] ${index === 0 ? 'lg:w-[120px]' : 'lg:w-[470px]'
                                }`}
                        >
                            <h1
                                className={`flex justify-center items-center p-2 ${activeTabIndex === index ? 'text-violet-600 font-bold' : 'text-[#6d7568]'
                                    }`}
                            >
                                {tabName}
                            </h1>
                        </div>
                    </Tab>
                ))}
            </TabList>

            <TabPanel>
                <div className="card pt-4">
                    <div className="lg:w-[509px] space-y-9 p-2 leading-7">
                        <p>
                            Partnering with us means unlocking unparalleled technological advancements
                            tailored to fuel your growth. At Paragon, dedicated to being your strategic partner
                            in success.
                        </p>
                        <ul>
                            <li className="flex items-center gap-3">
                                <PiCheck /> Integrate a diverse range of ideas
                            </li>
                            <li className="flex items-center gap-3">
                                <PiCheck /> Deliver the highest quality outcomes
                            </li>
                        </ul>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="card pt-4">
                    <div className="lg:w-[509px] space-y-9 p-2 leading-7">
                        <p>
                            Partnering with us means unlocking unparalleled technological advancements
                            tailored to fuel your growth. At Paragon, dedicated to being your strategic partner
                            in success.
                        </p>
                        <ul>
                            <li className="flex items-center gap-3">
                                <PiCheck /> Integrate a diverse range of ideas
                            </li>
                            <li className="flex items-center gap-3">
                                <PiCheck /> Deliver the highest quality outcomes
                            </li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default MyTab;
