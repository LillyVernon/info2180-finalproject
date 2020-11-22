DROP DATABASE IF EXISTS schema;
CREATE DATABASE schema;
USE schema;

CREATE TABLE Users (
    id int,
    firstname varchar(255),
    lastname varchar(255),
    password varchar(255),
    email varchar(255),
    date_joined datetime
);

CREATE TABLE Users (
    id int,
    title varchar(255),
    description varchar(255),
    type varchar(255),
    priority varchar(255),
    status varchar,
    assigned_to int,
    created_by int,
    created datetime,
    updated datetime
);