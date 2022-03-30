const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');
const { getPostQu ,addPostQu } = require('../database/queries');

beforeEach(() => {
    return dbBuild();
  });

test('test get all posts' ,() => {
    return getPostQu
    .then((data) => {
        expect(data.rowCount).toBe(2)
    })
});

test('test get add post' ,() => {
    return addPostQu('Post Title' , 'content', 'http://placeholder.png' , 2)
    .then((data) => {
        expect(data.rowCount).toBe(1)
    })
});

afterAll(() => connection.end())
