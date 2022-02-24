### homework 19

- Use Serverless framework to create lambda function with http post event
- In the resources section, create SNS topic with email subscription

The lambda function should send request body message to the SNS topic. As a result, the message should be received as a mail message in the subscribed email address.

---


To publish a message, use:

```bash
sls invoke -f publish --data '{"body":{"topicArn":"arn:aws:sns:us-east-1:XXXXXXXXXX:Mentorship","message":"Hello from teh cloud!"}}'
```
