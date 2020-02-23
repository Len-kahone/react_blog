'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/index', controller.admin.index.index);
  router.post('/admin/login', controller.admin.index.checkLogin);


};

