const util = require("../../../utils/util.js");
const today = new Date();
Page({
  data: {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    classArr:['信计180506', '英语180506'],
    index: 0
  },

  onLoad: function () {
    const today_date = util.formatDate(today);
    console.log("今天的日期为：" + today_date);
    const today_time = util.formatTime(today);
    console.log("" + today_time);
    this.setData({
      today_date,
      today_time
    })
  },

  bindClassChange(e){
    this.setData({
      index: e.detail.value
    })
  },

  bindStartDateChange(e) {
    this.setData({
      startDate: e.detail.value
    })
  },

  bindStartTimeChange(e) {
    this.setData({
      startTime: e.detail.value
    })
  },

  bindEndDateChange(e) {
    this.setData({
      endDate: e.detail.value
    })
  },

  bindEndTimeChange(e) {
    this.setData({
      endTime: e.detail.value
    })
  },
});
