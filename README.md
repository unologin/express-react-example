# unolog·in example project

This repository contains the accompanying code to our [getting started guide](https://dashboard.unolog.in/docs/getting-started).

## Running the example

1. Follow the [getting started guide](https://dashboard.unolog.in/docs/getting-started) on creating the ```.env``` files for both server and frontend. 

server/.env
```
# fill in your API-key from the dashboard
UNOLOGIN_API_KEY=YOUR-API-KEY

# change if you like
UNOLOGIN_COOKIES_DOMAIN=example.localhost

# allows you to test locally
UNOLOGIN_DEBUG_DISABLE_SECURE=true
NODE_ENV=development
```

frontend/.env

```
# fill in your app ID from the dashboard
REACT_APP_UNOLOGIN_APPID=YOUR-APP-ID
```

2. Open two separate terminal sessions and install dependencies for the server and frontend projects. Then run ```npm start``` in both. 

```bash
$ cd server
$ npm install
$ npm start
```

```bash
$ cd frontend
$ npm install
$ BROWSER=NONE npm start
```

3. Navigate to ```http://example.localhost:3000``` in your browser