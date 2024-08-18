import React from 'react';
import { UserData } from '../../store/slices/uncontrolledFormSlice';
import './index.css';

interface Props {
  data: UserData;
  title: string;
}

const UserDataTile: React.FC<Props> = ({ data, title }) => {
  return (
    <div className={'user-data-tile'}>
      <h2 className="title">{title}</h2>
      <div className="card-container">
        <div className="card">
          <h3>Personal Info</h3>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Gender: {data.gender}</p>
        </div>
        <div className="card">
          <h3>Contact Info</h3>
          <p>Email: {data.email}</p>
          <p>Country: {data.country}</p>
          <p>Accepted Terms: {data.termsAccepted ? 'Yes' : 'No'}</p>
        </div>
      </div>
      {data.picture && (
        <div className="picture-container">
          <img src={data.picture} alt="User" />
        </div>
      )}
    </div>
  );
};

export default UserDataTile;
