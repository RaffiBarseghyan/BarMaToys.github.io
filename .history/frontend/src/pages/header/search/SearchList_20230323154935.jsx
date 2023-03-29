import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <div className={`d-flex flex-column align-items-center `}>
      {filtered}
    </div>
  );
}

export default SearchList;