BEGIN;

DROP TABLE IF EXISTS posts, comments, users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    img_url TEXT,
    votes_num int not null default 0,
    userId int,
    foreign key (userId) REFERENCES users(id)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    post_id int,
    user_id int,
    foreign key (post_id) REFERENCES posts(id),
    foreign key (user_id) REFERENCES users(id)
);

INSERT INTO users(name, email, password) VALUES 
    ('Ali','ali@gmail.com', '$2b$10$w.eRTveDIOUknuq1Y1QFv.TqRjgimjL3zph2I52HzLpuWIQKlPV3y'),
    ('Sami','sami@gmail.com', '$2b$10$w.eRTveDIOUknuq1Y1QFv.TqRjgimjL3zph2I52HzLpuWIQKlPV3y');

INSERT INTO posts(title, content, img_url,userId) VALUES 
    ('Hello', 'bla bla blablablabla','https://preview.redd.it/62sxghg02qp81.jpg?width=640&crop=smart&auto=webp&s=7cc7269347ded051513f8ac6fa0bd318799c75a5',1),
    ('Hi', 'bla bla blablablabla','https://preview.redd.it/62sxghg02qp81.jpg?width=640&crop=smart&auto=webp&s=7cc7269347ded051513f8ac6fa0bd318799c75a5',2);

INSERT INTO comments(content, post_id) VALUES 
    ('test',1),
    ('test',2);


COMMIT;
