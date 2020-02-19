'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/default/getArticleList', controller.home.getArticleList);
  router.get('/default/getArticleById', controller.home.getArticleById);
  router.get('/default/getTypeList', controller.home.getTypeList);
  router.get('/default/getListById', controller.home.getListById);

};

