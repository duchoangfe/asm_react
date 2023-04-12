import { useState } from 'react';
import { Space, Table, Tag, Button, Input, Image, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { IProduct } from '../api/product';
import { message } from 'antd';

const AdminProductPage = (props) => {
  const [searchText, setSearchText] = useState('');
  const removeProduct = (id) => {
    props.Remove(id);

    message.success('Xóa Sản Phẩm Thành Công !');
  };

  const filteredData = props.products.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const data = filteredData.map((item) => {
    return {
      key: item._id,
      ...item,
    };
  });

  const columns: ColumnsType<IProduct> = [
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Giá Tiền',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (url) => <Image width={80} src={url} />,
    },
    {
      title: 'Mô Tả',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <a>{text}</a>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <Popconfirm
            placement='top'
            title='Bạn có muốn xóa không ?'
            onConfirm={() => removeProduct(record.key)}
            okText='Yes'
            cancelText='No'
          >
            <Button type='primary'> Xóa Sản Phẩm</Button>
          </Popconfirm>

          <Button type='primary'>
            <Link to={`/admin/products/${record.key}/update`}>
              Cập Nhập Sản Phẩm
            </Link>
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Input.Search
        placeholder='Tìm Kiếm'
        allowClear
        onChange={(e) => setSearchText(e.target.value)}
        style={{ width: 300, marginBottom: 16 }}
      />
      <Button type='primary'>
        <Link to={'/admin/products/add'}>Thêm Sản Phẩm</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default AdminProductPage;
