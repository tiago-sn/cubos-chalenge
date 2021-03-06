import * as React from 'react';

import { getMovieGenreById } from '../../service/api';
import Ship from '../Ship';
import { Div } from './styles';

interface IShipGroupProps {
  /**
   * this component should recieve a list of genre, not a list of genre id.
   */
  genreIdList: number[];
}

const ShipGroup: React.FC<IShipGroupProps> = ({ genreIdList }) => {
  return (
    <Div>
      {genreIdList.map(genreId => {
        const genre = getMovieGenreById(genreId);
        return <Ship text={genre.name} key={genre.id} />;
      })}
    </Div>
  );
};

export default ShipGroup;
