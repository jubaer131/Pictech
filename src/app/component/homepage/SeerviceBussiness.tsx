"use client"
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiOutlineSound } from "react-icons/ai";

const SeerviceBussiness = () => {
    return (
        <div className='w-[1260px] mx-auto'>
            <h1>Built for service businesses of all types and sizes</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever since the 1500s</p>

            <Tabs>
                <TabList className="flex items-center justify-between dark:bg-gray-100 dark:text-gray-800">
                    <Tab className="w-[238px] px-5 py-1 border-b-2 dark:border-gray-300 dark:text-gray-600 focus:outline-none focus:border-violet-600 cursor-pointer" selectedClassName="dark:text-violet-600 dark:border-violet-600">
                        <div className='w-[238px] space-y-6'>
                            <div className=" flex items-center justify-center"> <AiOutlineSound size={40} color="#4e892c" /></div>
                            <h1 className='text-center'>Digital Marketing Agency</h1>

                        </div>
                    </Tab>
                    <Tab className="w-[238px] px-5 py-1 border-b-2 dark:border-gray-300 dark:text-gray-600 focus:outline-none focus:border-violet-600 cursor-pointer" selectedClassName="dark:text-violet-600 dark:border-violet-600">
                        <div className='w-[238px] space-y-6'>
                            <div className=" flex items-center justify-center"> <AiOutlineSound size={40} color="#4e892c" /></div>
                            <h1 className='text-center'>Digital Marketing Agency</h1>

                        </div>
                    </Tab>
                    <Tab className="w-[238px] px-5 py-1 border-b-2 dark:border-gray-300 dark:text-gray-600 focus:outline-none focus:border-violet-600 cursor-pointer" selectedClassName="dark:text-violet-600 dark:border-violet-600">
                        <div className='w-[238px] space-y-6'>
                            <div className=" flex items-center justify-center"> <AiOutlineSound size={40} color="#4e892c" /></div>
                            <h1 className='text-center'>Digital Marketing Agency</h1>

                        </div>
                    </Tab>
                    <Tab className="w-[238px] px-5 py-1 border-b-2 dark:border-gray-300 dark:text-gray-600 focus:outline-none focus:border-violet-600 cursor-pointer" selectedClassName="dark:text-violet-600 dark:border-violet-600">
                        <div className='w-[238px] space-y-6'>
                            <div className=" flex items-center justify-center"> <AiOutlineSound size={40} color="#4e892c" /></div>
                            <h1 className='text-center'>Digital Marketing Agency</h1>

                        </div>
                    </Tab>
                    <Tab className="w-[238px] px-5 py-1 border-b-2 dark:border-gray-300 dark:text-gray-600 focus:outline-none focus:border-violet-600 cursor-pointer" selectedClassName="dark:text-violet-600 dark:border-violet-600">
                        <div className='w-[238px] space-y-6'>
                            <div className=" flex items-center justify-center"> <AiOutlineSound size={40} color="#4e892c" /></div>
                            <h1 className='text-center'>Digital Marketing Agency</h1>

                        </div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>

        </div>


    );
};

export default SeerviceBussiness;