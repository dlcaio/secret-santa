# Secret Santa

Silly project I made last christmas for drawing secret santas in a group of people. There were quite a lot of solutions out there but I needed one that could handle more than one person with the same email,
since there were small children who don't even have email accounts participating also.

## Usage

You need a registered account on AWS, with a registered email on AWS SES for it to work. You simply put a people array inside a json file called `people.json` and export the registered email in a file called `sourceEmail.js`. The program will shuffle the provided people array, then assign a giftee for each person (santa). The santas will receive an email from the registered email telling them who their giftee is.

## Step by Step

On the project's directory:

- `npm install`
- Add people array to `people.json`
- Add registered email to `sourceEmail.js`, exporting it, like so:
  - `module.exports = "youremail@youremailprovider.com";`
- To run a test execution:
  - `node app.js`
- To run an execution for real:
  - `node app.js no-test`