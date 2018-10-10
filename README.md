# Tweet search

Simple react native app that allows you to search for tweets.

## Running


1. Create your local twitter server:

Create a new app on https://dev.twitter.com/ and record the consumer key and secret in a `twitter-config.json` file somewhere.
This file should containing at least the following keys:

```
{
  "consumerKey": "<paste consumer key here>",
  "consumerSecret": "<paste consumer secret here>"
}
```

Install `twitter-proxy` npm package. This handles the oauth twitter api requests and simplifies browser requests to avoid the need for a dedicated server.
Start the twitter proxy referencing the `config.json` file you created earlier. You can now make proxied api requests from http://localhost:7890/1.1/search/tweets.json?q=<your query here>

```
yarn global add twitter-proxy
twitter-proxy twitter-config.json
```

2. Clone this project
```
git clone git@github.com:nairobijs/react-native-tweets.git
```

3. Install dependencies with yarn or npm install
```
yarn
```

4. Connect your android device to your machine via USB

5. Open this link on Google Chrome and forward port 7890 traffic to localhost:7890 on your android device

```
chrome://inspect/#devices
```

6. Run the project
```
react-native run-android
```



## Contribute


Feel free to contribute some code that can improve the looks or functionality of this demo app.
#### Suggestions:
```
+ Loading state button
+ Pull down to refresh current query
+ Pull down to retry failed searches (network request)
+ Display tweep - (tweet account holder) name and image
+ Display tweet uploaded image
+ Display tweet stats - retweets, favourites
+ Favorite action
+ Retweet action
+ Clear tags
+ Tests with Jest
```

## Credits

Credits go to Chris McDonald for the [original web version](https://github.com/chrismcband/tweet-search) and his video demo on [Async in Redux](https://www.youtube.com/watch?v=9UZla3uIo3A)


The initial project scaffold code was generated with create-react-app.

