const john = 'john';
const peter = 'peter';
module.exports = {john, peter}


const person = {
    name: 'Bob'
}

module.exports.items = ['item1', 'item2'];
module.exports.singlePerson = person;

console.log(module);