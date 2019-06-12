- [User]

  <h1>GET</h1>    /user
  <h1>POST</h1>   /signup
  <h1>POST</h1>   /login
  <h1>POST</h1>   /user/:id/follow
  <h1>PATCH</h1>  /user
  <h1>DELETE</h1> /user

* [Tweet]
  <h1>GET</h1>    /tweet/:user_id/:page?
  <h1>GET</h1>    /tweet/:user_id/following:page
  <h1>POST</h1>   /tweet
  <h1>POST</h1>   /tweet/:tweet_id/like
  <h1>POST</h1>   /tweet/:tweet_id/comment
  <h1>POST</h1>   /tweet/:tweet_id/retweet
  <h1>DELETE</h1> /tweet/:tweet_id
