# Tech interview

This code challenge is designed to assess your ability to create and manage API endpoints, build responsive web interfaces, and handle user states using modern web technologies. You will be implementing a search feature for products, along with a history of user searches. Additionally, you'll use MongoDB for data persistence.

## Code challenge 

#### API endpoints 

- Create an API route `/search`. Inside this route you should fetch the products from this test API >> https://dummyjson.com/docs/products.
- Add parameters to this route such as `rating`, `priceMin`, `priceMax`.

#### Search

- Build in the homepage a navbar with search inputs and a button to trigger the search.
- On button click call the server endpoint to get the products.
- Show the products in a grid, use responsive styling to make it look nice.
Products should include `title`, `price`, `image`, `category`, `reviewAverageRating`

#### User state

- Store all the searches a user do.
- Create a page `/history` where each user can see all their searches.
- Add on top-right a button to clear the history. It should delete the user search history.

#### MongoDb (TBD)


example query >> `rating > 4.25` and `price < 800`.