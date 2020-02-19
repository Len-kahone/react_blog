import React, { useEffect, useState } from 'react';
import '../public/style/components/header.css';
import { Row, Col, Menu, Icon, Affix } from 'antd';
import { getTypeList } from '../api';
import Route from 'next/router'

const Header = props => {
  const [typeList, setTypeList] = useState([]);
  useEffect(() => {
    async function getList() {
      let res = await getTypeList();
      setTypeList(res.data);
    }
    getList();
  }, []);
 function handleClick(e){
   
   if(e.key==0){
     
     Route.push('/')
   }else{
     console.log(e.key);
      Route.push('/list?id='+e.key );
   }
 }
  return (
    <Affix offsetTop={0}>
      <div className="header">
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">kahone</span>
            <span className="header-text">专注前端开发</span>
          </Col>
          <Col xs={0} sm={0} md={14} lg={10} xl={8}>
            <Menu mode="horizontal" onClick={handleClick}>
              <Menu.Item key={0}>
                <Icon type="home" />
                首页
              </Menu.Item>

              {typeList.map(item => {
                return (
                  <Menu.Item key={item.id}>
                    <Icon type={item.icon} />
                    {item.typeName}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Col>
        </Row>
      </div>
    </Affix>
  );
};

export default Header;
