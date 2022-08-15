// Update a list with running total in each iteration of a for loop.

const total = (acc, item) => acc + item.length

const lengths = ['milo', 'ovaltine'].scan(total, 0)
console.log(lengths) //[0, 4, 14]
