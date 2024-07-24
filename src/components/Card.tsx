import React from 'react';
import { Person } from '../services/interfaces';

import './Card.css';
interface CardProps {
  person: Person;
  onClick: (id: number) => void;
}

const extractIdFromUrl = (url: string): string => {
  const idPattern = /\/([0-9]+)\/$/;
  const match = url.match(idPattern);
  return match ? match[1] : '';
};

const Card: React.FC<CardProps> = ({ person, onClick }) => {
  const id = parseInt(extractIdFromUrl(person.url), 10);

  return (
    <li className="result-item" onClick={() => onClick(id)}>
      <h3>{person.name}</h3>
      <div className="attributes-grid">
        <p>
          <strong>Height</strong>: {person.height}
        </p>
        <p>
          <strong>Mass</strong>: {person.mass}
        </p>
        <p>
          <strong>Hair Color</strong>: {person.hair_color}
        </p>
        <p>
          <strong>Skin Color</strong>: {person.skin_color}
        </p>
        <p>
          <strong>Eye Color</strong>: {person.eye_color}
        </p>
        <p>
          <strong>Birth Year</strong>: {person.birth_year}
        </p>
        <p>
          <strong>Gender</strong>: {person.gender}
        </p>
      </div>
    </li>
  );
};

export default Card;
