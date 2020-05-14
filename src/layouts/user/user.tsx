import React from 'react';
import styles from './user.less';
import LoginForm from '@/pages/Login/login';
import {Row, Col } from 'antd';
import { Router } from 'umi';

export default ({children}) => {
  console.log(children)
  return (
    <div>
      <Row className ={styles.userPage}>
        <Col className ={styles.userForm}>
          {children}
        </Col>
        <Col  className = {styles.userContent}>
          <div className ={styles.background}></div>
        </Col>
      </Row>

    </div>
  );
};
