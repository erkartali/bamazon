DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(4) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Toy Boat', 'toys', 9.99, 25);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Turtle Wax', 'cars', 20, 10);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Steering Wheel', 'cars', 50, 5);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Eye Pad', 'electronics', 500, 40);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Eye Phone', 'electronics', 900, 75);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Smarties', 'candy', 1, 200);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Snickers', 'candy', 1, 80);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Volleyball', 'sporting-goods', 50, 11);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('Basketball', 'sporting-goods', 30, 20);
INSERT INTO product (product_name, department_name, price, stock_quantity) values ('football', 'sporting-goods', 9.99, 25);