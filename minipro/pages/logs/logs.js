//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: ['1232vcvbn1345']
  },
  onLoad: function () {
    console.log(123)
    this.setData({
      logs: (wx.getStorageSync('logsqq')).map(log => {
        conosle.log('ni34253t hao')
        return util.formatTime(new Date(log))
      })
    })
  }
})
