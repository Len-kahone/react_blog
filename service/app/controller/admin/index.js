'use strict';

const Controler = require('egg').Controller;


class Main extends Controler {

  async index() {
    this.ctx.body = 'hi world';
  }
  async checkLogin() {
    const { userName, password } = this.ctx.request.body;
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
    this.ctx.body = {
      msg: '登录成功',
      code: 0,
    };
  }

}

module.exports = Main;
