'use strict';

module.exports = {
  // Amazon credentials
  aws: {
    region: process.env.AWS_REGION || 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
  },

  sqs: {
    apiVersion: '2012-11-05',
    queueUrl: process.env.SQS_URL
  }
};

