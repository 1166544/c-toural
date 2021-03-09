import Mock from 'mockjs';
import { MockServiceApp } from './mocks-data/MockServiceApp';
import { MockServiceH5 } from './mocks-data/MockServiceH5';
import { MockServicePC } from './mocks-data/MockServicePC';

// 注入业务 MOCKE， 只在注册使MOCK生效
new MockServiceApp().inject(Mock);
new MockServiceH5().inject(Mock);
new MockServicePC().inject(Mock);

export default Mock;
