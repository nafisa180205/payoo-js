// function getInputFieldValueById(){
//     console.log('will get value by id')
//     const addMoneyInput = document.getElementById('input-add-money').value
//     return addMoneyInput
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}


// extract value from html tag
function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)

    return textNumber

}


function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transection-form').classList.add('hidden')



    document.getElementById(id).classList.remove('hidden')

    
}