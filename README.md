
# Nutrify - Food Product Explorer

Nutrify is a food product explorer web application powered by the OpenFoodFacts API. This project allows users to search for various food products, filter by categories, and fetch product details using the product barcode.

## Features
Search by Product Name: Users can search for products by their name.
Category Filtering: Filter products by selecting from available food categories.
Barcode Lookup: Find detailed information about products by scanning or entering the barcode.
Responsive Design: The application is fully responsive and user-friendly across different devices.
Technologies Used
React.js: For building user interfaces.
OpenFoodFacts API: For fetching product data, categories, and barcode lookup.
Vite: Development build tool for fast front-end development.
Project Structure
bash
Copy code
src/
│
├── assets/                    # Contains images and logos
├── pages/                      # Pages like Home, ProductDetail, etc.
├── services/                   # API handling (OpenFoodFactsAPI.jsx)
├── App.jsx                     # Main entry point
└── AppRouter.jsx               # contains routes like Home,ProductDetail

## Installation & Setup
Prerequisites
Ensure you have the following installed on your machine:

Node.js
npm or yarn package manager

## Step 1: Clone the Repository
``` bash

git clone https://github.com/Surendra18x/nutrify
cd nutrify

```
## Step 2: Install Dependencies
Run the following command to install all dependencies:

``` bash

npm install
# or if using yarn
yarn install

```
## Step 3: Start the Development Server
Run the following command to start the development server:

``` bash
npm run dev
# or if using yarn
yarn dev
The app should now be running at http://localhost:5173.
```

## Usage
Use the search bar to search for food products by name.
Select a category from the dropdown to filter the products.
Enter a barcode to search for a specific product by its barcode.
Browse product details to view ingredients, nutritional information, etc.

## API Information
This project uses the [OpenFoodFacts]( https://world.openfoodfacts.org/) API to fetch product and category data. It provides the following endpoints:

/categories.json: Get a list of food categories.
/api/v0/product/{barcode}.json: Fetch details for a specific product by its barcode.
/cgi/search.pl?search_terms={query}: Search products by name.

## Contributing
If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -m 'Add your feature'.
4. Push the changes: git push origin feature/your-feature-name.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries or issues, feel free to reach out via [(vermasurendra074@gmail.com)]