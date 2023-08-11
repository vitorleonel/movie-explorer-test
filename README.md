![Project preview](/.github/application-preview.gif)

## Before running locally

Make sure to have the following ports available:

- 8080 (the json-server)
- 5173 (application)

## Running locally

After cloning the repository, follow the instructions below:

1. Install the dependencies using Node.js 18 (LTS) by running the command:

```bash
npm install
```

2. Start the applicaiton:

```bash
npm run start:api
npm run start:app
```

3. Access the follwing URL:

```
http://localhost:5173
```

Note: in case you have some error accessing the above URL, try to check in your terminal the right URL. It may be changed depending on if you have that port already being used.

## Running tests locally

1. In order to run the `unit tests`, just run the following command:

```bash
npm test
```

## Some decisions I made

1. As it's a small application and I could easily handle the data, I decided to use Context API with useReducer hook;
2. I didn't handle the API request errors nor loading states, just to don't waste time at this moment. I could easily put some alerts such as SweetAlert or another elegant way to help the users and the application with the error, as well as put some placeholder skeletons to improve the UX. We could also implement some error tracking such as Sentry, in order to be aware of the errors in production;
3. I've hardcoded the API URL, but in the real world, I would extract it to another place, even because we normally need to intercept requests and responses.

## What I could improve with more time

1. Cover all unit tests scenarios, so far I didn't cover all of them;
2. Adding E2E tests to guarantee the application's behavior
3. Applying a fallback image if the movie does not have or has with error.

Thanks for the opportunity. Hope to talk to you soon.
