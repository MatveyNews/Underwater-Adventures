const onSumbit = document.getElementById("sumbit");


sumbit.addEventListener('click', (e) =>{
e.preventDefault();
    const name = document.getElementById("inputName");
    const password = document.getElementById("inputPassword");
    const email = document.getElementById("inputEmail");
    const error = document.getElementById("error");
    const errorSS = []
    e.preventDefault();

//проверка имени   
        if ( name.value.length < 1){
        errorSS.push("поле имя не заполнено")
        }

        if ( name.value.length < 2){
        errorSS.push("имя не может быть меньше чем 2 символа")
        }
//проверка пароля
        if ( password.value.length < 1){
        errorSS.push("поле пароль не заполнено")
        }

        if ( password.value.length < 6){
        errorSS.push( "пароль не может быть меньше чем 6 символов")
        }
//проверка почты
        if ( email.value.length < 1){
        errorSS.push( "поле email не заполнено")
        }

        if (email.value.indexOf('@')!=-1){
           
            errorSS.push("") 
        }
            else{
               errorSS.push("должен быть знак @") 
            }


            
        if(email.value.indexOf('@') != 0 ){
            
            errorSS.push("") 
            
        }
        else{
            errorSS.push("знак @ не может стоять первым")
         }

       

      
 
//проверка на errorSS
       if (errorSS.length > 0){
        
        error.innerText = errorSS.join("\n")
       }

});
 
