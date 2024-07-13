#               Mobile Stub Development for FoodieHub(S)

### 1. Designing the Mobile Stub

Objective: Create a lightweight launchpad for FoodNEST(S) that ensures smooth functionality in low mobile network connectivity areas.
Approach:
Develop a stub that directs the icon to always open the FoodNEST(S) web app.
Prefetch the user interface (UI) to open instantly, minimizing HTTPS requests.
Render the web app’s Document Object Model (DOM) seamlessly on the frontend.
Process operations on the server end, storing data efficiently in the mobile cache.
Benefits:
Seamless user experience.
Efficient processing and rendering in low-connectivity areas.

### 2. User Registration and Profile Management

Objective: Implement a user registration system.
Approach:
Allow users to sign up and create profiles.
Store user profile information efficiently in the cache for session management.

### 3. Product Browsing and Selection

Objective: Enable users to browse products within a chosen category.
Approach:
Select a category (e.g., “Main Courses,” “Desserts”).
Implement product browsing, view details, add items to the cart, and manage selections.

### 4. Order Flow and Checkout Process

Objective: Develop an order flow.
Approach:
Allow users to add items to their cart.
Implement a delivery address input form.
Provide payment options for order completion.

### 5. Data Storage and Transmission

Objective: Efficiently manage data.
Approach:
Store session data, user profiles, cart contents, order details, and browsing history in the mobile cache.
Relay data to the web server’s database for updates.

### 6. Optimization for Low Bitrate and Cache Usage

Objective: Ensure smooth functionality in low mobile network connectivity.
Approach:
Minimize bitrate requirements.
Utilize cache memory effectively for prefetching session data.
Improve user experience and reduce loading times.

### 7. Testing and Performance Evaluation
Objective: Validate functionality across devices and network conditions.
Approach:
Thoroughly test the mobile stub version.
Evaluate speed, responsiveness, and cache memory efficiency.

# Challenges :-

1.Low Bitrate Optimization
  Solution: Implement data compression techniques such as gzip compression to reduce the size of data transferred between the server and the mobile device.
  
2.Efficient Cache Usage
  Solution: Utilize browser caching mechanisms effectively by leveraging techniques like service workers and local storage. Prefetch frequently accessed resources and store them in the cache memory of the mobile 
  device.
  
3.Optimization for Low Connectivity
  Solution: Implement offline-first strategies to allow the mobile app to function even when there is no network connectivity.
  
4.Payment Integration
  Solution: Integrate lightweight payment gateways optimized for mobile devices. Choose payment APIs that support mobile platforms and provide a seamless checkout experience. 
  


# Screenshots of Website

### Foodnest(S) stub icon

![Screenshot (13)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/5627c7aa-6e4c-47f8-8576-728edf36d88b)

###  HOME PAGE

![Screenshot (18)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/98724116-9bee-42e6-a650-b36d78388852)

###  LOGIN PAGE

![Screenshot (24)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/ad5bcd95-1121-4a40-95c3-2218f1ecc85a)

### SIGNUP PAGE

![Screenshot (25)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/c5b3003f-783b-4152-a0e9-2fb4007bf06b)

### FOOD DETAILS

![Screenshot (16)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/db04217f-af43-4fc6-ae54-3aa065d8e692)

###  FOOD ITEMS

![Screenshot (15)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/fc3e5f8c-8b7c-4c48-8d1a-e3b50a962afb)

###  FOOD ITEMS 

![Screenshot (17)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/fdcd6fbc-b07d-48c4-9151-4c4b42d7d07d)

###  CART

![Screenshot (19)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/8253fa44-5b0c-4327-a0f3-ded3caefd6e5)

###  MY ORDERS

![Screenshot (23)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/e4ac5eca-9039-47e2-99e6-41467aa14a62)

###  PAYMENT OPTIONS

###  RECOMMENDED

![Screenshot (20)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/25e14b90-0dd5-48a8-be45-a042d8b8b45a)

###  CASH ON DELIVERY 

![Screenshot (21)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/6f2483a3-46f0-4612-aca0-66873cfbb610)

###  GPAY/ PHONEPE
![Screenshot (22)](https://github.com/ManuSaini9084/FoodNest-Website/assets/139550825/54c701f0-3def-44e2-8910-7aefde0b5f7d)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

