import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = { onAdd: (category: ICategory) => void };

const AddCategory = (props: Props) => {
  const navigate = useNavigate();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const onFinish = (value: any) => {
    props.onAdd(value);
    navigate('/admin/categories');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo);
  };
  return (
    <>
      <h1 className='text-black text-4xl mb-5'>Thêm mới</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        // disabled={componentDisabled}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label='Name' name='name'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>Thêm mới</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCategory;
