import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Person } from '../../store/api/interfaces';
import { RootState } from '../../store/store';
import { selectItem, unselectItem } from '../../store/slices/selectedItemSlice';
import './Card.css';

interface CardProps {
  person: Person;
}

const Card: React.FC<CardProps> = ({ person }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const isSelected = useSelector(
    (state: RootState) => !!state.selectedItem.selectedItems[person.url],
  );

  const handleCardClick = () => {
    navigate(`/details/${person.url.split('/')[5]}?page=${page}`);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (isSelected) {
      dispatch(unselectItem(person.url));
    } else {
      dispatch(selectItem(person));
    }
  };

  return (
    <li className="result-item">
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
          />
          Select
        </label>
      </div>
      <div onClick={handleCardClick}>
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
    </li>
  );
};

export default Card;
