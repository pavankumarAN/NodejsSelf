var getUser = (id, callback) =>{
    var person = {
        id : 31,
        name : "Pavan"
    }
    callback(person);
};

getUser(31, (userObj) => {
console.log(userObj);
});