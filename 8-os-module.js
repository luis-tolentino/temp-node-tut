// OS Module
const OS = require('os');

// info about current user
const user = OS.userInfo();
console.log(user);

// method returs the system uptime in seconds
console.log(`the uptime is:${OS.uptime()} seconds`);

const currentOS = {
  name: OS.type(),
  type: OS.release(),
  totalMemory: OS.totalmem(),
  freeMomory: OS.freemem(),
};
console.log(currentOS);