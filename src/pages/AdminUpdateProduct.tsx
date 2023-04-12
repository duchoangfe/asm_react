import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Upload, message } from 'antd';
import { IProduct } from './../interfaces/product';
import TextArea from 'antd/es/input/TextArea';

interface IProps {
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
}

const AdminUpdateProduct = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | undefined>(undefined); //

  useEffect(() => {
    const currentProduct = props.products.find(
      (product: IProduct) => product._id == id
    );

    setProduct(currentProduct);
  }, [props]);

  useEffect(() => {
    if (product) {
      setFields();
    }
  }, [product]);

  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      description: product?.description,
    });
  };
  const onFinish = (values: any) => {
    props.onUpdate(values);

    navigate('/admin/products');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item label='Id' name='_id' style={{ display: 'none' }}>
          <Input />
        </Form.Item>
        <Form.Item label='Name' name='name'>
          <Input />
        </Form.Item>
        <Form.Item label='Price' name='price'>
          <InputNumber />
        </Form.Item>
        <Form.Item label='image' name='image'>
          <Input />
        </Form.Item>

        <Form.Item label='Description' name='description'>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button htmlType='submit'>Sửa</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminUpdateProduct;
