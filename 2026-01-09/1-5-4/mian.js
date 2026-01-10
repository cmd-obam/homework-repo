import {add, sub} from './math.js';
import userProfile from './userProfile.js';

console.log(add(10, 20));
console.log(userProfile.name);
console.log(
  `${userProfile.name}(${userProfile.age})님의 포인트 합계는 ${add(100, 50)}점입니다`
);
