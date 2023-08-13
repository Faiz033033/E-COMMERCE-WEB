import React from 'react';
import './Contact.css';

const Contact = (props) => {
  async function formSubmitHandler(event) {
    event.preventDefault();

    const user = {
      Name: event.target[0].value,
      Email: event.target[1].value,
      Phone: event.target[2].value,
    };

    const response = await fetch('https://react-http-11-08-2023-default-rtdb.firebaseio.com/EcommerceContact.json', {
      method: 'POST',
      body: JSON.stringify(user)
    });

    event.target.reset();
  }

  return (
    <>
      <form onSubmit={formSubmitHandler} className='mainForm'>
        <div className="Name">
          <label htmlFor="nameLabel" className="Lable">Name</label><br />
          <input type="text" id="nameLable" className="nameInput" />
        </div>
        <div className="Email">
          <label htmlFor="emailLabel" className="Lable">Email</label><br />
          <input type="text" id="emailLable" className="nameInput" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" />
        </div>
        <div className="Phone">
          <label htmlFor="phoneLabel" className="Lable">Phone Number</label><br />
          <input type="number" id="phoneLable" className="nameInput" maxLength='10' />
        </div>
        <button className="formSubmit" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
