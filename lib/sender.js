'use strict';

const aws = require('aws-sdk');
const env = require('./environment');

const QUEUE_URL = env.sqs.queueUrl;

// AWS Configuration
aws.config.update(env.aws);

// SQS 객체 생성
const sqs = new aws.SQS(env.sqs.apiVersion);

const PARAMS = {
  QueueUrl: QUEUE_URL,
  MessageBody: 'Hello',
  DelaySeconds: 0,
};

sqs.sendMessage(PARAMS).promise()
  .then(() => { console.log('Message 전송 성공'); })
  .catch(error => { console.error(error); });

