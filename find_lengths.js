// Find lengths of each element in array.

const total = (acc, item) => acc + item.length

const lengths = ['Milo', 'Ovaltine'].scan(total, 0)
console.log(lengths) 
