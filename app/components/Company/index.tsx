"use client"
import React, { useState } from 'react';

const companies = [
  {
    id: 1,
    name: 'Takataka Solution',
    profile: 'Profile A',
    description: 'Waste management',
  },
  {
    id: 2,
    name: 'Pure-Planet',
    profile: 'Profile B',
    description: 'Clean energy',
  },
  {
    id: 3,
    name: 'Pur-Plastics',
    profile: 'Profile C',
    description: 'Plastic recycling',
  },
  {
    id: 4,
    name: 'Bins Service Ltd',
    profile: 'Profile A',
    description: 'Waste management',
  },
  {
    id: 5,
    name: 'Zoa Taka Ltd',
    profile: 'Profile B',
    description: 'Waste collection',
  },
  {
    id: 6,
    name: 'Mr. Green Kenya',
    profile: 'Profile C',
    description: 'Environmental services',
  },
];

const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const handleSearch = (e: { target: { value: any; }; }) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setFilteredCompanies(filtered);
  };

  return (
    <div style={{ backgroundColor: 'darkgreen', minHeight: '100vh', padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'white' }}>Company List</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by company name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: '40%', padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}
        />
        <div style={{ width: '20px', height: '100%', backgroundColor: 'green' }} />
      </div>
      <ul style={{ listStyle: 'none', padding: 0, width: '80%' }}>
        {filteredCompanies.map((company) => (
          <li
            key={company.id}
            style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              boxShadow: '0 15px 4px rgba(7, 8, 7, 8.4)',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '100%',
                backgroundColor: 'green',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                marginRight: '20px',
              }}
            />
            <div style={{ flex: 1, marginLeft: '130px' }}>
              <h2>{company.name}</h2>
              <p>{company.profile}</p>
              <div>
                <label>What we do:</label>
                <select>
                  <option value={company.description}>{company.description}</option>
                </select>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
