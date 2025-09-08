

 export  const checkValidData = ( email , password) =>{
          
            const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
            const isEmailVaild = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
            if (!isPasswordValid)  return "Password is not valid ";
            if (!isEmailVaild) return "Email is not valid";
            return null ;

}


export const checkValidData1 = (name , email , password) =>{
  const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isEmailVaild = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    if (!isNameValid) return "Name is not valid";
    if (!isPasswordValid)  return "Password is not valid ";
    if (!isEmailVaild) return "Email is not valid";
    return null ;

}

