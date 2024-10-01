import React from 'react';
import Image from 'next/image';
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
    return (
        <div style={{
            backgroundImage: "url(https://i.ibb.co.com/pnwGwPd/BG-1.png)",
        }} className='w-full mx-auto '>
            <footer className="footer justify-between  lg:h-[400px] text-base-content lg:px-80 lg:pt-32">
                <nav>
                    <a href='#' className=" text-xl "> <Image
                        src="https://i.ibb.co.com/89k9Q9C/Logo-3.png"
                        width={100}
                        height={50}
                        alt="Picture of the author"
                    /></a>
                    <p className='text-white pt-3'>Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit.</p>
                    <div className='flex items-center gap-5 pt-8'>
                        <a className="link link-hover text-white"><CiTwitter /></a>
                        <a className="link link-hover text-white"><FaFacebook /></a>
                        <a className="link link-hover text-white"><CiInstagram /></a>
                        <a className="link link-hover text-white"><IoLogoGithub /></a>
                    </div>

                </nav>
                <nav>
                    <h6 className="footer-title text-white">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title text-white">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <hr className='border-[#2f2f38] mb-2 max-w-7xl mx-auto' />
            <footer className="footer footer-center text-white p-5 ">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;