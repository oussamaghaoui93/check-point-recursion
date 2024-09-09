//Decision Making (if-else and switch):
//1. Leap Year Checker
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Test
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

//2. Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else {
        return "$20";
    }
}

// Test
console.log(getTicketPrice(10));
console.log(getTicketPrice(15));
console.log(getTicketPrice(25));

//3. Weather Clothing Adviser
function clothingAdviser(temperature, isRaining) {
    if (temperature < 10) {
        if (isRaining) {
            return "Wear a heavy jacket and carry an umbrella.";
        } else {
            return "Wear a heavy jacket.";
        }
    } else if (temperature >= 10 && temperature < 20) {
        if (isRaining) {
            return "Wear a jacket and carry an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "Wear a t-shirt and carry an umbrella.";
        } else {
            return "Wear a t-shirt.";
        }
    }
}

// Test
console.log(clothingAdviser(5, true));
console.log(clothingAdviser(15, false));
console.log(clothingAdviser(25, true));

