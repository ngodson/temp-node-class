const fs = require('fs')
const file = fs.readFileSync('./content/test1.txt','utf8')
const file1 = fs.readFileSync('./content/subfolder/test.txt','utf8')

console.log(file)
console.log(file1)

const fileSync = fs.writeFileSync('./content/subfolder/test.txt', 
`This is the result: ${file , file1}`, {flag:'a'})
