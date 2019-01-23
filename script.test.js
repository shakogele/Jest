const googleSearch = require('./script')

dbMock = [
  'cats.com',
  'soup.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com'
];

describe('googleSearch', () => {
  
  it('this is a test', () => {
    expect('hello').toBe('hello')
  });

  it('is searching google', () => {
    expect(googleSearch('animal', dbMock))
          .toEqual(['animals.com']);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock))
          .toEqual([]);
    expect(googleSearch(null, dbMock))
          .toEqual([]);
  });

  it('doesnot return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length)
          .toBeLessThanOrEqual(3);
  });

})
