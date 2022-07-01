'use strict';

/**
 * property-manager service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::property-manager.property-manager');
