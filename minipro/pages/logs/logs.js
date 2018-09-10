//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [1211113451111]
  },
  onLoad: function () {
    console.log('1vedw2311111')
    this.setData({
      logs: (wx.getStorageSync('logsqq')).map(log => {
        conosle.log('ni34253t111111111hao')
        return util.formatTime(new Date(log))
      })
    })
  }
})
