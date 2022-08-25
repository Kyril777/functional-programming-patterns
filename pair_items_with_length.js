// Convert list to map and pair with its length value.

const items = ['mercy', 'points', 'hospital']

const paired = pair.mash(item => [item, item.length])
console.log(paired) 



// Another method.

const alsoPaired = items.map(item => [item, item.length]).mash()
console.log(alsoPaired) 
