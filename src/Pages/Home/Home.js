import React from 'react';
import Appointment from './Appointment';
import BAnner from './BAnner';
import Care from './Care';
import Footer from '../Shared/Footer';
import Form from './Form';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        // <div className='px-12'>
        <div>
            <BAnner></BAnner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Form></Form>
            <Footer></Footer>

        </div>
    );
};

export default Home;