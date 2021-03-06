# G Drive OAuth Image Upload

A sample implementation and use of Google OAuth 2.0 in express

deployed to [Heroku](https://g-drive-image-upload.herokuapp.com)

## Getting Started

### install

clone or download the sample application. and run

`npm install`

to install all related dependencies.

### Google Application

navigate to [Google Developer Console](https://console.developers.google.com/) to create an application for the demo. Use the client id and secret of created application in the below section to run the demo.

Refer the [Medium](https://medium.com/@code19111995/google-drive-image-upload-with-oauth-2-0-ab0d3b4a75bc) article to create application using Google Developer Console

### .env setup

create a .env file in root containing the following information

```
CLIENT_ID = "Your application client Id"
CLIENT_SECRET = "Your client secret"
REDIRECT_URL = "http://localhost:3000/api/drive/auth/oauthcallback"
```

### run

run the application using the following command

`nodemon server`

or

`node server`

## Support Links

-   [Medium](https://medium.com/@code19111995/google-drive-image-upload-with-oauth-2-0-ab0d3b4a75bc)
