'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getArticleList() {
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.addTime as addTime,' +
      'article.view_count as view_count ,' +
      '.type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id';

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
    };
  }
  async getArticleById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.addTime as addTime,' +
      'article.view_count as view_count ,' +
      'article.article_content as article_content ,' +
      '.type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id' +
      ' where article.id=' +
      id;

    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
    };
  }
  async getTypeList() {
    const { ctx } = this;
    const results = await this.app.mysql.select('type');
    ctx.body = {
      data: results,
    };
  }

  // 根据类别ID获得文章列表
  async getListById() {
    const id = this.ctx.query.id;
    console.log(this.ctx.query);
    const sql =
      'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      'article.addTime as addTime,' +
      'article.view_count as view_count ,' +
      '.type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id' +
      ' where article.type_id=' +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;
