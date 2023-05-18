
# Food Recipe App

FoodieCrush uses the Edamam API to fetch and display recipe data. It allows users to search for recipes, see the ingredients and view detailed directions.



## Demo




## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Deployment

To deploy this project run
In the project directory, you can run:

 #### npm start :
Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

#### npm test:
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

#### npm run build :
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

