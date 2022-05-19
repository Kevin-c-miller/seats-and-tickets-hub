// convert miliary time to standard time
export const timeConversion = (militaryTime: string) => {
  const [hours, minutes] = militaryTime.split(':');
  return `${+hours > 12 ? +hours - 12 : hours}:${minutes}
   ${+hours >= 12 ? 'PM' : 'AM'}`;
};
