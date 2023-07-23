INSERT INTO sentence (user_id, story_id, body)
VALUES (1, 1, 'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1'),
       (2, 2, 'tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2tes2'),
       (3, 3, 'test3'),
       (4, 4, 'test4'),
       (5, 5, 'test5'),
       (6, 6, 'test6'),
       (7, 7, 'test7'),
       (8, 8, 'test8'),
       (9, 9, 'test9'),
       (10, 10, 'test10');

INSERT INTO public.user (email, name)
VALUES ('test1@gmail.com', 'testUser1'),
       ('test2@gmail.com', 'testUser2'),
       ('test3@gmail.com', 'testUser3'),
       ('test4@gmail.com', 'testUser4'),
       ('test5@gmail.com', 'testUser5'),
       ('test6@gmail.com', 'testUser6'),
       ('test7@gmail.com', 'testUser7'),
       ('test8@gmail.com', 'testUser8'),
       ('test9@gmail.com', 'testUser9'),
       ('test10@gmail.com', 'testUser10');

INSERT INTO story (title)
VALUES ('testStory1'),
       ('testStory2'),
       ('testStory3'),
       ('testStory4'),
       ('testStory5'),
       ('testStory6'),
       ('testStory7'),
       ('testStory8'),
       ('testStory9'),
       ('testStory10');

INSERT INTO todos (id, created_at, user_id, todo, is_completed)
VALUES (1, '2021-10-13 00:00:00', '1', 'Buy milk', false),
       (2, '2021-10-13 00:00:00', '1', 'Walk the dog', false),
       (3, '2021-10-13 00:00:00', '2', 'Buy milk', false),
       (4, '2021-10-13 00:00:00', '2', 'Walk the dog', false);