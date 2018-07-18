
/**
 * 数据转换
 */
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 将日期转化成[yyyy-MM-dd]的格式
 */
function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
}

/**
 * 将时间转化成[HH:mm:dd]的格式
 */
function formatTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  return [hour, minute].map(formatNumber).join(':');
}

module.exports = {
  formatDate,
  formatTime
}