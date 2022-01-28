//custom constructor function
function mobile(model, company, price)
{
    this.model = model
    this.company = company
    this.price  = price
}

// add function to every object
mobile.prototype.printInfo = function()
{
console.log(`model = {this.model}`)
console.log(`company = ${this.company}`)
console.log(`price = ${this.price}`)

}
const m1 = new mobile('nokia1200' , 'nokia', 12000)
const m2 = new mobile('samsung M21' , 'samsung', 20000)
const m3 = new mobile('Oppo 31' , 'Oppo', 30000)
const m4 = new mobile('one plus 7T' , 'One plus', 40000)

console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)

//console.log(mobile.prototype)
console.log(m1._proto_)
m1.printInfo()
m2.printInfo()
m3.printInfo()
m4.printInfo()

function person(name , address, phone ,email , age)
{
this.name = name
this.address = address
this.phone = phone
this.email = email
this.age= age
}
person.prototype.printInfo = function()
{
    console.log(`person info`)
    console.log(`name = ${this.name}`)
    console.log(`address = ${this.address}`)
    console.log(`phone = ${this.phone}`)
    console.log(`email = ${this.email}`)
    console.log(`age = ${this.age}`)
}
const p1 = new person(`person1`, `pune`, `9284339033`,`tejas@test.com`, 23)
const p2 = new person(`person2`, `goa`, `9284339030`,`tej@test.com`, 25)
p1.printInfo()
p1.canVote()