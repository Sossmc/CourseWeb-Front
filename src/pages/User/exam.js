import React, { Component } from 'react';
import { Card, Upload, message, Button, Icon } from 'antd';

export default class exam extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Use of network commands and introduction to Wireshark ',
          punchline: '[report]',
          href: 'ftp://ftp.emnets.org/course/COMNET/2018/L6.pdf',
        },
        {
          id: 2,
          setup: 'Building IoT application with TinyLink',
          punchline: '[All in one]',
          href: 'ftp://ftp.emnets.org/course/COMNET/2018/L7.pdf',
        },
      ],
    }
  }
  render() {
    const te = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    
    return (
      <div>
        {
          this.state.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div style={{padding:5}}>实验[{card.id}]：{card.setup} &nbsp;
                  <a href={card.href}>
                    <strong>{card.punchline}</strong>
                  </a>
                </div>
                &nbsp;&nbsp;&nbsp; <Upload {...te}><Button> <Icon type="upload" /> Click to Upload</Button></Upload>
              </Card>
            );
          })
        }
      </div>
    );
  }
}