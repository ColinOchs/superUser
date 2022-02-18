//create the constructor ES2015 / class
class User{
    //these are the parameters<---------------------------------------->
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first; //**
        this.lname=last; //** 
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
function isValid(user){
    //return a false with the user is invalid
    //return a true with the user is valid
    let valid=true;
    //we need to reset to original appearance by removing alert error
    $("input").removeClass("alert-error")
    //validations
    if(user.email.length==0){
        //if we get here it means the email is empty and not valid
        valid=false;
        console.log("missing email");
        $("#txtEmail").addClass("alert-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("missing password")
        $("#txtPassword").addClass("alert-error");
    }
    if(user.fname.length==0){
        valid=false;
        console.log("missing first name")
        $("#txtFirst").addClass("alert-error");
    }if(user.lname.length==0){
        valid=false;
        console.log("missing last name")
        $("#txtLast").addClass("alert-error");
    }
    //add the validation for the first/last name
    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val();  //*check your id on the html
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    //validate the user
    if(isValid(user)){
        saveUser(user);//this function is in the storemanager.js
    }
    clearForm();
}

function clearForm(){
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("");
}


function init(){
    console.log("init register");
    //hook events
    $("#btnRegister").click(registerUser);
    
    }

window.onload=init;