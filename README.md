### Instructions:

The tests are run using  [cypress](https://github.com/cypress-io/cypress).

### Pre-requisites

- Download the latest nodeJS from [nodeJS](https://nodejs.org/en/)

### Project Structure

- The tests are found inside ```/cypress/integration/Tests```

### Start Server

- Start the Crew App Server ```http://localhost:3000``` from the Application Solution

### Getting Started with the Test Framework

- ```npm install```
- ```npx cypress open``` OR ```npm run cypressOpen``` [to Run the tests opening the Cypress App]
- ```npm run test``` [to Run the tests as headless from Command Line] 
- ```npm run testChrome``` [to  Run the tests in Chrome Browser]
- ```npm run testFirefox``` [to  Run the tests in Firefox Browser]

### Screenshots, Videos and Report Generation

- Run the tests in the Headless mode ```npm run test```
- Screenshots are generated under ```screenshots``` folder 
- Videos are generated under ```videos``` folder
- Reports are generated under ```reports``` folder [currently HTML reports are Enabled]

### Running the Tests in docker

- ```docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:3.2.0 run``` [for Mac machine]
- ```docker run -it -v "%cd%":/e2e -w /e2e --entrypoint=cypress cypress/included:3.2.0 run``` [for Windows machine]
- App will be available on http://localhost:3000