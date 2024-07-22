import React from 'react';
import { Person } from '../../store/api/interfaces';
import Card from '../Card/Card';
import NoResults from '../NoResults/NoResults';

interface CardListProps {
  people: Person[];
  onItemClick: (person: Person) => void;
  onCheckboxChange: (person: Person, checked: boolean) => void;
  selectedItems: { [id: string]: Person };
}

const CardList: React.FC<CardListProps> = ({
  people,
  onItemClick,
  onCheckboxChange,
  selectedItems,
}) => {
  if (people.length === 0) {
    return <NoResults />;
  }

  return (
    <ul className="results-list">
      {people.map((person) => (
        <Card
          key={person.url}
          person={person}
          isSelected={!!selectedItems[person.url]}
          onClick={onItemClick}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
    </ul>
  );
};

export default CardList;
