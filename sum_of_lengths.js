// Map list to a list of lengths. Pass list to reduce. Reduce runs the reducer callback. Passing accumulator and current item as params.

const total = (acc, len) => len + acc

const sumOfLengths = ['Milo', 'Ovaltine'].map(v=>v.length).reduce(total, 0)
console.log(sumOfLengths) // 12
