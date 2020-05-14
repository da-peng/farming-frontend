import React ,{FC} from "react";
import styles from "./register.less";
import { Form, Input, Button ,Alert} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {ConnectProps ,StateType, Loading,connect, Link} from 'umi'

interface PageProps extends ConnectProps {
  registerState: StateType
  loading: boolean;
}


const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

//函数式组件写法， 函数式组件与dva是绝配 
//函数组件与类组件
//https://segmentfault.com/a/1190000019962867
const Register:FC<PageProps> = ({registerState,dispatch}) => {
  // console.log(111)
  // const { loginState = {} } = props;
  let {errorMsg} = registerState
  // 这里errorMsg即使没有变化  dispatch 每次都进行了 界面更新
  const onFinish = (values:any) => {
    // const {dispatch } = props;
    if (dispatch){
      dispatch({ type: 'user/login', payload: values })
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name="register"
        className="register-form"
        // onFinish={onFinish}
      >
        {errorMsg!=''?  <Alert message={errorMsg} type ='error'></Alert>:<div></div>}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="nick"
          rules={[{ required: true, message: "Please input your Nick!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Nick"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            register
          </Button>
        </Form.Item>

        <Link className={styles.register} to="/user/login">
            账号登录
        </Link>
        
      </Form>
    </div>
    
  );
};

// connect 是一个函数，绑定 State 到 View。
// mapStateToProps
//connect 方法返回的也是一个 React 组件，通常称为容器组件。因为它是原始 UI 组件的容器，即在外面包了一层 State。
export default connect(({ user,loading }: { user: StateType ,loading:Loading}) => ({
  // props : namespace
  registerState:user,
   //接收的参数是意namespace:...,
   loading: loading.effects['user/user'],
   //loading: loading.models.login,
 }))(Register);
//connect 方法传入的第一个参数是 mapStateToProps 函数，mapStateToProps 函数会返回一个对象，用于建立 State 到 Props 的映射关系。
