import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://311dfaeec44c49df5810046afca65c96@o4509756583772160.ingest.us.sentry.io/4509790133092352",
  integrations:[
Sentry.mongooseIntegration()
  ],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});