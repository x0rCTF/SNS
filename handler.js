'use strict';
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// SNS Lambda Function

exports.publish = (event, context, callback) => {
    // Create SNS service object
    const sns = new AWS.SNS();

    // Publish a simple message to specified SNS topic
    const params = {
        Message: event.body.message,
        TopicArn: event.body.topicArn
    };
    sns.publish(params, (err,data) => {
        if (err) {
            console.log('Error', err);
            callback(err, null);
        }
        else {
            console.log('Success', data);
            callback(null, data);
        }
    });
}
