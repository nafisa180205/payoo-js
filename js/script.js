// console.log('checked')


// step 1 -  set event handler
document.getElementById('btn-login').addEventListener('click' , function(event){
    // step 2 - set prevent default (reloading browser)
    event.preventDefault()
    console.log("login clicked")

    // step -3 get phone number and pin number
    const phoneNumber = document.getElementById('phn-number').value
    const pinNumber = document.getElementById('pin-number').value


    // step - 4 validate data
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('please input correct number')
    }

})


// home page js starts here
