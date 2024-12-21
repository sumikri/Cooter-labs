import Image from 'next/image'
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import { FaAngleRight } from "react-icons/fa6";


const FooterLinks = [
    { title: 'pricing', link: '/pricing' },
    { title: 'download', link: '/download' },
    { title: 'partner us', link: '/partner-us' },
    { title: 'FAQs', link: '/faqs' },
    { title: 'career', link: '/career' },
]

const Footer = () => {
    return (
        <footer className='bg-d1 lg:py-[100px] '>
            <div className="content">
                <div className="space-y-20">
                    <div className="flex justify-between">
                        <div className="max-w-[480px] space-y-6">
                            <Image
                                src="/footerlogo.svg"
                                alt="Cooter Labs Logo"
                                width={180}
                                height={120}
                            />
                            <p className="text-t4 text-mobile/body-light md:text-tablet/body-light lg:text-desktop/body-light">
                                We are a strategic digital solutions company specialising in product development for startups and SMEs. Our mission is to deliver tailored, ROI-focused solutions that align with your business goals.
                            </p>
                        </div>
                        <div className="">
                            form
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex gap-3 items-center">
                                <span className='text-d3'>
                                    <FaRegEnvelope />
                                </span>
                                <a href="mailto:info@cooterlabs.com" className='text-mobile/body/medium md:text-tablet/body/medium lg:text-desktop/body/medium text-secondary'>info@cooterlabs.com</a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="text-d3">
                                    <IoCallOutline />
                                </span>
                                <a href="tel:+91 6362 996 760" className='text-mobile/body/medium md:text-tablet/body/medium lg:text-desktop/body/medium text-secondary'>+91 6362 996 760</a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="text-d3">
                                    <IoLocationOutline />
                                </span>
                                <span className='text-mobile/body/medium md:text-tablet/body/medium lg:text-desktop/body/medium text-secondary'> Bengaluru & Gurugram,India</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {
                                FooterLinks.map(({ title, link }) => (
                                    <>
                                        <button className="text-mobile/button md:text-tablet/button lg:text-desktop/button text-t3 flex  items-center gap-0.5">
                                            <span className="capitalize">
                                                {title}
                                            </span>
                                            <span className="">
                                                <FaAngleRight />
                                            </span>
                                        </button>
                                        {
                                            title !== 'career' &&
                                            <span className="bg-d3 w-0.5 h-3/4 mx-6 inline-block"></span>
                                        }
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="h-[0.6px] bg-d3 w-full my-6"></div>
            </div>
        </footer>
    )
}

export default Footer