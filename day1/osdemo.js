var os=require("os");

console.log("Platform       :"+os.platform());
console.log("Free Meo       :"+os.freemem());
console.log("Home Directory :"+os.homedir());
console.log("Host Name      :"+os.hostname());
console.log("Total Memoery      :"+os.totalmem());
console.debug("User Info      :"+os.userInfo());
console.warn(os.userInfo());
console.error(JSON.stringify(os.userInfo()));

