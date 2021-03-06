use n8b1r3wurrdxpz6b;

# table names are temporary and may change
# column names are temporary and may change
create table Topic_1 (
    id integer not null auto_increment primary key,
    question varchar(255) not null,
    answer1 varchar(255) not null,
    answer2 varchar(255) not null,
    answer3 varchar(255) not null,
    answer4 varchar(255) not null,
    correctAnswer varchar(255) not null
);

create table Topic_2 (
    id integer not null auto_increment primary key,
    question varchar(255) not null,
    answer1 varchar(255) not null,
    answer2 varchar(255) not null,
    answer3 varchar(255) not null,
    answer4 varchar(255) not null,
    correctAnswer varchar(255) not null
);

create table Topic_3 (
    id integer not null auto_increment primary key,
    question varchar(255) not null,
    answer1 varchar(255) not null,
    answer2 varchar(255) not null,
    answer3 varchar(255) not null,
    answer4 varchar(255) not null,
    correctAnswer varchar(255) not null
);

create table Result (
    id integer not null auto_increment primary key,
    topicName varchar(255) not null,
    totalCorrectPerTopic integer not null,
    totalTakenPerTopic integer not null,
    totalAverageCorrectPerTopic decimal as ((totalCorrectPerTopic * 1.00) % (totalTakenPerTopic * 1.00))
);