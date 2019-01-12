import React, { Component } from 'react';
import { Card,Radio,Button} from 'antd';
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
export default class ListStuden extends Component {
  constructor(props) {
    super(props);
  

    this.state = {
      cardList: [
        {
          id: 1, 
          T: '软件工程辅方法二非凡哥？',
          A: '行爱国福蛋糕师', B: '发发发生嘎嘎是', C: '阿gas的gas搭嘎申达股份', D: '阿gas的gas大V发设身处地',
        },
        {
          id: 2,
          T: '发送到发大水GV从不存在虚？',
          A: '挨个发涣发大号', B: '按时发啥地方在', C: '发送的他个人图', D: '爱人肺癌GV绕过发文',
        },
        {
          id: 3,
          T: '安慰规范vase发违法违法？',
          A: '未发生发我分', B: '法尔发色发色发色发', C: '分阿萨是对方分我去发斯蒂芬', D: '法方法 而非安放 阿道夫',
        },
        {
          id: 4,
          T: '阿法第三方安放vas发到发到？',
          A: '阿斯顿发斯蒂芬大师傅', B: '啊发生大幅度发送的', C: '按时发大水发违法', D: '阿萨德 分是冬虫夏草v',
        },
        {
          id: 5,
          T: '阿达死哦考虑金坷垃了接口看？',
          A: 'iojklgmklv发送人分 啊 ', B: '阿萨德发挥就看见客家人', C: '爱如风何况居然还罚饿分开了房', D: '阿斯顿发放你泥头分',
        },
        {
          id: 6,
          T: '昂贵看了看考虑看了几份啊',
          A: '发模块里 是，。DMV拉开分分', B: '啊你看了吗，你，敷面膜啊，吗 奥秘法', C: '啊你们，吗，分吗， 吗，额啊', D: '爱发科金坷垃飞机',
        },
        {
          id: 7,
          T: '阿法士大夫算法 发顺风车v',
          A: '啊发大水从V型从吧分 ', B: '安放撒旦法是大法擦啊', C: '阿道夫阿萨德', D: ' 大发送到安放阿斯蒂芬阿萨德',
        },
      ],
    
    }
  }
  
  render() {
    return (
      <Card>
        <h2> 作业1</h2>
        <p> </p>
        {
          this.state.cardList.map(card => {
            return (
              <Card>
                <div>
                  <h3>{card.T}</h3>
                </div>
                <RadioGroup>
                  <Radio value={1}>A {card.A}</Radio>
                  <Radio value={2}>B {card.B}</Radio>
                  <Radio value={3}>C {card.C}</Radio>
                  <Radio value={4}>D {card.D}</Radio>
                </RadioGroup>
              </Card>
            );
          })
        }
        <div sytle={{border:10,margin:"auto"}}>
          <p />
          <ButtonGroup style={{margin:"0 auto"}}>
            <Button disabled>上一套</Button>&nbsp;&nbsp;
            <Button disabled>提交</Button>&nbsp;&nbsp;
            <Button disabled>下一套</Button>&nbsp;&nbsp;
          </ButtonGroup>
        </div>
      </Card>
    );
  }
}