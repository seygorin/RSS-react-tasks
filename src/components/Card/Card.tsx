import React, { MouseEvent } from 'react';
import { Person } from '../../store/api/interfaces';

import './Card.css';

interface CardProps {
  person: Person;
  isSelected: boolean;
  onClick: (person: Person) => void;
  onCheckboxChange: (person: Person, checked: boolean) => void;
}

const Card: React.FC<CardProps> = ({
  person,
  isSelected,
  onClick,
  onCheckboxChange,
}) => {
  const handleCheckboxClick = (event: MouseEvent) => {
    event.stopPropagation();
    onCheckboxChange(person, !isSelected);
  };

  return (
    <li className="result-item">
      <div onClick={() => onClick(person)}>
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
      </div>

      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onClick={handleCheckboxClick}
          />
          Select
        </label>
      </div>
    </li>
  );
};

export default Card;
