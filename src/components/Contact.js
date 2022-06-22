// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    return (
        <div className='contact-container'>
            <div className='contact-item'>
                <img src={props.data.photo} className='contact-item__photo' />
                <div className='contact-item__body'>
                    <p className='contact-item__body-name'>{props.data.name}</p>
                    <p>{props.data.phone}</p>
                    <p>{props.data.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;