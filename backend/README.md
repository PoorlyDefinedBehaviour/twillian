- [User]

```diff
+ this will be highlighted in green
- this will be highlighted in red
  + GET
      /user
  + POST   /signup
  + POST   /login
  + POST   /user/:user_id/follow
  + PATCH  /user
  - DELETE /user

* [Tweet]
  + GET    /tweet/:user_id/:page?
  + GET    /tweet/:user_id/following:page
  + POST   /tweet
  + POST   /tweet/:tweet_id/like
  + POST   /tweet/:tweet_id/comment
  + POST   /tweet/:tweet_id/retweet
  - DELETE /tweet/:tweet_id

```
