## User Table

sequelize model:generate --name User --attributes email:STRING,phone:INTEGER,password:STRING

## Item Table

sequelize model:generate --name Item --attributes name:STRING,price:INTEGER,description:STRING,imageUrl:STRING,categoryId:INTEGER

## Category Table

sequelize model:generate --name Category --attributes name:STRING

## Order Table

sequelize model:generate --name Order --attributes total:STRING,status:STRING,userId:INTEGER,categoryId:INTEGER
