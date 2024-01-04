module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"), // Required
      },
      settings: {
        defaultFrom: "no-reply@thehimalayansalts.com",
        defaultReplyTo: "me@example.com",
      },
    },
  },
});
