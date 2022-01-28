function function1()
{
    const person = {
    name: 'patu',
    age:23,
    address:'satara',
    email:'patu@test.com'
    }
    console.log(person)
    //get all properties
    const keys = Object.keys(person)
    console.log(keys)

    //itearte over keys
    for( const key of keys )
    {
        console.log(`key = ${key}, value = ${person[key]}` )
    }
}
function1()

