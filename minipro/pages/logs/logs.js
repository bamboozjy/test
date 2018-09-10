//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [12111134522222]
  },
  onLoad: function () {
    console.log('1vedw23')
    this.setData({
      logs: (wx.getStorageSync('logsqq')).map(log => {
        conosle.log('ni34253t2222222hao')
        return util.formatTime(new Date(log))
      })
    })
  }
})
