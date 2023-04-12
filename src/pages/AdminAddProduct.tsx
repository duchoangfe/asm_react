import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from '../interfaces/product';
import { useNavigate } from 'react-router-dom';
interface Iprop {
  category: ICategory[];
  onAdd: (product: IProduct) => void;
}
const { TextArea } = Input;

const AdminAddProduct = (props: Iprop) => {
  const [data, setData] = useState<ICategory[]>([]);

  useEffect(() => {
    setData(props.category);
  }, [props]);
  const navigate = useNavigate();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const onFinish = (value: any) => {
    props.onAdd(value);

    navigate('/admin/products');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo);
  };

  return (
    <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
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
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Không được để trọng name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Price'
          name='price'
          rules={[{ required: true, message: 'Không được để trong price!' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label='Upload'
          name='image'
          rules={[{ required: true, message: 'Không được để trong image!' }]}
        >
          {/* <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload> */}
          <Input />
        </Form.Item>
        <Form.Item label='Description' name='description'>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label='Product Category'
          name='categoryId'
          rules={[{ type: 'string', min: 0, required: true }]}
        >
          <Select
            defaultValue=''
            style={{ width: 120 }}
            options={props.category.map((item) => ({
              value: `${item._id}`,
              label: `${item.name}`,
            }))}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>Thêm mới</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AdminAddProduct;
