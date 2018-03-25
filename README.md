# Tweet search

Simple react native app that allows you to search for tweets.

Run the live-reload server with `npm start` this will open your default browser at http://localhost:3000

Create a new app on https://dev.twitter.com/ and record the consumer key and secret in a `config.json` file somewhere.
This file should containing at least the following keys:

```
{
  "consumerKey": "<paste consumer key here>",
  "consumerSecret": "<paste consumer secret here>"
}
```

Install `twitter-proxy` this handles the oauth twitter api requests and simplifies browser requests to avoid the need for a dedicated server.
Start the twitter proxy referencing the `config.json` file you created earlier. You can now make proxied api requests from http://localhost:7890/1.1/search/tweets.json?q=<your query here>

```
npm install -g twitter-proxy
twitter-proxy ./config.json
```

The initial project scaffold code was generated with create-react-app, the auto-generated documentation below describes this project structure and how to make changes.

## Contribute


Feel free to contribute some code that can improve the looks or functionality of this demo app.

## Credits

Credits go to Chris McDonald for the [original web version](https://github.com/chrismcband/tweet-search) and his video demo on [Async in Redux](https://www.youtube.com/watch?v=9UZla3uIo3A)
