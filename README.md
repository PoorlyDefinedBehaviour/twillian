- [User]
  <p><strong>GET</strong>    /user</p>
  <p><strong>POST</strong>   /signup</p>
  <p><strong>POST</strong>   /login</p>
  <p><strong>POST</strong>   /user/:user_id/follow</p>
  <p><strong>PATCH</strong>  /user</p>
  <p><strong>DELETE</strong> /user</p>

* [Tweet]
  <p><strong>GET</strong>    /tweet/:user_id/:page?</p>
  <p><strong>GET</strong>    /tweet/:user_id/following:page</p>
  <p><strong>POST</strong>   /tweet</p>
  <p><strong>POST</strong>   /tweet/:tweet_id/like</p>
  <p><strong>POST</strong>   /tweet/:tweet_id/comment</p>
  <p><strong>POST</strong>   /tweet/:tweet_id/retweet</p>
  <p><strong>DELETE</strong> /tweet/:tweet_id</p>
