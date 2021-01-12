import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErr('Please fill the form completely');
      setTimeout(() => {
        setErr('');
      }, 1500);
      return;
    }
    setShow(true);
  };

  const { name, email, message } = form;
  return (
    <div className="contact">
      <div className="breadcrumb">
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>{' '}
        » Contact
      </div>
      <div className="heading">Contact us</div>
      <div className="container">
        {!show ? (
          <form name="contact" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                type="text"
                onChange={handleChange}
                value={message}
              />
            </div>
            {err && <div className="error">{err}</div>}
            <button className="btn btn-submit" type="submit">
              Send
            </button>
          </form>
        ) : (
          <div className="success-message">
            Your message is sent successfully.
          </div>
        )}
      </div>
    </div>
  );
}
