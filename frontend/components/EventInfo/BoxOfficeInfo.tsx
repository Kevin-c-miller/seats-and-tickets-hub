import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const BoxOfficeInfo = ({ event }: Props) => {
  return (
    <div className="boxOfficeInfo">
      <p>{event?._embedded?.venues[0]?.boxOfficeInfo.openHoursDetail}</p>
    </div>
  );
};

export default BoxOfficeInfo;
