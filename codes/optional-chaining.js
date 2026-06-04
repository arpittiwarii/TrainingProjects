// Junior Code
function getCity(user) {
    return user.address.city;
}

console.log(getCity({}));

// Output: TypeError
// Production Impact: API crashes with 500 error.
// It is possible if the field is deleted in the runtime but reading that value is hardcoded so it will crashes
// solution : use optional chaining and nullish coalescing

//Optimized code 
function getCity(user) {
    return user?.address?.city ?? "City Not Found";
}
console.log(getCity({}));

// give user friendly message instead of crashing.