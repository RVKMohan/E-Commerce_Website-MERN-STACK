#E-commerce Project

> Ecommerce-MERN-Application is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, and Node.js). The application features user registration and login, product listing and search, cart and checkout, Stripe payment integration, and user reviews. The project is well-organized and documented, and it would be a good starting point for anyone who wants to learn how to build an e-commerce application with the MERN stack.

# Description

> This project is a full-stack e-commerce application built with the MERN stack. The application features the following:

- User registration and login
- Product listing and search
- Cart and checkout
- Stripe payment integration
- User reviews

> Tech Stack

- MongoDB
- Express
- React
- Node.js
- Stripe

### Install MongoDB Community Server

```
https://www.mongodb.com/try/download/community
```

### Install MongoDB Compass

```
https://downloads.mongodb.com/compass/mongodb-compass-1.38.0-win32-x64.exe
```

### Env Variables

Rename configFiles.env to config.env in backend/config folder

Add your config variables values in the config.env file in backend/config folder

- PORT = 4000
- NODE_ENV = DEVELOPMENT
- DB_LOCAL_URI = mongodb://127.0.0.1:27017/
- DB_URI = Add This When You Host Your Database Online
- FRONTEND_URL = "http://localhost:3000"

* JWT_SECRET = SDFDFSHDFHDUISHHUDFHUISHFIUSHDFHFDHIUSDH3432H4J23HE2HUH2S (Any Random Value)
* JWT_EXPIRES_TIME = 7d (Any Random Value)
* COOKIE_EXPIRES_TIME = 7 (Any Random Value)

### For Cloudinary Config

- Create Account On https://cloudinary.com

- CLOUDINARY_CLOUD_NAME =
- CLOUDINARY_API_KEY =
- CLOUDINARY_API_SECRET =

### For Stripe Config

- Create Account On https://stripe.com/en-in

- STRIPE_SECRET_KEY =
- STRIPE_API_KEY =

### For Mailtrap Config

- Create Account On https://mailtrap.io/

- SMTP_HOST =
- SMTP_PORT =
- SMTP_EMAIL =
- SMTP_PASSWORD =
- SMTP_FROM_EMAIL = noreply@shopit.com
- SMTP_FROM_NAME = shopit

### Install Dependencies (Backend)

```
cd backend
npm i --force
```

### Install Dependencies (Frontend)

```
cd frontend
npm i --force
```

### Seed Database

Use the following commeand to put some dummy products in that database.
Run it in the root folder.

```
npm run seeder
```

### RUN Server Backend

```
npm run dev
```

### RUN CLIENT Frontend

```
npm start
```
#  #LOGIN PAGE
![Screenshot 2024-06-19 122851](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/75c92d96-30bf-4d6c-92fd-e19437ca340e)

#  #REGISTRATION PAGE
![Screenshot 2024-06-19 122917](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/4f87a573-3aa3-4fb7-b47f-a6ba8eb6628c)

#  #FORGOT PASSWORD PAGE
![Screenshot 2024-06-19 123017](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/b1c66ed8-90f6-494c-8bdf-d50f710b62a0)

#  #HOME PAGE
![Screenshot 2024-06-19 155204](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/1f4667b1-9c8c-4a45-9055-42927b8b5b7d)

#  #PRODUCT DETAILS PAGE
![Screenshot 2024-06-19 160045](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/4b97bf2c-9fc5-4bf7-8d3b-87d35d616521)

#  #ADMIN DASHBOARD
![Screenshot 2024-06-19 155431](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/1eacf0c6-6025-4134-8046-80b7dcd06e90)

#  #TOTAL PRODUCTS PAGE FOR ADMIN DASHBOARD
![Screenshot 2024-06-19 155444](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/f3e03904-dc0a-40e9-9fc3-88b835362c24)

#  #CART VIEW
![Screenshot 2024-06-19 160203](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/57ed1723-df01-4a62-921d-2984cde5b90d)

#  #SHIPPING
![Screenshot 2024-06-19 162226](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/357dc431-b041-438f-a93a-4e086d9a5b49)

#  #CONFIRM ORDER
![Screenshot 2024-06-19 162249](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/ecfd0e1d-10b9-4ff2-a9d7-1ae833be9e9c)

#  #PROCCED TO PAYMENT 
![Screenshot 2024-06-19 162310](https://github.com/RVKMohan/E-Commerce_Website-MERN-STACK/assets/107797667/c9b5e4ec-7b09-4f00-8604-cb249329552d)

