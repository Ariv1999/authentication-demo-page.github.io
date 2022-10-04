const signup = document.getElementById("signup-link");
const home = document.getElementById("home-link");
const login = document.getElementById("login-link");

const goToHomeSection = () => {
  console.log("home");
  home.style.display = "block";
  signup.style.display = "none";
  login.style.display = "none";

  // for giving the tabs a active motion
  document.getElementById("home-link").classList.add("active");
  document.getElementById("signup-link").classList.remove("active");
  document.getElementById("login-link").classList.remove("active");
}
const goToSignUpSection = () => {
  // for display the sign-up section
  console.log("signup");
  signup.style.display = "block";
  home.style.display = "none";
  login.style.display = "none";

  // for giving the tabs a active motion
  document.getElementById("signup-link").classList.add("active");
  document.getElementById("home-link").classList.remove("active");
  document.getElementById("login-link").classList.remove("active");
}
const goToLogInSection = () => {
  console.log("login");
  login.style.display = "block";
  signup.style.display = "none";
  home.style.display = "none";

  // for giving the tabs a active motion
  document.getElementById("login-link").classList.add("active");
  document.getElementById("home-link").classList.remove("active");
  document.getElementById("signup-link").classList.remove("active");
}

let DB_Authentication = []

const signUp = () =>{
    let check = false
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const emails = document.getElementById('emails').value
    const phoneNo = Number(document.getElementById('phoneNo').value)
    const passwords = document.getElementById('passwords').value
    const passwordConform = document.getElementById('passwordConform').value

    const valiadation = document.getElementById('confirm-password-valid')

    if(passwords !== passwordConform){
        valiadation.style.display = 'block'
        check = true
    }else{
        valiadation.style.display = 'none'
    }
    if(check == false){
        alert('Data Stored !!')
        let obj = {
            firstName,
            lastName,
            emails,
            phoneNo,
            passwords
        }
        DB_Authentication.push(obj)
        console.log(DB_Authentication)
    }
}

const logIn = () => {
    const email = document.getElementById('login-Email').value
    const password = document.getElementById('login-psw').value
    if(DB_Authentication.find(data => data.emails === email && data.passwords === password)){
        alert('data exists')
    }else{
        alert('try again!, Data not exist')
    }
}
