import React from 'react';
import * as PropTypes from 'prop-types';
import { PageHeader as Header, Row, Col } from 'antd';


const Footer = () => (
  <section className="footer">
    it is simple footer
  </section>
);

const Page = ({ children, title, subTitle }) => (
  <>
    <Row>
      <Header title={title} subTitle={subTitle} />
    </Row>
    <Row type="flex" justify="center">
      <Col span={20}>
        <section className="content">{children}</section>
      </Col>
    </Row>
    <Row>
      <Footer />
    </Row>
  </>
);

Page.defaultProps = {
  title: '[title]',
  subTitle: '[sub title]',
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Page;
