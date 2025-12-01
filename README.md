# Mini-Project-3

The third mini-project is designed to cover material learned in modules 8 and 9 around using databases. The goal is to create a real-time database after fetching data externally via an API (choose from the list or find your own). The project should follow the MVC model, and include a way to initially fetch the data and populate the database. All CRUD operations should be included, and demonstrated via Postman or Swagger (a front-end is not required). The database structure should reflect the structure of the data returned from the external API, but does not need to include everything.

Here are some questions to cover during your presentations:

1. 
a) **What was your requirements gathering and design process?**
After looking through the assignment requirements the main points that I wanted to focus on was using the CRUD operations and MVC structure. In addition I wanted to make something with a little bit more real-world applications compared to my previous mini-projects.
b) **Was it useful/successful?**
100%. Looking through the requirments upfront made it easier to structure the application, and reduced refactoring that I previously needed to later on in my projects.

2. **Give a high level overview of your application and its features.**
The application is a Crypto Price Tracker that retrieves cryptocurrency data from the CoinGecko API and stores it in a MongoDB database. 
Its main features are:
- Initial population of the MongoDB database with coin data
- Full CRUD operations (create, read, update, delete) for coins
- A manual “price sync” function that refreshes coin prices using the external API
- API documentation (using Swagger)
- MVC structure (models, controllers, routes, micro-services)

3. **Where does the data come from (external API)?**
The data comes from the CoinGecko API, specifically from the /coins/markets endpoint, which provides cryptocurrency price data including:
- name
- symbol
- current price
- market cap
- last updated

4. **How is this data inserted into your database?**
Data is insterted into MongoDB in two ways, firstly using the POST method with /api/coins to post a coin into the database. Secondly I use a controller to call the micro-service (fetchCoinData) to fetch new API data to update each coin.

5. **How is the data structured (into tables or collections)?**
Because I chose MongoDB as my database, the data is stored in one big collection, "coins" that has the following fields:
- name (String)
- symbol (String)
- api_id (String)
- current_price (Number)
- market_cap (Number)
- last_updated (Date)

6. **How is the application code structured (MVC model)?**
I used the following MVC structure to frame this project:
Model: coinModel.js defines the shape of the MongoDB schema
View: There is no front-end in this assessment, but I used the Swagger UI to have a way to interact with the API.
Controller: coinController.js is where I puit all of the crud logic
Routes: coinRoutes.js is where i map all of the endpoints and separate them from the controllers

7. 
a) **Does your application cover all 4 CRUD operations?**
yep!
b) **How?**
Create: POST /api/coins - add a new coin
Read: GET /api/coins and GET /api/coins/:id - retrieve a single or all coins
Update: PUT /api/coins/:id - update a coin
Delete: DELETE /api/coins/:id - remove a coin from the database

8. **How might using a database instead of an external API directly benefit an application?**
The main one I thought of was to reduce the number of API calls that you need to make, but it could also speed up performance. In my specific case of this project, it could be a great way to see historical data of past coin values and how they change over time.

9. **How might you extend the features of your application in future?**
Continuing what I said above a great feature to add cwould be historical price snapshots for coins over time, and maybe automatic price updates. Finally a front-end would be a great way to make this a better application overall.