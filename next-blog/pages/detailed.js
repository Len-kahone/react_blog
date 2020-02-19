import React, { useState } from 'react';
import Head from 'next/head';
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd';
import axios from 'axios'

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import '../public/style/pages/detailed.css';
import ReactMarkdown from "react-markdown"
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import {getArticleById} from '../api/index'

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
const Detailed = (props) => {
 const renderer = new marked.Renderer();

 marked.setOptions({
   renderer: renderer,
   gfm: true,
   pedantic: false,
   sanitize: false,
   tables: true,
   breaks: false,
   smartLists: true,
   smartypants: false,
   highlight: function(code) {
     return hljs.highlightAuto(code).value;
   }
 });

 let html = marked(props.article_content); 
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                {props.title}
              </div>

              <div className="list-icon center">
                <span>
                  <Icon type="calendar" /> {props.addTime}
                </span>
                <span>
                  <Icon type="folder" /> {props.typeName}
                </span>
                <span>
                  <Icon type="fire" /> {props.view_count}
                </span>
              </div>

              <div className="detailed-content"
                dangerouslySetInnerHTML={{__html:html}}
              ></div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
Detailed.getInitialProps=async (ctx)=>{
  let {id} =ctx.query
  if(id){
    
      return await getArticleById(id);
  }
  return []
}
export default Detailed;
