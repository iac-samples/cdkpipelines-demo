# Welcome to the CI/CD CDK TypeScript project!

This is a sample project for TypeScript development with CDK.

This sample code is explained in the following AWS blog.

https://aws.amazon.com/blogs/developer/cdk-pipelines-continuous-delivery-for-aws-cdk-applications/

Intall nodes modules as explained in the AWS blog.

##### Install dependencies for the CDK application

```npm install @aws-cdk/aws-apigateway @aws-cdk/aws-lambda @types/aws-lambda```

##### Install CDK pipelines

```npm install @aws-cdk/pipelines```

##### Commit this code repo to GitHub and refer it in the code.

Class **CdkpipelinesDemoPipelineStack**

##### Create a PAT and store it as explained in the AWS blog.

##### Export required environment variables as explained in the AWS blog.

Example:

```CDK_DEFAULT_ACCOUNT=123456789012```

```CDK_DEFAULT_REGION=us-east-1```

##### Deploy the bootstrap stack using bootstrap.sh

```./bootstrap.sh```

##### Deploy the pipeline using deploy-pipeline.sh

```./deploy-pipeline.sh```

##### You can delete the pipeline uising undeploy-pipeline.sh

```./undeploy-pipeline.sh```

---

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
