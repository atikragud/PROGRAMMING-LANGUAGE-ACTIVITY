

//objects; // 

const UserData = {
    firtName: "Danrich",
    lastName: "Godalle",
    age: 21,
    email: "danrich.godalle@sorsu.edu.ph",
    isAdmin: false,
    fullname: function(){
        return this.firtName + " " + this.lastName;
    },
    userInformation:function(){
        console.log("Full Name: " + UserData.fullname());
        console.log("Age: " + UserData.age);
        console.log("Email: " + UserData.email);
        if (UserData.isAdmin) {
            console.log("Role: Admin");
        }
        else {
            console.log("Role: User");
        }

    },
    adminInformation: function(){
        UserData.isAdmin = true;
        console.log("Full Name: " + UserData.fullname());
        console.log("Age: " + UserData.age);
        console.log("Email: " + UserData.email);
        console.log("Role: Admin");
    }
}

console.log("User Information");
UserData.userInformation()

console.log("Admin Information");
UserData.adminInformation()





