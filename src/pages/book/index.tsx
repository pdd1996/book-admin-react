import { Button, Col, Form, Input, Row, Select, Space, Table, TablePaginationConfig } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from './index.module.css';

const dataSource = [
  {
    key: '1',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '2',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '3',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '4',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '5',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '6',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '7',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '8',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  {
    key: '9',
    name: 'Java',
    cover: '',
    author: 'abc',
    category: 'java',
    description: '',
    stock: '',
    createTime: ''
  },
  
];

const COLUMNS = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '封面',
    dataIndex: 'cover',
    key: 'cover',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '库存',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
];

export default function Home() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    showSizeChanger: true,
    total: 0
  })
  const [total, setTotal] = useState(0)

  const handleSearchFinish = (values) => {
    console.log(values);
  }
  const handleChange = () => {

  }
  const handleSearchReset = () => {
    console.log('click')
    form.resetFields();
  }
  const handleBookEdit = () => {
    router.push('/book/edit/id')
  }
  const handleTableChange = (pagination: TablePaginationConfig) => {
    console.log(pagination)
    setPagination(pagination)
  }

  const columns = [...COLUMNS,
    {
      title: '操作',
      key: 'action',
      render: (_: any, row: any) => {
        return (
          <Space>
            <Button type="link" onClick={handleBookEdit}>编辑</Button>
            <Button type="link" danger >删除</Button>
          </Space>
        )
      }
    }
  ]

  return (
    <>
      <Form
        name="search"
        form={form}
        onFinish={handleSearchFinish}
        initialValues={{
          name: '',
          author: '',
          category: ''
        }}
      >
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name="name" label="书名">
              <Input placeholder="请输入" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="author" label="作者">
              <Input placeholder="请输入" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="category" label="分类">
              <Select
                placeholder="请选择"
                allowClear
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" className={styles.btn}>
                  搜索
                </Button>
                <Button htmlType="submit" onClick={handleSearchReset}>
                  清空
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles.tableWrap}>
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 1000 }}
          onChange={handleTableChange}
          pagination={{ ...pagination, showTotal: () => `共 ${pagination.total} 条` }}
        />
      </div>
    </>
  )
}
