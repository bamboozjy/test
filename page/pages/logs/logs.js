//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: ['365664']
  },
  onLoad: function () {
    console.log('test2');
    this.setData({
      logs: (wx.getStorageSync('logsaa') || ['121']).map(log => {
        conosle.log('nihaobaqeg')
        return util.formatTime(new Date(logq))
      })
    })
  }
})
