'use strict';

/**
 * curated-channel service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::curated-channel.curated-channel');
