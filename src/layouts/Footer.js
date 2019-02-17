import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Pro 首页',
          title: '首页',
          href: '/',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/Sossmc/Course-web_Front',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '计院',
          href: 'http://cspo.zju.edu.cn/index.php',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 软工G06小组
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
