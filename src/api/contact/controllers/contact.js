"use strict";

/**
 * contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);
    const entries = await strapi.entityService.findMany("api::contact.contact");

    const latestEntry = entries.reduce((latest, current) => {
      // Check if 'current' is later than 'latest'
      return !latest || current.createdAt > latest.createdAt ? current : latest;
    }, null);

    console.log(latestEntry);
    await strapi.plugins["email"].services.email.send({
      to: latestEntry.email,
      from: "no-reply@thehimalayansalts.com",
      subject: "The Strapi Email plugin worked successfully",
      text: "Hello world!",
      html: "Hello world!",
    });

    return response;
  },
}));
