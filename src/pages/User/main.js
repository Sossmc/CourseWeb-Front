import styles from './main.css';
import { Table,Card } from 'antd';
export default function() {
  const dataSource1 = [
    {
      key: '1',
      name: '课程名',
      age: '软件需求工程'
    },
    {
      key: '2',
      name: '课程号',
      age: 'AVAA1100',
    },
    {
      key: '3',
      name: '授课教师',
      age: '邢卫 林海',
    },
    {
      key: '4',
      name: '课时安排',
      age: '16周 3课时/周',
    },
    {
      key: '5',
      name: '上课地点',
      age: '永谦剧场 B102',
    },
    {
      key: '6',
      name: '使用教材',
      age: '《CMMI软件需求工程》',
    },
    {
      key: '7',
      name: '预修要求',
      age: '无',
    },
    {
      key: '8',
      name: '课程简介',
      age: '软件需求包括功能性需求及非功能性需求...',
    },
    {
      key: '9',
      name: '考核标准',
      age: '期末考试40% 平时20% 课程报告40%',
    }
  ];
  const dataSource2 = [
    {
      key: '1',
      name: '姓名',
      age: '邢卫'
    },
    {
      key: '2',
      name: '职称',
      age: '博士 | 副教授 | 硕士生导师',
    },
    {
      key: '3',
      name: '学科',
      age: '计算机科学与技术',
    },
    {
      key: '4',
      name: '单位',
      age: '计算机科学与技术学院',
    },
    {
      key: '5',
      name: '职务',
      age: '计算机科学与技术系 主任',
    },
    {
      key: '6',
      name: '电话',
      age: '0571-87951247',
    },
    {
      key: '7',
      name: '邮箱 ',
      age: 'wxing@zju.edu.cn',
    },
    {
      key: '8',
      name: '地址',
      age: '玉泉校区 曹光彪大楼 516',
    },
    {
      key: '9',
      name: '研究方向',
      age: '· 人工智能  · 多媒体技术  · 计算机网络',
    }
  ];
  
  const column1 = [{
    title: '课程详情',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '',
    dataIndex: 'age',
    key: 'age',
  }];

  const column2 = [{
    title: '教师信息',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '',
    dataIndex: 'age',
    key: 'age',
  }];
  
  
  return (
    <div className={styles.normal}> 
      <Card key={"kc"}>
        <div>
        <h2 style={{padding:5}}>课程详情</h2>
        <Table dataSource={dataSource1} 
          pagination ={false}
          columns={column1}
        />
        </div>
      </Card>
      <Card key={"fc"}>
        <Table dataSource={dataSource2} 
            pagination ={false}
            columns={column2}
        />
      </Card>
    </div>
  );
}

