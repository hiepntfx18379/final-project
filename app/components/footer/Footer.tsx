import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Deasktops</Link>
                        <Link href="#">Smart Watch</Link>
                        <Link href="#">SmartTVs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>

                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Customers Services</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Retuens & Exchanges</Link>
                        <Link href="#">FAQ&</Link>
                    </FooterList>

                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h3 className='text-base font-bold mb-2'>About us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis iusto necessitatibus! Ab tempore, magnam vitae odio dolore quis, sit optio illo ea rerum sint ratione. Sit eveniet repellat autem.</p>
                        <p>&copy; {new Date().getFullYear()} M-Shop. All rights reserved</p>
                    </div>

                    <FooterList>
                        <h3>Follow Us</h3>
                        <div className='flex gap-2'>
                            <Link href="#">
                                <MdFacebook size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillGithub size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href="#">
                                <AiFillLinkedin size={24} />
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    )
}

export default Footer