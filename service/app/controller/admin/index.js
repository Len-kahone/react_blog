'use strict';

const Controler = require('egg').Controller;


class Main extends Controler {

  async index() {
    this.ctx.body = 'hi world';
  }
  async checkLogin() {
    const { userName, password } = this.ctx.request.body;
    const sql = `SELECT * FROM admin_user WHERE username="${userName}"  AND PASSWORD=${password}`;

    const result = await this.app.mysql.query(sql);

    if (result && result.length > 0) {
      // 登录成功,进行session缓存
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = {
        msg: '登录成功',
        code: 0,
      };
    } else {
      this.ctx.body = {
        msg: '登录失败',
        code: 1,
      };
    }

  }

}

module.exports = Main;
