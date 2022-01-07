const aws = require("aws-sdk");
const unshuffledPeople = require("./people.json");
const sourceEmail = require("./sourceEmail");
const shuffleArray = require("./utils");

const [arg] = process.argv.slice(2);

const people = shuffleArray(unshuffledPeople);

for (let i = 0; i < people.length; i++) {
  const santa = people[i];
  const giftee = i === people.length - 1 ? people[0] : people[i + 1];
  const emailBody = `Hi there, ${santa.name}, you are ${giftee.name}'s secret santa`;
  if (arg !== "no-test")
    console.log(`Sending email to ${santa.email}\n\t`, emailBody);
  if (arg === "no-test") {
    new aws.SES()
      .sendEmail({
        Destination: {
          ToAddresses: [person.email],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: emailBody,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Secret Santa",
          },
        },
        Source: sourceEmail,
      })
      .promise()
      .then((data) => console.log(data));
  }
}
