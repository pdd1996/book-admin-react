import { Breadcrumb, Layout as AntdLayout, Menu, MenuProps, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image'
import styles from './index.module.css';



const { Header, Content, Sider } = AntdLayout;

const ITEMS = [
  {
    label: "图书管理",
    key: "book",

    children: [
      { label: "图书列表", key: "/book" },
      { label: "图书添加", key: "/book/add" }, 
    ]
  },
  {
    label: "借阅管理",
    key: "borrow",

    children: [
      { label: "借阅列表", key: "/borrow" },
      { label: "借阅添加", key: "/borrow/add" }, 
    ]
  },
  {
    label: "分类管理",
    key: "category",

    children: [
      { label: "分类列表", key: "/category" },
      { label: "分类添加", key: "/category/add" }, 
    ]
  },
  {
    label: "用户管理",
    key: "user",

    children: [
      { label: "用户列表", key: "/user" },
      { label: "用户添加", key: "/user/add" }, 
    ]
  }
];

const USER_ITEMS = [
  {
    label: '用户中心',
    key: '1',
  },
  {
    label: '登出',
    key: '2',
  },
];

export function Layout({ children }) {
  const router = useRouter();
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    router.push(e.key);
  };

  return (
    <AntdLayout>
      <Header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.svg" width={30} height={30} alt='logo' />
          <span>图书馆管理系统</span>
          <span className={styles.user}>
            <Dropdown menu={{ items: USER_ITEMS }}>
              <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    用户名
                    <DownOutlined />
                  </Space>
              </a>
            </Dropdown>
          </span>
      
        </div>
      </Header>
      <AntdLayout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['book']}
            defaultOpenKeys={['book']}
            style={{ height: '100%', borderRight: 0 }}
            items={ITEMS}
            onClick={handleMenuClick}
          />
        </Sider>
        <AntdLayout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
            {children}
          </Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  );
}