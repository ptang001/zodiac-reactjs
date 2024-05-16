import { getChineseZodiac } from './component/zodiac';

test('renders learn react link', () => {
  expect(getChineseZodiac(1900)).toBe('Rat');
  expect(getChineseZodiac(1990)).toBe('Horse');
});

