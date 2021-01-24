import React from 'react';
import { useSelector } from 'react-redux';

import { Person } from './Person';

export const Data = ({ races }) => {
  const data = useSelector((store) => store.table.data);

  return (
    <div className="data">
      {races.map((race) => {
        let countRace = 0;

        return (
          <div key={race + '-data-col'} className="col">
            {data.map((obj) => {
              if (obj.race === race) {
                countRace++;
                return (
                  <Person
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    isBorderNone={countRace >= 2 ? true : false}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
