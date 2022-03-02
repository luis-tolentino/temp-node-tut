const { readFile, writeFile } = require('fs');
console.log("start");

readFile('./content/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  readFile('./content/second.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile('./content/result-async.txt', `here is the new result: ${first}, ${second}`, { flag: 'a' }, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("done with this task");
    });
  });

});
console.log('starting next task');