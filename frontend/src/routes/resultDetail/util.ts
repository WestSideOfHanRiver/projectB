export const ageToAgeGroup = (age: number): number => {
  return Math.floor(age / 10) * 10;
};
