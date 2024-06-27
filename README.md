# Tech interview

This code challenge is designed to assess your ability to create and manage API endpoints, build responsive web interfaces, and handle user states using Nextjs. You will be implementing a search feature for products, along with a history of user searches.

## Code challenge 

#### API endpoints 

- Create an Next API route `/search`. Inside this route  fetch the products from this API >> https://dummyjson.com/docs/products.
- Add parameters to this route such as `rating`, `priceMin`, `priceMax`.

#### Search

- In the homepage, build a navbar with search inputs and a button to trigger the search.
- On the button click call the server endpoint to get the products.
- Show the products in a grid, use responsive styling to **make it look nice**.
Products cards should include `title`, `price`, `image`, `category`, `reviewAverageRating`

example query => `rating > 4.25` and `price < 800` 

#### User Search History Management

- Store all the searches a user do.
- Create a page `/history` where users can see all their searches.
- On the top-right, add a button to clear the search history.
