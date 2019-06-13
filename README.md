- [User]
  <p><strong>GET</strong>    api/user</p>
  <p><strong>POST</strong>   api/signup</p>
  <p><strong>POST</strong>   api/login</p>
  <p><strong>POST</strong>   api/user/:user_id/follow     <strong>TYPE</strong> -> <strong>TOGGLE</strong></p> 
  <p><strong>PATCH</strong>  api/user</p>
  <p><strong>DELETE</strong> api/user</p>

* [Tweet]
  <p><strong>GET</strong>    api/tweet/:user_id/:page?</p>
  <p><strong>GET</strong>    api/tweet/:user_id/following/:page</p>
  <p><strong>POST</strong>   api/tweet</p>
  <p><strong>POST</strong>   api/tweet/:tweet_id/like     <strong>TYPE</strong> -> <strong>TOGGLE</strong></p>
  <p><strong>POST</strong>   api/tweet/:tweet_id/comment     <strong>TYPE</strong> -> <strong>TOGGLE</strong></p>
  <p><strong>POST</strong>   api/tweet/:tweet_id/retweet     <strong>TYPE</strong> -> <strong>TOGGLE</strong></p>
  <p><strong>DELETE</strong> api/tweet/:tweet_id</p>
