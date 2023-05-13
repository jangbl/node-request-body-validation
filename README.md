# Node request body validation

This repository contains sample code on how to perform request body validation with the Node.js [express](https://expressjs.com/) framework and  [yup](https://github.com/jquense/yup)

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

This repository is part of the [Request body validation in Node](https://www.youtube.com/playlist?list=PL1Nml43UBm6dM110xcNUvdYgbQ3cnIBJm) tutorial series provided by [productioncoder.com](https://productioncoder.com/).

[![Request body validation in Node](images/node-request-body-validation.png)](https://www.youtube.com/playlist?list=PL1Nml43UBm6dM110xcNUvdYgbQ3cnIBJm)

For updates, please reach out to [@_jgoebel](https://twitter.com/_jgoebel) on Twitter.

# How to run this application

## Running the project

Make sure to install the dependencies with `npm`

```
npm install
```

You can then run the project by executing

```
npm run dev
```

## API

### POST /dev

Expected payload

```
{
    "email": "john@example.com",
    "firstName": "John",
    "dob": "12-31-1950",
    "countryCode": "US"
}
```

The server will return a `400` bad request error if the request body does not conform to the expected DTO (data transfer object).

Please check out the `./dto` directory to learn more about the expected request body.
