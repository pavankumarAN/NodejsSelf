console.log('Starting app');
const fs =  require('fs');
const os = require('os');
//getting user information
const user = os.userInfo();
console.log(user);
//getting the file modules
fs.appendFileSync('userInfo.txt',`Hai ${user.username} welcome to the nodejs course. Your directory is ${user.homedir}`); 
