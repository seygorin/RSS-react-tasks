import React from 'react';
import { Person } from '../../store/api/interfaces';
import Card from '../Card/Card';
import NoResults from '../NoResults/NoResults';

interface CardListProps {
  people: Person[];
}

const CardList: React.FC<CardListProps> = ({ people }) => {
  if (people.length === 0) {
    return <NoResults />;
  }

  return (
    <ul className="results-list">
      {people.map((person) => (
        <Card key={person.url} person={person} />
      ))}
    </ul>
  );
};

export default CardList;
