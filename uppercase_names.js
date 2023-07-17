// Execute a map operation on our source list. Supply a callback function to map. 

const uppercaseNames = ['james', 'aurelia'].map(name => name.toUpperCase())
console.log(uppercaseNames) // ["JAMES", "AURELIA"]
