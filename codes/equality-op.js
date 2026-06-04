// Normal code
//output = 100100
function canClaimBonus(bonusAmount) {
    if (bonusAmount == 100) {
        return  bonusAmount+100;
    }
}
console.log(canClaimBonus("100"));
//Optimize code 
//solution = it also check type as well with value so it will not do string concatenation it will do number addition
//output = 200
function canClaimBonus(bonusAmount) {
    if (bonusAmount === 100) {
        return  bonusAmount+100;
    }
    else return "something went wrong"
}
console.log(canClaimBonus(100));

// Problem :- 
// when we check the value with == then it does type coerciosn which generates problem like string concatenation which is very big problem while handling wallet amount
// Type coercion risk.
// This value may come from APIs, DB queries, cache, or third-party services.
// Using == can lead to unexpected truthy matches and business logic failures.
// Validate the type at the boundary and use strict equality (===) for predictable behavior.
//=============================================================
