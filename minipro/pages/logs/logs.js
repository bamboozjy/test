//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [12321345]
  },
  onLoad: function () {
    console.log(123)
    this.setData({
      logs: (wx.getStorageSync('logs')).map(log => {
        conosle.log('nihao')
        return util.formatTime(new Date(log))
      })
    })
  }
})
