
  const dev = {
    STRIPE_KEY: "pk_test_2WIQLch6p18yqzMhZzb4J3LD007sh2uIj4",
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "notes-linkor"
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: "https://isiip32qg7.execute-api.ap-northeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_OG0qr5PfL",
      APP_CLIENT_ID: "5un743cc8c98jt5v5dqv4jpiqf",
      IDENTITY_POOL_ID: "ap-northeast-2:27a3305b-8ca7-47c7-9703-b28934de3255"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_2WIQLch6p18yqzMhZzb4J3LD007sh2uIj4",
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "notes-linkor"
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: "https://isiip32qg7.execute-api.ap-northeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_OG0qr5PfL",
      APP_CLIENT_ID: "5un743cc8c98jt5v5dqv4jpiqf",
      IDENTITY_POOL_ID: "ap-northeast-2:27a3305b-8ca7-47c7-9703-b28934de3255"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };