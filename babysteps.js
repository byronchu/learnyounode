
var i = 2
var result = 0
for ( i ; i < process.argv.length ; i++) {
  result += Number(process.argv[i])
  // Number() converts sting to number
}
console.log(result)
