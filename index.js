const game = "Fc24"
function receivesAFunction(game){
game();

}

function returnsANamedFunction(){
return function gamesToPlay() {
    console.log("I love fc way too much");
};
}

function returnsAnAnonymousFunction(){
return () => console.log("this is an anonymous function");
}