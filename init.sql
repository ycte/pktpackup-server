create database test;
use test;
create table User (
    id varchar(20), 
    firstName varchar(20), 
    lastName varchar(20), 
    isActive boolean,
    primary key (id)
);
create table Users (
    id int(11) NOT NULL AUTO_INCREMENT,
    userId varchar(20) NOT NULL, 
    username varchar(20) NOT NULL,
    password varchar(20) NOT NULL,
    college varchar(20),
    name varchar(20), 
    tel varchar(20),
    address varchar(40),
    isActive boolean NOT NULL default true,
    primary key (id)
);
insert into Users(userId, username, password, college, name, 
tel, address, isActive) 
values('22920202207777', 'admin', 'admin', '计算机学院', '管理员',
'13800000', '厦门市翔安区', true);
insert into Users(userId, username, password, college, name, 
tel, address, isActive) 
values('22920202208888', 'john', 'changeme', '计算机学院', '李小行',
'13800000', '厦门市翔安区', true);
insert into User (id, firstName, lastName, isActive) 
values ('529007', 'Yun', 'Xiaoxi', true);