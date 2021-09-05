import React from 'react';
import Header from '../components/header/Header';
import ContactBody from '../components/contact/ContactBody';
import Footer from '../components/footer/Footer';
import '../styling/pages/ContactPage.css';

function ContactPage () {
    return (
        <div className='contact__page'>
            <Header className='contact__header'/>
            <ContactBody />
            <Footer className='contact__footer' />
        </div>
    );
}

export default ContactPage;
