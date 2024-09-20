// document.getElementById('btn-show-cash-out').addEventListener('click' , function(event){
//     event.preventDefault()

//     document.getElementById('cash-out-form').classList.remove('hidden')
//     document.getElementById('add-money-form').classList.add('hidden')
    
// })

// document.getElementById('btn-show-add-money').addEventListener('click', function(event){
//     event.preventDefault()

//     document.getElementById('cash-out-form').classList.add('hidden')
//     document.getElementById('add-money-form').classList.remove('hidden')
// })


document.getElementById('btn-show-cash-out').addEventListener('click' , function(){
    showSectionById('cash-out-form')

})
document.getElementById('btn-show-add-money').addEventListener('click' , function(){
    showSectionById('add-money-form')

})
document.getElementById('btn-transection').addEventListener('click' , function(){
    showSectionById('transection-form')

})