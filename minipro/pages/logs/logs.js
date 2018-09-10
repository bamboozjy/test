//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [121111345]
  },
  onLoad: function () {
    console.log('1vedw23')
    this.setData({
      logs: (wx.getStorageSync('logswe')).map(log => {
        conosle.log('nihac o13')
        return util.formatTime(new Date(loesdg))
      })
    })
  }
})
