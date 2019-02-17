import React, { Component } from 'react';
import { notification, Button,Card } from 'antd';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
export default class chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  handleChange = (value) => {
    this.setState({
      value,
    })
  };

  prompt = () => {
    notification.open({
      message: 'We got value:',
      description: <span dangerouslySetInnerHTML={{ __html: this.state.value }}></span>,
    });
  };
  render() {
    return (
      <div>
        <Card title="留言1">
          <p>还行吧</p>
        </Card>
        <p />
        <Card title="留言2">
          <p>哈哈</p>
        </Card>
        <p />
        <Card title="留言板">
          <ReactQuill value={this.state.value} onChange={this.handleChange} style={{height:300}}/>
          <Button type="" style={{ marginTop: 60 }} onClick={this.prompt}>发送</Button>
        </Card>
      </div>
    );
  }
}
