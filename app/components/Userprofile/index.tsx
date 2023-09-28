import React from 'react';

const UserProfile = () => {
  return (
    <div style={{ backgroundColor: 'darkgreen', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/Images/userprofile.png" alt="User Avatar" style={{ width: '300px', height: '300px', borderRadius: '150%', marginBottom: '80px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', textAlign: 'center', width: '80%' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>User Profile</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: '20px' }}>
          <label htmlFor="companyName" style={{ fontSize: '24px', color: 'yellow', marginBottom: '5px' }}>Company Name</label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter Company Name"
            style={{ border: '1px solid yellow', padding: '20px', width: '100%', fontSize: '24px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: '20px' }}>
          <label htmlFor="wasteType" style={{ fontSize: '24px', color: 'yellow', marginBottom: '5px' }}>Waste Type</label>
          <input
            type="text"
            id="wasteType"
            placeholder="Enter Waste Type"
            style={{ border: '1px solid yellow', padding: '20px', width: '100%', fontSize: '24px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginBottom: '40px' }}>
          <label htmlFor="location" style={{ fontSize: '24px', color: 'yellow', marginBottom: '5px' }}>Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter Location"
            style={{ border: '1px solid yellow', padding: '20px', width: '100%', fontSize: '24px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }}
          />
        </div>
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '20px', borderRadius: '10%', marginBottom: '20px', fontSize: '24px' }}>Message</button>
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '20px', borderRadius: '8%', fontSize: '24px' }}>View Products</button>
      </div>
    </div>
  );
};

export default UserProfile;

