import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
  const { Meta } = Card;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {props.products.map((item) => (
          <Col span={6} key={item._id}>
            <Link to={`/products/${item._id}`}>
              <Card hoverable cover={<img alt={item.name} src={item.image} />}>
                <Meta
                  title={item.name}
                  description={
                    <>
                      <p>Giá Tiền: {item.price} VND</p>
                      <p>Mô tả sản phẩm: {item.description}</p>
                    </>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
