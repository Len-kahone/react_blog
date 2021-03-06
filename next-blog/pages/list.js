import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import { Row, Col, List, Icon,Breadcrumb } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import { getListById } from '../api';
const MyList = (props) => {
  const [mylist, setMylist] = useState(props.data)
  useEffect(()=>{
    setMylist(props.data);
  })
  return (
    <div>
      <Head>
        <title>MyList</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <Icon type="calendar" />
                   {item.addTime}
                  </span>
                  <span>
                    <Icon type="folder" />
                    {item.typeName}
                  </span>
                  <span>
                    <Icon type="fire" />
                    {item.view_count}
                  </span>
                </div>
                <div className="list-context">{item.article_content}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
MyList.getInitialProps=async (ctx)=>{
  let id=ctx.query.id
  return await getListById(id)
}
export default MyList;
