import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from '@remix-run/react';
import { Person } from '../../store/api/interfaces';
import { RootState } from '../../store/store';
import { selectItem, unselectItem } from '../../store/slices/selectedItemSlice';
import styles from './Card.module.css';

interface CardProps {
  person: Person;
}

const Card: React.FC<CardProps> = ({ person }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const page = new URLSearchParams(location.search).get('page') || '1';

  const isSelected = useSelector(
    (state: RootState) => !!state.selectedItem.selectedItems[person.url],
  );

  const handleCardClick = () => {
    navigate(`/?id=${person.url.split('/')[5]}&page=${page}`, {
      replace: true,
    });
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
    <div className={styles.card} onClick={handleCardClick}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()}
      />
      <h3>{person.name}</h3>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Skin Color: {person.skin_color}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Birth Year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
    </div>
  );
};

export default Card;
