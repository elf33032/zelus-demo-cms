'use strict';

/**
 * zelus-admin service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zelus-admin.zelus-admin');
