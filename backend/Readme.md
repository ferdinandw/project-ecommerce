DB name: Test

## User Table

sequelize model:generate --name User --attributes email:STRING,phone:INTEGER,password:STRING

## Item Table

sequelize model:generate --name Item --attributes name:STRING,price:INTEGER,description:STRING,quantity:INTEGER,imageUrl:STRING,categoryId:INTEGER

## Category Table

sequelize model:generate --name Category --attributes name:STRING

## Order Table

sequelize model:generate --name Order --attributes total:STRING,status:STRING,userId:INTEGER,categoryId:INTEGER

## Payment

sequelize model:generate --name Payment --attributes name:STRING,address:STRING,quantity:INTEGER,posCode:STRING,phone:INTEGER

## Upload Payment

sequelize model:generate --name Upload --attributes userId:INTEGER,image:STRING

## User

register : email, phone and password.
login : email and password.
hash password and token.

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| get    | /show       | show all user data  |
| get    | /show/:id   | get user data by id |
| delete | /delete/:id | delete user by id   |
| update | /put/:id    | edit user by id     |
| post   | /register   | user register       |
| post   | /login      | user login          |

## Item

name, price, description, imageUrl, quantity.
when show item include categoryId.

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| get    | /show       | show all item     |
| get    | /show/:id   | get item by id    |
| delete | /delete/:id | delete item by id |
| update | /put/:id    | edit item by id   |
| post   | /create     | Item              |

## Category

name.

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| get    | /show    | show all category |

## Order

total and quantity.

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| get    | /show       | show all order        |
| delete | /delete/:id | delete category by id |
| post   | /create     | category              |

## Payment

name, address, quantity, poscode, phone

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| get    | /show    | show all payment |
