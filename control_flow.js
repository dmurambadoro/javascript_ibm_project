let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

//IBM JavaScript course: switch statements 
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

//IBM JavaScript practice: Ternary operator for authentication

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

//IBM JavaScript practice: Ternary operator for authentication
let userRole = "employee";
let accessLevel;

switch (userRole) {
	case "employee": accessLevel = "Full Access";
        console.log("Welcome to the all you can eat lunch!");
	    break;
	case "enrolledMember": 
		accessLevel = "Full Access and One-on-one Interaction with DS";
        console.log("Please dietician if you are not sure what to eat");
		break;
	case "subscriber":
		accessLevel = "Partial Access";
        console.log("You may have snacks and water only");
		break;
	case "non-subscriber":
		accessLevel = "Please subscribe and enroll for dietary services";
		break;
	default:
		accessLevel = "Are you an alien? Do you even eat our kind of food?"
}
