//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: ['bbbbbb'] //使用b的
  },
  onLoad: function () {
    console.log('bbbbbb');
    this.setData({
      msg: "aaaaaa",  //a和b的都保留
      msg1: "bbbbbb"
    })
  }
})
