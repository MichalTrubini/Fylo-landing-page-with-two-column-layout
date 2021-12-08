//EMAIL VALIDATION

(function () {
    let submitButton = document.querySelectorAll('button');
    
    submitButton.forEach(function(item){

        item.addEventListener('click', function(){
            let input = item.querySelector('input');
            let errorMessage = item.querySelector('.footer__form-error-message');
          
            if(!input.validity.valid) {
                input.classList.add('input-error');
                errorMessage.classList.add('show-element');
            } 
            
            input.addEventListener('input',function(){
                if(input.validity.valid) {
                    input.classList.remove('input-error');
                    errorMessage.classList.remove('show-element');
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