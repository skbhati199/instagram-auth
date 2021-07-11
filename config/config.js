var in_client_id = '134461202039487',
		in_client_secret = '6d38c040c094b15843e60eca3a9bcf56',
		in_redirect_uri = 'https://emojizonedemo.herokuapp.com/auth/instagram/callback',
		in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=' + in_client_id + '&redirect_uri=' + in_redirect_uri + '&response_type=code&scope=user_profile'

var db_uri = 'mongodb://localhost:27017/instagram-auth';

module.exports = {

	port: process.env.PORT || 3000,
	db: {
		uri: db_uri
	},
	instagram: {
		client_id: in_client_id,
		client_secret: in_client_secret,
		auth_url: in_auth_url,
		redirect_uri: in_redirect_uri
	}

};