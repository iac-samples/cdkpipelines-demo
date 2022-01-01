#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipelines-demo-pipeline-stack';

var defaultAccount = process.env.CDK_DEFAULT_ACCOUNT;
var defaultRegion = process.env.CDK_DEFAULT_REGION;

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: defaultAccount, region: defaultRegion },
});

app.synth();
