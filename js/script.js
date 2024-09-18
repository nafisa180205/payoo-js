// console.log('checked')


// step 1 -  set event handler
document.getElementById('btn-login').addEventListener('click' , function(event){
    // step 2 - set prevent default (reloading browser)
    event.preventDefault
    console.log("login clicked")

    const phoneNumber = document.getElementById('phn-number')
    console.log(phoneNumber.value)

})