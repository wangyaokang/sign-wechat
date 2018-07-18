Page({
  data: {
    hasEmptyGrid: false,
    isSelected: false,
    today: new Date().getDate(),
    curMonth: new Date().getMonth() + 1,
    isShowFrom: false,
  },
  onLoad(options) {
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    this.setData({
      cur_year,
      cur_month,
      weeks_ch
    })
  },

  /**
   * 本月的日期
   */
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },

  /**
   * 当月第一周第一天
   */
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },

  /**
   * 计算具体月份前面的空格数
   */
  calculateEmptyGrids(year, month) {
    let firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },

  /**
   * 计算对应的天数
   */
  calculateDays(year, month) {
    let days = [];
    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push(i);
    }
    this.setData({
      days
    });
  },

  /**
   * 日历操作
   */
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })

    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  },

  /**
   * 是否被选中
   */
  selected(e) {
    const selectDay = e.currentTarget.dataset.selectitem;
    this.setData({
      selectDay
    })
  },

  /**
   * 
   */
  showFrom(e) {
    var showFormItem = e.currentTarget.dataset.param;
    this.setData({
      showFormItem
    });
  },

  /**
   * 编辑
   */
  goEdit() {
    wx.navigateTo({
      url: '../../pages/sign/edit/index'
    })
  },

  /**
   * 编辑
   */
  queryLocation() {
    wx.navigateTo({
      url: '../../pages/sign/location/index'
    })
  }
});
