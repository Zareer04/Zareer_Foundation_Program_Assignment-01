/*Answer No. 1 */
function describeValue(value){
   const type = typeof value;
   const truthiness = value ? "truthy" : "falsy";
   return `"${type} | ${truthiness}"`;
}

/*Answer No. 2 */
function getDayType(day){
   switch (day.toLowerCase()) {
      case "friday":
      case "saturday":
         return "Weekend";
      case "sunday":
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
         return "Working Day";
      default:
         return "Invalid Day";
   }
}

/*Answer No. 3 */
function validateUsername(username) {
   if (username.length < 4) {
      return "Too Short";
   } else if (username.includes(" ")) {
      return "No Space Allowed";
   } else if (username.toLowerCase().includes("admin")) {
      return "Reserved Word";
   } else {
      return "Available";
   }
}

