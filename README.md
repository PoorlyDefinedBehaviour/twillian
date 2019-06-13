# User

<p><strong>GET</strong> api/user</p> 
<p><strong>POST</strong> api/signup</p> 
<p><strong>POST</strong> api/login

<p><strong>POST</strong> api/user/:user_id/follow <strong>TYPE</strong> -> <strong>TOGGLE</strong>
<p><strong>PATCH</strong> api/user
<p><strong>DELETE</strong> api/user

# Tweet

<p><strong>GET</strong> api/tweet/:user_id/:page?
 <p><strong>GET</strong> api/tweet/:user_id/following/:page
 <p><strong>POST</strong> api/tweet
 <p><strong>POST</strong> api/tweet/:tweet_id/like <strong>TYPE</strong> -> <strong>TOGGLE</strong>
 <p><strong>POST</strong> api/tweet/:tweet_id/comment <strong>TYPE</strong> -> <strong>TOGGLE</strong>
 <p><strong>POST</strong> api/tweet/:tweet_id/retweet <strong>TYPE</strong> -> <strong>TOGGLE</strong>
 <p><strong>DELETE</strong> api/tweet/:tweet_id

# Image

 <p><strong>POST</strong> api/image
 <p><strong>DELETE</strong> api/image/:image_id</p
