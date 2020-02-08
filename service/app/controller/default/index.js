'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    const result = await this.app.mysql.get('blog_content', {});
    console.log(result);
    this.ctx.body = result;
  }

}

module.exports = IndexController;
