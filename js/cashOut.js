
//

document.getElementById('btn-cash-out').addEventListener('click' , function(event){
    event.preventDefault()
    
    const cashOut = getInputFieldValueById('input-cash-out')
    const cashOutPinInput = getInputFieldValueById('input-cash-out-pin')

    if(isNaN(cashOut)){
        alert('input valid number')
        return
    }

    if( cashOutPinInput === 123){

        const balance = getTextFieldValueById('current-amount')

        if(cashOut > balance){
            alert("you don't have enough money")
            return
        }
         

         const newBalance = balance - cashOut

         document.getElementById('current-amount').innerText = newBalance

        //  add transection history

        const div = document.createElement('div')
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h4 class="text-2xl front-bold"> Cash Out</h4>
        <p>${cashOut} withdraw . New balance ${newBalance}</p>
        `

        document.getElementById('transection-container').appendChild(div)
    }

    else{
        alert('wrong pin number ')
    }
})




// traditional way 
// document.getElementById('btn-cash-out').addEventListener('click' , function(event){
//     event.preventDefault()
//     console.log('clicked')

//     const cashOutInput = document.getElementById('input-cash-out').value
//     const cashOutPinInput = document.getElementById('input-cash-out-pin').value

//     if(cashOutPinInput  === '1234'){
//         const balance = document.getElementById('current-amount').innerText

//         const balanceNumber = parseFloat(balance)
//         const cashOutInputNumber = parseFloat(cashOutInput)

//         const newBalance = balanceNumber - cashOutInputNumber
//         document.getElementById('current-amount').innerText = newBalance
//     }

//     else{
//         alert('invalid pin')
//     }
// })