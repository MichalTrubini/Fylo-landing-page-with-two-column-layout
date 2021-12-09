//EMAIL VALIDATION

(function () {
    let submitButton = document.querySelectorAll('button');
    
    submitButton.forEach(function(item){

        item.addEventListener('click', function(){
            dataAttribute = item.getAttribute('data-selected');
            let input = document.querySelector(`input[data-selected='${dataAttribute}']`);
            let errorMessage = document.querySelector(`.error-message[data-selected='${dataAttribute}']`);
          
            if(!input.validity.valid) {
                input.classList.add('input-error');
                errorMessage.classList.add('error-message-visible');
                item.classList.add('button-error');
            } 
            
            input.addEventListener('input',function(){
                if(input.validity.valid) {
                    input.classList.remove('input-error');
                    errorMessage.classList.remove('error-message-visible');
                    item.classList.remove('button-error');
                }
            });
        })      
    })
})();

//prevent the browser from showing default error bubble / hint

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
  })(), true);