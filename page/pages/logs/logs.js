//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('test2');
    this.setData({
      logs: (wx.getStorageSync('logs') || ['']).map(log => {
        conosle.log('nihaoba')
        return util.formatTime(new Date(log))
      })
    })
  }
})
