drop database if exists node_quiz_app_db;

create database node_quiz_app_db;

create table topic_1 (
    id integer not null auto_increment,
    question varchar(255) not null,
    answer_1 varchar(255) not null,
    answer_2 varchar(255) not null,
    answer_3 varchar(255) not null,
    answer_4 varchar(255) not null,
    correct_answer integer not null
);

create table topic_2 (
    id integer not null auto_increment,
    question varchar(255) not null,
    answer_1 varchar(255) not null,
    answer_2 varchar(255) not null,
    answer_3 varchar(255) not null,
    answer_4 varchar(255) not null,
    correct_answer integer not null
);

create table topic_3 (
    id integer not null auto_increment,
    question varchar(255) not null,
    answer_1 varchar(255) not null,
    answer_2 varchar(255) not null,
    answer_3 varchar(255) not null,
    answer_4 varchar(255) not null,
    correct_answer integer not null
);

create table results (
    id integer not null auto_increment,
    total_topic_1_taken integer not null,
    total_topic_1_correct integer not null,
    total_topic_1_average_correct number not null, # = total_topic_1_correct / (total_topic_1_taken * 10)
    total_topic_2_taken integer not null,
    total_topic_2_correct integer not null,
    total_topic_3_taken integer not null,
    total_topic_3_correct integer not null
);