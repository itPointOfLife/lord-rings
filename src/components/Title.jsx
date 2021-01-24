import React from 'react';

export const Title = ({ races }) => {
  return (
    <div className="title">
      {races.map((race) => (
        <strong key={race + '-title'}>{race}</strong>
      ))}
    </div>
  );
};
