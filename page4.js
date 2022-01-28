function function1()
{
    const person = {
        firstName: 'tejas',
        lastName: 'raut',
        address: 'satara',
        age:23,

        //method
        printInfo: function (){
       console.log('inside printInfo')
        
            console.log(this)
        },
    }
    //call object
    person.printInfo()
}
function1()