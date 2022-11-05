import { ageToAgeGroup } from './util';

describe('util Test', () => {
  test('ageToAgeGroup', () => {
    expect(ageToAgeGroup(20)).toBe(20);
    expect(ageToAgeGroup(21)).toBe(20);
    expect(ageToAgeGroup(19)).toBe(10);
  });
});
