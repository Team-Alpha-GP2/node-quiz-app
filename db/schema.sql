drop database if exists node_quiz_app_db;

create database node_quiz_app_db;

use node_quiz_app_db;

# table names are temporary and may change
# column names are temporary and may change
create table Topic_1 (
    id integer not null auto_increment primary key,
    question varchar(255) not null,
    answer1 varchar(255) not null,
    answer2 varchar(255) not null,
    answer3 varchar(255) not null,
    answer4 varchar(255) not null,
    correctAnswer integer not null
);

create table Topic_2 (
    id integer not null auto_increment primary key,
    question varchar(255) not null,
    answer1 varchar(255) not null,
    answer2 varchar(255) not null,
    answer3 varchar(255) not null,
    answer4 varchar(255) not null,
    correctAnswer integer not null
);

create table Topic_3 (
    id integer not null auto_increment primary key,
    question varchar(255) not null,
    answer1 varchar(255) not null,
    answer2 varchar(255) not null,
    answer3 varchar(255) not null,
    answer4 varchar(255) not null,
    correctAnswer integer not null
);

# total_topic_1_average_correct, total_topic_2_average_correct, total_topic_3_average_correct should be calculated in code or through the database depending on which ends up being easier to do
create table Results (
    id integer not null auto_increment primary key,
    totalTakenPerTopic integer not null,
    totalCorrectPerTopic integer not null,
    totalAverageCorrectPerTopic decimal not null # = total_topic_1_correct / (total_topic_1_taken * 10)
    # total_topic_1_taken integer not null, # is a row
    # total_topic_1_correct integer not null, # is a row
    # total_topic_1_average_correct decimal not null, # is a row
    # total_topic_2_taken integer not null, # is a row
    # total_topic_2_correct integer not null, # is a row
    # total_topic_2_average_correct decimal not null, # is a row
    # total_topic_3_taken integer not null, # is a row
    # total_topic_3_correct integer not null, # is a row
    # total_topic_3_average_correct decimal not null, # is a row
);