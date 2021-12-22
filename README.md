# Agnos Technical Assessment

## Back-end project

Project developed with NodeJS and ExpressJS.

#### Dependencies

1. **Express**       *> V 4.16.1*
2. **Morgan**        *> V 1.9.1*
3. **CORS**          *> V 2.8.5*
4. **Debug**         *> V 2.6.9*
5. **Celebrate**     *> V 15.0.0*
6. **Moment**        *> V 2.29.1*
7. **Dotenv**        *> V 10.0.0*
8. **Mongodb**       *> V 4.2.1*
9. **Uuid**          *> V 8.3.2*
10. **Body-parser**  *> V 1.18.3*
11. **Cookie-Parser** *> V 1.4.4*

#### Dev dependencies

1. **Nodemon**       *> V 2.0.15*

### Running the project

#### 1 - Open the terminal

Open the terminal and access the project's root folder (back-end).

> Example
```bash
cd ~/Agnos_Assessment/back-end
```

#### 2 - Install dependencies

To install the dependencies, run the following command:

```bash
npm i
```

#### 3 - Create Database

Create a database called **coffee_shop** and within it create two collections:

1. items


#### 4 - Create .env file

> You must:
1. Create a file in the project root called **.env**.
2. Copy the contents of the **.env.example** file
3. Paste into **.env** file.
4. Replace the contents of **DB_URI** with your database connection string.

#### 5 - Run the project

To run the project, use the following command:

> Development
```bash
npm run dev
```

> Production
```bash
npm run start
```

In the **"Database_Colletion"** folder there is a file named **items.csv**. By importing this file you will be able to browse the front-end and see the whole system working.

If you prefer, it is also possible to insert the items using the Postman collection, through the POST request "http://localhost:3001/items".

In the **"Items"** folder, **"Insert"** request.

If you have any questions, I am available to clarify.


## Homepage Printscreens

![Home1](https://raw.githubusercontent.com/PedroCF87/PedroCF87.github.io/main/assets/img/PrintHome_Front-end.png)

![Home2](https://raw.githubusercontent.com/PedroCF87/PedroCF87.github.io/main/assets/img/PrintHome_2_Front-end.png)
