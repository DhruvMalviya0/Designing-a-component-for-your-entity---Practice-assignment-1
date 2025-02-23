import React from 'react';
import './Card.css';

const UserCard = () => {
  const profilePhoto = 'https://www.lismore.nsw.gov.au/files/assets/public/v/1/1.-households/4.-pets-and-animals/images/kitten.jpg?dimension=pageimage&w=480';
  const name = 'Dhruv malviya';
  const email = 'dhruv@gmail.com';
  const phoneNumber = '6268963229';
  const address = 'Pune';

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <div className="user-details">
        <h2 className="user-name">{name}</h2>
        <p className="user-email">Email: {email}</p>
        <p className="user-phone">Phone: {phoneNumber}</p>
        <p className="user-address">Address: {address}</p>
      </div>
    </div>
  );
};

export default UserCard;