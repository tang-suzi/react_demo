import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css'
import App from './app'

moment.locale('zh-cn');


ReactDOM.render(<App />, document.getElementById('root'));