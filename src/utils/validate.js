
export const checkValidData=(email,passoword,name,isSignInForm)=>{

    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passoword);
    const isNameValid = typeof name === 'string' &&
                    /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);


if(!isSignInForm && !isNameValid) return "User name is not valid!";
if(!isEmailValid) return "Email id is not valid!";
if(!isPasswordValid) return "Password id is not valid!";
return null;
}