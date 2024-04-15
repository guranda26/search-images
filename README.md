# React Photo Gallery

This React Photo Gallery application is an interactive web application built with React, utilizing the Unsplash API to fetch and display popular images. The application features two main pages: "Main" and "History". It allows users to search for images by keywords, view image details, and track their search history with a caching mechanism to optimize performance.

## Features

### Two Main Pages
- **Main Page**: Displays the 20 most popular images and includes a live search feature to filter images by keywords.
- **History Page**: Shows all past search terms used in the application, and clicking on any term will display the images related to that search.

### Live Search
A dynamic search functionality that updates the image display as you type, without the need for a search button.

### Caching Mechanism
Search results are cached, so if a previous search term is entered again, the images are retrieved from the cache rather than making an additional API call.

### Infinite Scroll
Both the main and history pages utilize infinite scroll to load more images as the user scrolls down, enhancing user experience by providing a seamless image loading.

### Modal Image Details
Clicking on any image will open a modal window showing detailed information about the image such as the number of downloads, views, and likes.

### Prerequisites
Before you can run this project, you'll need to have the following installed:
- Node.js (preferably the latest LTS version)
- npm (comes with Node.js)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
