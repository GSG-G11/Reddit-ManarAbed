BEGIN;

DROP TABLE IF EXISTS posts, comments, categories, category_post, users CASCADE;

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
    userId int,
    foreign key (userId) REFERENCES users(id)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    post_id int,
    foreign key (post_id) REFERENCES posts(id)
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255)
);


CREATE TABLE category_post(
    post_id int NOT NULL,
    category_id int NOT NULL,
    foreign key (post_id) REFERENCES posts(id),
    foreign key (category_id) REFERENCES categories(id),

    PRIMARY KEY (post_id, category_id)
);
INSERT INTO users(name, email, password) VALUES 
    ('Ali','ali@gmail.com', '$2b$10$w.eRTveDIOUknuq1Y1QFv.TqRjgimjL3zph2I52HzLpuWIQKlPV3y'),
    ('Sami','sami@gmail.com', '$2b$10$w.eRTveDIOUknuq1Y1QFv.TqRjgimjL3zph2I52HzLpuWIQKlPV3y');

INSERT INTO posts(title, content, img_url,userId) VALUES 
    ('Hello from DB', 'bla bla blablablabla','https://preview.redd.it/62sxghg02qp81.jpg?width=640&crop=smart&auto=webp&s=7cc7269347ded051513f8ac6fa0bd318799c75a5',1),
    ('Hello from express', 'bla bla blablablabla','https://preview.redd.it/62sxghg02qp81.jpg?width=640&crop=smart&auto=webp&s=7cc7269347ded051513f8ac6fa0bd318799c75a5',2);

INSERT INTO comments(username, content, post_id) VALUES 
    ('ali','Hello from DB', 1),
    ('mona','Hello from express', 1);


COMMIT;
