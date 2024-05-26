function displayInfo(name, age, country) {
    if (country === void 0) { country = "USA"; }
    return name + ", " + (age ? age : "unknown age") + ", from " + country;
}
console.log(displayInfo("Alice", 30));
console.log(displayInfo("Bob", undefined, "Canada"));
console.log(displayInfo("Charlie", 25, "UK"));
