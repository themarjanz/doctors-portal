import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <footer className="my-10 text-center">
                <div>
                    <p>Copyright © {year} - Akhlatur Rahman Marjan</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;