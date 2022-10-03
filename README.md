## `npm start`
 Runs the backend server on port 4000
 which connects with the MongoDB cluster
 Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
 
 ### Im using REST client which is a vs code extension instead of postman here.
request.rest constains all the request


you can also change MongoDB cluster in .env file which is in  vitasoft_part2_a repository

in my case it contains
###DATABASE_URL=mongodb+srv://admin1:admin@cluster0.imzz1.mongodb.net/test

###GET http://localhost:4000/users
will get all the user details in DB

###
POST http://localhost:4000/auth
Content-Type: application/json

{
    "userName":"root"
    "password":"password"

}
will create JWT authToken respective to the given userName and password.

###
GET http://localhost:4000/authuser
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9vdCIsImlhdCI6MTY2NDY4MjMzOX0.mnd440EGs_XIjS0Lsb_Eik5zaav7HQZdU5gQkdtMQBg

will get the user credentials respective to the given JWT authToken
