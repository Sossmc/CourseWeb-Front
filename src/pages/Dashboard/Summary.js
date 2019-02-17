import styles from './Summary.less';
import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import Link from 'umi/link';
import { Row, Col, Card, List, Avatar } from 'antd';

import { Radar } from '@/components/Charts';
import EditableLinkGroup from '@/components/EditableLinkGroup';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ user, project, activities, chart, loading }) => ({
  currentUser: user.currentUser,
  project,
  activities,
  chart,
  currentUserLoading: loading.effects['user/fetchCurrent'],
  projectLoading: loading.effects['project/fetchNotice'],
  activitiesLoading: loading.effects['activities/fetchList'],
}))

class Summary extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent',
    });
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'activities/fetchList',
    });
    dispatch({
      type: 'chart/fetch',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  renderActivities() {
    const {
      activities: { list },
    } = this.props;
    return list.map(item => {
      const events = item.template.split(/@\{([^{}]*)\}/gi).map(key => {
        if (item[key]) {
          return (
            <a href={item[key].link} key={item[key].name}>
              {item[key].name}
            </a>
          );
        }
        return key;
      });
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={
              <span>
                <a className={styles.username}>{item.user.name}</a>
                &nbsp;
                <span className={styles.event}>{events}</span>
              </span>
            }
            description={
              <span className={styles.datetime} title={item.updatedAt}>
                {moment(item.updatedAt).fromNow()}
              </span>
            }
          />
        </List.Item>
      );
    });
  }

  render() {
    const {
      currentUser,
      currentUserLoading,
      projectLoading,
      activitiesLoading,
    } = this.props;

    const pageHeaderContent =
      currentUser && Object.keys(currentUser).length ? (
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar size="large" src={currentUser.avatar} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              欢迎回来，
              {currentUser.name}
              ，祝你开心每一天！
            </div>
            <div>
              {currentUser.title} |{currentUser.group}
            </div>
          </div>
        </div>
      ) : null;

    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>课程数</p>
          <p>3</p>
        </div>
        <div className={styles.statItem}>
          <p>总课程数</p>
          <p>9</p>
        </div>
      </div>
    );

    return (
      <PageHeaderWrapper
        loading={currentUserLoading}
        content={pageHeaderContent}
        extraContent={extraContent}
      >
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title="进行中的课程"
              bordered={false}
              extra={<Link to="/">全部课程</Link>}
              loading={projectLoading}
              bodyStyle={{ padding: 0 }}
            >
            <Card.Grid className={styles.projectGrid}>
              <Card bodyStyle={{ padding: 0 }} bordered={false}>
                <Card.Meta
                  title={
                    <div className={styles.cardTitle}>
                      <Avatar size="small" src="http://101.132.135.132/asset/logo/xu.png" />
                      <Link to="/profile/main">软件需求工程</Link>
                    </div>
                  }
                  description="教师：邢卫 林海"
                />
                
                <div className={styles.projectItemContent}>
                  <Link to="/">详情</Link>
                </div>
              </Card>
            </Card.Grid>
            <Card.Grid className={styles.projectGrid}>
              <Card bodyStyle={{ padding: 0 }} bordered={false}>
                <Card.Meta
                  title={
                    <div className={styles.cardTitle}>
                      <Avatar size="small" src="http://101.132.135.132/asset/logo/guan.png" />
                      <Link to="/">软件工程管理</Link>
                    </div>
                  }
                  description="教师：金波"
                />
                
                <div className={styles.projectItemContent}>
                  <Link to="/">详情</Link>
                </div>
              </Card>
            </Card.Grid>
            <Card.Grid className={styles.projectGrid}>
              <Card bodyStyle={{ padding: 0 }} bordered={false}>
                <Card.Meta
                  title={
                    <div className={styles.cardTitle}>
                      <Avatar size="small" src="http://101.132.135.132/asset/logo/ce.png" />
                      <Link to="/">软件质量测试与保障</Link>
                    </div>
                  }
                  description="教师：胡兰青 Joe 赵晓琼 "
                />
                
                <div className={styles.projectItemContent}>
                  <Link to="/">详情</Link>
                </div>
              </Card>
            </Card.Grid>
            </Card>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title="动态"
              loading={activitiesLoading}
            >
              <List loading={activitiesLoading} size="large">
                <div className={styles.activitiesList}>{this.renderActivities()}</div>
              </List>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
              bordered={false}
              title="相关链接"
              loading={projectLoading}
            >
              <div className={styles.members}>
                <Row gutter={48}>
                    <Col span={12}>
                    <a href="http://zupo.zju.edu.cn/">
                        <Avatar src="http://101.132.135.132/asset/logo/ban.png" size="small" />
                        <span className={styles.member}>浙大办公网</span>
                    </a>
                    </Col>
                    <Col span={12}>
                      <a href="http://jwbinfosys.zju.edu.cn/default2.aspx">
                        <Avatar src="http://101.132.135.132/asset/logo/cc98.png" size="small" />
                        <span className={styles.member}>浙江大学教务管理系统</span>
                      </a>
                    </Col>
                    <Col span={12}>
                      <a href="http://bksy.zju.edu.cn/office/">
                        <Avatar src="http://101.132.135.132/asset/logo/ben.png" size="small" />
                        <span className={styles.member}>本科办公网</span>
                      </a>
                    </Col>
                    <Col span={12}>
                      <a href="http://cspo.zju.edu.cn/index.php">
                        <Avatar src="http://101.132.135.132/asset/logo/ji.png" size="small" />
                        <span className={styles.member}>计算机学院</span>
                      </a>
                    </Col>
                    <Col span={12}>
                      <a href="http://libweb.zju.edu.cn/libweb/">
                        <Avatar src="http://101.132.135.132/asset/logo/lib.png" size="small" />
                        <span className={styles.member}>浙大图书馆</span>
                      </a>
                    </Col>
                    <Col span={12}>
                      <a href="http://www.press.zju.edu.cn/default.html">
                        <Avatar src="http://101.132.135.132/asset/logo/chu.png" size="small" />
                        <span className={styles.member}>浙大出版社</span>
                      </a>
                    </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Summary;

