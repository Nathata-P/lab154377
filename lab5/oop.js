class GP {
    constructor(bike, rider) {
        this.bike = bike
        this.rider = rider
    }
    //properties
    get bikeName() {
        return this.bike
    }

    get riderName() {
        return this.rider
    }

    drive() {
        console.log("แว้นนน")
    }

}
//object
var myGP = new GP("Asphrilia", "Marco Bezzechi")
console.log(myGP.bikeName, myGP.riderName)
myGP.drive()

var myGP2 = new GP("Ducati", "Marc Marquez")
myGP2.number = "93"
console.log(myGP2.bikeName, myGP2.riderName, myGP2.number)
myGP.drive()

