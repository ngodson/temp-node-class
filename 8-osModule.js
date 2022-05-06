const os = require('os');
const osGet = os.uptime();


const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}


console.log(currentOs);