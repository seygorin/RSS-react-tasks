import React from 'react';
import { Person } from '../store/api/interfaces';
import Card from './Card';
import NoResults from './NoResults';

interface CardListProps {
  people: Person[];
  onItemClick: (person: Person) => void;
}

const CardList: React.FC<CardListProps> = ({ people, onItemClick }) => {
  if (people.length === 0) {
    return <NoResults />;
  }

  return (
    <ul className="results-list">
      {people.map((person) => (
        <Card
          key={person.name}
          person={person}
          onClick={() => onItemClick(person)}
        />
      ))}
    </ul>
  );
};

export default CardList;
