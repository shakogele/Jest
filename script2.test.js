const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', (done) => {
  expect.assertions(1);
  swapi.getPeopleAsyncAwait(fetch).then(data => {
    expect(data.count).toEqual(87)
    done();
  });
});

it('calls swapi to get people With Promise', () => {
  expect.assertions(1);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87)
  });
});
