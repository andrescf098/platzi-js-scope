function createPetList(){
    let petList = []
    function innerPetList(pet = ''){
        petList.push(pet);
        return petList;
    }
    return innerPetList;
}

const myPetList = createPetList();
myPetList("michi");

console.log(myPetList("firulais"));
