let user = "Admin";

switch (user){
    case "Admin":
    console.log("Full Access");
    break;

    case "user":
        console.log("limited access");
        break;

    case "tset":
        console.log("only Readable");
        break;

        default:
        console.log("trial user");
        break;
}
