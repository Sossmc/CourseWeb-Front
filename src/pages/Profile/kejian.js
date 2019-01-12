import React, { Component } from 'react';
import { Card } from 'antd';

export default class kejian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: ' CHAPTER 3 THE DATA LINK LAYER (数据链路层)',
          punchline: 'ftp://ftp.emnets.org/course/COMNET/2018/L6.pdf',
        },
        {
          id: 2,
          setup: 'CHAPTER 4 THE MEDIUM ACCESS CONTROL (MAC) SUBLAYER (介质访问子层)',
          punchline: 'ftp://ftp.emnets.org/course/COMNET/2018/L7.pdf',
        },
        {
          id: 3,
          setup: 'RAR 测试文件',
          punchline: 'http://101.132.135.132/logo.rar',
        },
        {
          id: 4,
          setup: 'FLV 测试文件',
          punchline: 'http://101.132.135.132/1.5 关于编程题.flv',
        },
      ],
    }
  }
  render() {
    return (
      <div>
        {
          this.state.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>课件名称：{card.setup}</div>
                <a href={card.punchline}>
                  <strong>点击下载</strong>
                </a>
              </Card>
            );
          })
        }
      </div>
    );
  }
}