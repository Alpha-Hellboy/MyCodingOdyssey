let day = prompt("Enter Number From 1 to 7 : ");
day = parseInt(day);
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wendesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("On which planet you are leaving?");
        break;
}