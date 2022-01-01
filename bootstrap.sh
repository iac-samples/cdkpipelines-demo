#!/bin/bash
npx cdk bootstrap \
  --profile default \
  --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
  aws://$CDK_DEFAULT_ACCOUNT/$CDK_DEFAULT_REGION
