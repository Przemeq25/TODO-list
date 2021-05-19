## Config

The application on startup downloads the user's notes with the id placed in the config.js file.
If todos list is empty, or function 'Add todo' return error 'User don't exist' - then change userId in config.js file.
This field is assigned permanently, only for the purposes of data fetch, so the registration has not been implemented.
Additionally, API data is removed / changed, which results is this error.

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
