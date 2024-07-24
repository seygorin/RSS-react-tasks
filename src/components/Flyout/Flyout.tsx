import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { unselectAllItems } from '../../store/slices/selectedItemSlice';
import Button from '../Button/Button';
import './Flyout.css';

const Flyout: React.FC = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItem.selectedItems,
  );
  const selectedCount = Object.keys(selectedItems).length;

  const handleUnselectAll = () => {
    dispatch(unselectAllItems());
  };

  const handleDownload = () => {
    const headers = [
      'name',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender',
      'url',
    ];

    const csvContent = [
      headers.join(','),
      ...Object.values(selectedItems).map((item) =>
        [
          item.name,
          item.height,
          item.mass,
          item.hair_color,
          item.skin_color,
          item.eye_color,
          item.birth_year,
          item.gender,
          item.url,
        ].join(','),
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `${selectedCount}_people.csv`);
    a.click();
  };

  if (selectedCount === 0) return null;

  return (
    <div className="flyout">
      <p>{selectedCount} items are selected</p>
      <Button variant="search" onClick={handleUnselectAll}>
        Unselect all
      </Button>
      <Button variant="search" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};

export default Flyout;
