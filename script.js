function foo(){
    var FirstName=document.getElementById("FirstName").value;
    var MiddleName=document.getElementById("MiddleName").value;
    var LastName=document.getElementById("LastName").value;
    var Email=document.getElementById("Email").value;
    var PhoneNumber=document.getElementById("PhoneNumber").value;
    console.log(`
    FirstName:${FirstName}
    MiddleName:${MiddleName}
    LastName:${LastName}
    Email:${Email}
    Phone Number:${PhoneNumber}`)
}