import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const BoxOfficeInfo = ({ event }: Props) => {
  return (
    <div className="text-sm italic max-w-lg mb-8">
      <p>{event?._embedded?.venues[0]?.boxOfficeInfo.openHoursDetail}</p>
    </div>
  );
};

export default BoxOfficeInfo;
