CREATE DATABASE IF NOT EXISTS BugMe;
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON bugme.* TO 'Group23Web'@'localhost' IDENTIFIED BY '2020Sem1';
USE BugMe;

 CREATE TABLE Users (
    id int(11) NOT NULL auto_increment,
    firstname varchar(255) ,
    lastname varchar(255) ,
    user_password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    date_joined datetime  DEFAULT(getdate()),
    PRIMARY KEY  (id)
); 

CREATE TABLE Issues (
    id int(11) NOT NULL auto_increment,
    title varchar(255),
    description_ varchar(255),
    type_ varchar(255),
    priority_ varchar(255),
    status_ varchar (255),
    assigned_to int (11) NOT NULL,
    created_by int (11) NOT NULL,
    created datetime  NOT NULL  DEFAULT(getdate()),
    updated datetime NOT NULL  DEFAULT(getdate()),
    PRIMARY KEY  (id)
);

INSERT INTO Users(email, user_password)
VALUES ('admin@project.com', 'password123' );