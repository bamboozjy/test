//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
<<<<<<< .merge_file_gTNPc6
    logs: [121111345]
=======
    logs: ['1232vcvbn1345']
>>>>>>> .merge_file_GuVoix
  },
  onLoad: function () {
    console.log('1vedw23')
    this.setData({
<<<<<<< .merge_file_gTNPc6
      logs: (wx.getStorageSync('logswe')).map(log => {
        conosle.log('nihac o13')
        return util.formatTime(new Date(loesdg))
=======
      logs: (wx.getStorageSync('logsqq')).map(log => {
        conosle.log('ni34253t hao')
        return util.formatTime(new Date(log))
>>>>>>> .merge_file_GuVoix
      })
    })
  }
})
