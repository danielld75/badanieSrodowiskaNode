var os = require('os');
var formatTime = require('../modules/formatTime');
function getOsInfo() {
  var type = os.type();
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime =  os.uptime();
  var userInfo = os.userInfo();

  process.stdout.write("System: " + type + "\nRelease: " + release + "\n");
  process.stdout.write(cpu + "\n");
  process.stdout.write("Uptime ~ : " + formatTime.forTime(uptime) + '\n');
  process.stdout.write(userInfo.username + " homedir: " + userInfo.homedir + '\n');
}

module.exports = {
  print: getOsInfo
};