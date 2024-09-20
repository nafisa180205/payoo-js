
    
//step - 1: add event handler to the add money button
document.getElementById('btn-add-money').addEventListener('click' , function(event){
    event.preventDefault()
    console.log('clicked')

    const addMoney = getInputFieldValueById('input-add-money')
    const inputPin = getInputFieldValueById('input-pin-number')
    console.log('add money : ', addMoney)
    console.log('input pin : ', inputPin)

    if(isNaN(addMoney)){
        alert('input valid number')
        return
    }

    if( inputPin === 123 ){
        const balance = getTextFieldValueById('current-amount')
        const newBalance = balance + addMoney
        document.getElementById('current-amount').innerText = newBalance


        //add to transection history

        const para = document.createElement('p')
        
        para.innerText = `Added : ${addMoney} tk. New  Balance ${newBalance}`
        console.log(para)

        document.getElementById('transection-container').appendChild(para)



    }

    else{
        alert('Wrong pin number')
    }






    // traditional way {-------
    // get the pin number
    // const addMoneyInput = document.getElementById('input-add-money').value
    // console.log(addMoneyInput)

    // const addPinNumberInput = document.getElementById('input-pin-number').value
    
    // // check if the password is correct or not
    // if(addPinNumberInput === '1234'){
    //     console.log('thik ase')

    //     // add money with the balance 
    //     const balance = document.getElementById('current-amount').innerText

    //     const balanceNumber = parseFloat(balance)
    //     const addMoneyNumber = parseFloat(addMoneyInput)

    //     const newBalance = balanceNumber  + addMoneyNumber 

    //     // step - Update balance 
    //     document.getElementById('current-amount').innerHTML = newBalance
    
    // }

    // else{
    //     alert('Incorrect pin number')
    // }
    //-----------}


})
