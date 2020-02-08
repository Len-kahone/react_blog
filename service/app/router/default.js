'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/getInfo', controller.default.index.index);

};

