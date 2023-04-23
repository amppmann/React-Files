function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning is in process..");
    }
}


var houseKeeper1 = new HouseKeeper(12,"Jane",["bathroom","toilet"]);
console.log(houseKeeper1);