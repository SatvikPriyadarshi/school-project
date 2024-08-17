import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from './Footer';
import Navbar from './Navbar';

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Success!',
        text: 'form submitted successfully',
        icon: 'success',
    });
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          padding: 64,
          gap: 24,
        }}
      >
        <img src="./photo/contactus.svg" width="50%" alt="Contact Us" />

        <div style={{ width: '50%' }}>
          <form
            onSubmit={submitForm}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 18, fontWeight: 500 }}>Fullname</label>
              <input
                required
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter name here"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 18, fontWeight: 500 }}>Email</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email here"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontSize: 18, fontWeight: 500 }}>Message</label>
              <textarea
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message & query here"
                rows={6}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                border: 'none',
                width: 'fit-content',
                padding: '14px 32px',
                borderRadius: 5,
                background: '#6C63FF',
                color: 'white',
                fontWeight: 600,
              }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
