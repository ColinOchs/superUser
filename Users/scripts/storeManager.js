const LS_KEY="users";
function saveUser(user){ 
    //load the old data from the local storage
    let oldData=readUsers();
    //merge the data
    oldData.push(user);

    let val=JSON.stringify(oldData);//parse into a JSON string
    
    localStorage.setItem(LS_KEY,val);//send it to localstorage
}
function readUsers(){
    //get the values from localstorage
    let data = localStorage.getItem(LS_KEY);
if(!data){//NOT users?
    return[];//creating the array for the first registration
}else{
    let list=JSON.parse(data);//parse string back into obj
    return list;
    }
}