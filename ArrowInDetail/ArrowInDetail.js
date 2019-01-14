var person = {
    name : "Pavan",
/*     wish : () => {
        console.log(`Hai ${this.name}`);
    },
 */
    wish2() {
        console.log(`Hai ${this.name}`);
    }
}
//results in occurance of undefined in the output. Reason is this keyword will points to global object of the program not current.
//person.wish();

//Solution for the above problem
person.wish2();