
const form = document.getElementById('quiz-form');
const formSteps = form.querySelectorAll('.step');
const nextBtns = form.querySelectorAll('.next-btn');
const prevBtns = form.querySelectorAll('.prev-btn');
const submitSection = document.querySelector('.submit-section');
const submitBtn = document.querySelector('.submit-btn');

window.addEventListener('DOMContentLoaded', () => {
  hideAllSteps();
  showStep(currentStep);
});

let currentStep = 0;
hideAllSteps();
showStep(currentStep);
//-----------Función para ocultar pasos---------------
function hideAllSteps() {
  formSteps.forEach((step) => {
    step.style.display = 'none';
  });
  submitSection.style.display = 'none';
}

function showStep(stepIndex) {
  formSteps[stepIndex].style.display = 'block';
}
//---------Validar los pasos----------------
function validateCurrentStep() {
  switch (currentStep) {
    case 0:
      console.log("Validando case 0");
      // Validar fecha de nacimiento
    const diaField = document.getElementById('dia');
    const mesField = document.getElementById('mes');
    const yearField = document.getElementById('year');
    const dia = parseInt(diaField.value);
    const mes = parseInt(mesField.value);
    const year = parseInt(yearField.value);
    if (isNaN(dia) || isNaN(mes) || isNaN(year) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || year < 1900 || year > new Date().getFullYear()) {
        alert('Por favor ingrese una fecha de nacimiento válida.');
        return false;
    }if (mes === 2 && dia > 28) {
        alert('Febrero tiene máximo 28 días');
        return false;
    } if (mes === 4 && dia > 30) {
        alert('Abril tiene máximo 30 días');
        return false;
    }if (mes === 6 && dia > 30) {
        alert('Junio tiene máximo 30 días');
        return false;
    }if (mes === 9 && dia > 30) {
        alert('Septiembre tiene máximo 30 días');
        return false;
    }if (mes === 11 && dia > 30) {
        alert('Septiembre tiene máximo 30 días');
        return false;
    }
    //-------------Validar sexo--------------------------------------
      var selectedGender = $('input[name=sexo]:checked');
      if (selectedGender.length === 0) {
        alert('Por favor, seleccione su género.');
        return false;
      } else {
        return true;
      }
    case 1:
      console.log("Validando case 1");
      //----------------Validar estatura y peso-------------------
      const alturaField = document.getElementById('altura');
            const pesoField = document.getElementById('peso');
            const altura = parseInt(alturaField.value);
            const peso = parseInt(pesoField.value);
    
            if (altura >= 20 && altura <= 250 && peso >= 3 && peso <= 350) {
              return true;
            } else {
              alert('Por favor, ingrese un valor válido para altura y peso.');
              return false;
            }
    case 2:
      console.log("Validando case 2");
      let selectedEstudio = $('input[name=estudio]:checked');
      if (selectedEstudio.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }

    case 3:
      console.log("Validando case 3");
      let selectedDescanso = $('input[name=descanso]:checked');
      if (selectedDescanso.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }

    case 4:
      console.log("Validando case 4");
      let selectedEjercicio = $('input[name=ejercicio]:checked');
      if (selectedEjercicio.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }

    case 5:
      console.log("Validando case 5");
      let selectedTabaco = $('input[name=tabaco]:checked');
      let selectedConsumidor = $('input[name=consumidor]:checked');
      if (selectedTabaco.length === 0 || selectedConsumidor.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    
    case 6:
      console.log("Validando case 6");
      let selectedAlcohol = $('input[name=alcohol]:checked');
      if (selectedAlcohol.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    case 7:
      console.log("Validando case 7");
      let selectedSexual = $('input[name=sexual]:checked');
      if (selectedSexual.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    case 8:
      console.log("Validando case 8");
      let selectedEnf = $('input[name=enfermedades]:checked');
      if (selectedEnf.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    case 9:
      console.log("Validando case 8");
      let selectedVeg = $('input[name=vegetariano]:checked');
      if (selectedVeg.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
  }
}
function handleNextButtonClick(e) {
    e.preventDefault();

    if (validateCurrentStep()) {
        currentStep++;
  
        if (currentStep < formSteps.length) {
            hideAllSteps();
            showStep(currentStep);
            console.log(currentStep);

      } else {
        hideAllSteps();
        submitSection.style.display = 'block';
      }
    } 
  }
function handlePrevButtonClick(e) {
  e.preventDefault();
  currentStep--;
  hideAllSteps();
  showStep(currentStep);
}

nextBtns.forEach((btn) => {
  btn.addEventListener('click', handleNextButtonClick);
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', handlePrevButtonClick);
});
submitBtn.addEventListener('click', (e) => {
     e.preventDefault();
    const nombreInput = document.querySelector('#nombre');
    const correoInput = document.querySelector('#correo');
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (nombreInput.value && (validEmail.test(correoInput.value))){
    const formData = new FormData(form);
    const entries = formData.entries();
    for (let entry of entries) {
      console.log(entry[0] + ': ' + entry[1]);
//-----Obtener valor del sexo--------
    const maleRadio = document.getElementById("radio-m");
    const femaleRadio = document.getElementById("radio-f");
    
    let sexo;

if (maleRadio.checked) {
    sexo = maleRadio.value;
} else if (femaleRadio.checked) {
    sexo = femaleRadio.value;
} else {
    console.log("No gender selected");
}
//-----Calcular edad------
const age = calculateAge(dia, mes, year);
console.log("edad: " + age);

//--------Obtener IMC-----------

const imc = calcularIMC(peso, altura);

console.log("Tu IMC es: " + imc);
console.log("El peso es de: " + peso.value);
console.log("Tu altura es de: " + altura.value);

//-------Calcular imc segun su edad----------

let estatusImc;
if (age >= 6 && age <8 && sexo === 'F'){
  if (imc <= 12.70){
    estatusImc = 0;
  } else if (imc >= 12.80 && imc <= 16.80){
    estatusImc = 1;
  } else if (imc >= 16.90 && imc <= 18.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 8 && age <10 && sexo === 'F'){
  if (imc <= 12.9){
    estatusImc = 0;
  } else if (imc >= 13 && imc <= 17.6){
    estatusImc = 1;
  } else if (imc >= 17.7 && imc <= 20.5){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 10 && age <12 && sexo === 'F'){
  if (imc <= 13.1){
    estatusImc = 0;
  } else if (imc >= 13.2 && imc <= 18.9){
    estatusImc = 1;
  } else if (imc >= 19 && imc <= 22.5){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 12 && age <14 && sexo === 'F'){
  if (imc <= 14.4){
    estatusImc = 0;
  } else if (imc >= 14.5 && imc <= 20.7){
    estatusImc = 1;
  } else if (imc >= 20.8 && imc <= 24.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 14 && age <16 && sexo === 'F'){
  if (imc <= 15.4){
    estatusImc = 0;
  } else if (imc >= 15.5 && imc <= 22.6){
    estatusImc = 1;
  } else if (imc >= 22.7 && imc <= 27.2){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 16 && age < 18 && sexo === 'F'){
  if (imc <= 16.2){
    estatusImc = 0;
  } else if (imc >= 16.3 && imc <= 24){
    estatusImc = 1;
  } else if (imc >= 24.1 && imc <= 28.8){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age === 18 && sexo === 'F'){
  if (imc <= 16.4){
    estatusImc = 0;
  } else if (imc >= 16.5 && imc <= 24.7){
    estatusImc = 1;
  } else if (imc >= 24.8 && imc <= 29.4){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 6 && age < 8 && sexo === 'M'){
  if (imc <= 13){
    estatusImc = 0;
  } else if (imc >= 13.1 && imc <= 16.7){
    estatusImc = 1;
  } else if (imc >= 16.8 && imc <= 18.4){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 8 && age < 10 && sexo === 'M'){
  if (imc <= 13.3){
    estatusImc = 0;
  } else if (imc >= 13.4 && imc <= 17.3){
    estatusImc = 1;
  } else if (imc >= 17.4 && imc <= 16.6){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 10 && age < 12 && sexo === 'M'){
  if (imc <= 13.7){
    estatusImc = 0;
  } else if (imc >= 13.8 && imc <= 18.4){
    estatusImc = 1;
  } else if (imc >= 18.5 && imc <= 21.4){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 12 && age < 14 && sexo === 'M'){
  if (imc <= 14.5){
    estatusImc = 0;
  } else if (imc >= 14.6 && imc <= 19.8){
    estatusImc = 1;
  } else if (imc >= 19.9 && imc <= 23.6){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 14 && age < 16 && sexo === 'M'){
  if (imc <= 15.5){
    estatusImc = 0;
  } else if (imc >= 15.6 && imc <= 21.7){
    estatusImc = 1;
  } else if (imc >= 21.8 && imc <= 25.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 16 && age < 18 && sexo === 'M'){
  if (imc <= 16.5){
    estatusImc = 0;
  } else if (imc >= 16.6 && imc <= 23.4){
    estatusImc = 1;
  } else if (imc >= 23.5 && imc <= 27.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age === 18 && sexo === 'M'){
  if (imc <= 17.3){
    estatusImc = 0;
  } else if (imc >= 17.4 && imc <= 24.8){
    estatusImc = 1;
  } else if (imc >= 24.9 && imc <= 29.2){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 19){
  if (imc < 18.5){
    estatusImc = 0;
  } else if (imc >= 18.5 && imc <= 24.9 ){
    estatusImc = 1;
  } else if (imc >= 25 && imc <= 29.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else {
  console.log("Es menor de 6 años");
}
 


//------Obtener respuesta ultimo estudio---------------
    const option1S3 = document.getElementById("op1_step3");
    const option2S3 = document.getElementById("op2_step3");
    const option3S3 = document.getElementById("op3_step3");
    const option4S3 = document.getElementById("op4_step3");
    const option5S3 = document.getElementById("op5_step3");

    let answerStep3;

    if(option1S3.checked){
        answerStep3 = option1S3.value;
    } else if (option2S3.checked){
        answerStep3 = option2S3.value;
    }else if (option3S3.checked){
        answerStep3 = option3S3.value;
    }else if (option4S3.checked){
        answerStep3 = option4S3.value;
    }else if (option5S3.checked){
        answerStep3 = option5S3.value;
    }else {
        console.log("No se selecciono ninguna respuesta");
    }

    //-------Obtener respuesta del descanso--------
    const descansoEx = document.getElementById("descanso1");
    const descansoBu = document.getElementById("descanso2");
    const descansoRe = document.getElementById("descanso3");
    const descansoMa = document.getElementById("descanso4");

    let answerDescanso;

    if(descansoEx.checked){
      answerDescanso = descansoEx.value;
    } else if (descansoBu.checked){
      answerDescanso = descansoBu.value;
    } else if (descansoRe.checked){
      answerDescanso = descansoRe.value;
    } else if (descansoMa.checked) {
      answerDescanso = descansoMa.value;
    } else {
      console.log("No se selecciono ninguna respuesta de descanso");
    }

    //------------Obtener respuesta de ejercicio----------------

    const ejercicio1 = document.getElementById("ejercicio1");
    const ejercicio2 = document.getElementById("ejercicio2");
    const ejercicio3 = document.getElementById("ejercicio3");
    const ejercicio4 = document.getElementById("ejercicio4");
    const ejercicio5 = document.getElementById("ejercicio5");

    let answerEjercicio;
    if(ejercicio1.checked){
      answerEjercicio = ejercicio1.value;
    } else if (ejercicio2.checked){
      answerEjercicio = ejercicio2.value;
    } else if (ejercicio3.checked){
      answerEjercicio = ejercicio3.value;
    } else if (ejercicio4.checked){
      answerEjercicio = ejercicio4.value;
    } else if (ejercicio5.checked){
      answerEjercicio = ejercicio5.value;
    } else {
      console.log("No se selecciono ninguna respuesta de ejercicio");
    }

    //-----------Obtener respuesta tabaco---------
    const tabacoSi = document.getElementById("tabacoSi");
    const tabacoNo = document.getElementById("tabacoNo");

    let answerTabaco;
    if(tabacoSi.checked){
      answerTabaco = tabacoSi.value;
    } else if (tabacoNo.checked) {
      answerTabaco = tabacoNo.value;
    } else {
      console.log("No se seleciiono ninguna respuesta de tabaco");
    }
    //-----------Obtener respuesta Consumidor---------
    const consumidorSi = document.getElementById("consumidorSi");
    const consumidorNo = document.getElementById("consumidorNo");

    let answerConsumidor;
    if(consumidorSi.checked){
      answerConsumidor = consumidorSi.value;
    } else if (consumidorNo.checked) {
      answerConsumidor = consumidorNo.value;
    } else {
      console.log("No se seleciiono ninguna respuesta de Consumidor");
    }
    //-----------Obtener respuesta Alcohol-------------
    const alcohol1 = document.getElementById("alcohol1");
    const alcohol2 = document.getElementById("alcohol2");
    const alcohol3 = document.getElementById("alcohol3");
    const alcohol4 = document.getElementById("alcohol4");
    const alcohol5 = document.getElementById("alcohol5");

    let answerAlcohol;
    if(alcohol1.checked){
      answerAlcohol = alcohol1.value;
    } else if (alcohol2.checked){
      answerAlcohol = alcohol2.value;
    } else if (alcohol3.checked){
      answerAlcohol = alcohol3.value;
    } else if (alcohol4.checked){
      answerAlcohol = alcohol4.value;
    } else if (alcohol5.checked){
      answerAlcohol = alcohol5.value;
    } else {
      console.log("No se selecciono ninguna respuesta de alcohol");
    }
    //-----------Obtener respuesta Sexual-------------
    const sexual1 = document.getElementById("sexual1");
    const sexual2 = document.getElementById("sexual2");
    const sexual3 = document.getElementById("sexual3");
    const sexual4 = document.getElementById("sexual4");
    const sexual5 = document.getElementById("sexual5");
    const sexual6 = document.getElementById("sexual6");
    

    let answerSexual;
    if(sexual1.checked){
      answerSexual = sexual1.value;
    } else if (sexual2.checked){
      answerSexual = sexual2.value;
    } else if (sexual3.checked){
      answerSexual = sexual3.value;
    } else if (sexual4.checked){
      answerSexual = sexual4.value;
    } else if (sexual5.checked){
      answerSexual = sexual5.value;
    } else if (sexual6.checked){
      answerSexual = sexual6.value;
    }else {
      console.log("No se selecciono ninguna respuesta de sexual");
    }

    //-----------Obtener respuesta Enfermedades cronicas-------------
    const enfermedades1 = document.getElementById("enfermedades1");
    const enfermedades2 = document.getElementById("enfermedades2");
    const enfermedades3 = document.getElementById("enfermedades3");
    const enfermedades4 = document.getElementById("enfermedades4");
    const enfermedades5 = document.getElementById("enfermedades5");
    const enfermedades6 = document.getElementById("enfermedades6");


    let answerEnf;
    if(enfermedades1.checked){
      answerEnf = enfermedades1.value;
    } else if (enfermedades2.checked){
      answerEnf = enfermedades2.value;
    } else if (enfermedades3.checked){
      answerEnf = enfermedades3.value;
    } else if (enfermedades4.checked){
      answerEnf = enfermedades4.value;
    } else if (enfermedades5.checked){
      answerEnf = enfermedades5.value;
    } else if (enfermedades6.checked){
      answerEnf = enfermedades6.value;
    }else {
      console.log("No se selecciono ninguna respuesta de enfermedades");
    }

    



//--------Algoritomo de recomendacion---------
let recomendacion = '';
if (age >= 19 && age <35){
      if (estatusImc === 0 || estatusImc > 1){
        recomendacion = 'adultoJovenA';
      } else if (answerStep3 === 5){
        recomendacion = 'adultoJovenA';
      } else if (answerTabaco === "si"){
        recomendacion ='adultoJovenA';
      } else if (answerAlcohol === 1){
        recomendacion ='adultoJovenA';
      } else if (answerEjercicio === 5){
        recomendacion ='adultoJovenA';
      } else {
        recomendacion ='adultoJovenP';
      }
    } else if (age > 6 && age < 15){
      recomendacion ='ninos';
    } else if (age < 6){
      recomendacion = 'pediatra';
      console.log("Menor de 6 años debe ir a pediatra");
    } else if (age > 14 && age < 19){
      recomendacion = 'basico';
    } else if (age >35 && age < 59){
      if (sexo === "F"){
        if (estatusImc === 0 || estatusImc > 1){
          recomendacion = 'mayores40MA';
        } else if (answerStep3 >=4){
          recomendacion = 'mayores40MA';
        } else if (answerTabaco === "si"){
          recomendacion ='mayores40MA';
        } else if (answerAlcohol === 1){
          recomendacion ='mayores40MA';
        } else if (answerEjercicio === 5){
          recomendacion ='mayores40MA';
        } else {
          recomendacion ='mayores40MP';
        }
      } else if (sexo === "M"){
        if (estatusImc === 0 || estatusImc > 1){
          recomendacion = 'mayores40A';
        } else if (answerStep3 >=4){
          recomendacion = 'mayores40A';
        } else if (answerTabaco === "si"){
          recomendacion ='mayores40A';
        } else if (answerAlcohol === 1){
          recomendacion ='mayores40A';
        } else if (answerEjercicio === 5){
          recomendacion ='mayores40A';
        } else {
          recomendacion ='mayores40P';
        }
      }
    } else if (age > 59){
      if (sexo === "F"){
        if (estatusImc === 0 || estatusImc > 1){
          recomendacion = 'adultoMayorMA';
        } else if (answerStep3 >=4){
          recomendacion = 'adultoMayorMA';
        } else if (answerTabaco === "si"){
          recomendacion ='adultoMayorMA';
        } else if (answerAlcohol === 1){
          recomendacion ='adultoMayorMA';
        } else if (answerEjercicio === 5){
          recomendacion ='adultoMayorMA';
        } else {
          recomendacion ='adultoMayorMP';
        }
      } else if (sexo === "M"){
        if (estatusImc === 0 || estatusImc > 1){
          recomendacion = 'adultoMayorA';
        } else if (answerStep3 >=4){
          recomendacion = 'adultoMayorA';
        } else if (answerTabaco === "si"){
          recomendacion ='adultoMayorA';
        } else if (answerAlcohol === 1){
          recomendacion ='adultoMayorA';
        } else if (answerEjercicio === 5){
          recomendacion ='adultoMayorA';
        } else {
          recomendacion ='adultoMayorP';
        }
      }
    }

    if (estatusImc === 0){
      estatusImc = "Riesgo de desnutrición";
    } else if (estatusImc === 1){
      estatusImc = "normalidad";
    } else if (estatusImc === 2){
      estatusImc = "sobrepeso"
    } else if (estatusImc === 3){
      estatusImc = "obesidad";
    } else {
      estatusImc = "no determinado";
    } 
    //----------Algoritmo de recomendación extra--------------

    let recomExtra = 'extra';

    
    //-----------Obtener todos los datos-----------

    console.log("NOMBRE : " + nombreInput.value);
    console.log("SEXO : " + sexo);
    console.log("EDAD : " + age);
    console.log("IMC es de : " + imc);
    console.log("Tu imc es: " + estatusImc);
    console.log("CORREO : " + correoInput.value);
    const perfilDiv = document.getElementById("card-perfil");
    const mensaje = `Nombre: ${nombreInput.value} <br> Sexo: ${sexo} <br> Edad: ${age} <br> Índice de masa corporal: ${imc} <br> Tu imc indica que estás en el rango de: ${estatusImc}`;
    perfilDiv.innerHTML = mensaje;
    
          perfilDiv.classList.add("card-perfil");

console.log("recom: " + recomendacion);
// Cambiar la visibilidad del checkup correspondiente
let extra = document.getElementById(recomExtra);
extra.style.display ='block';
let checkup = document.getElementById(recomendacion);
checkup.style.display = 'block';
submitSection.style.display = 'none'; 
}} else {
  
      // Si los campos de nombre y correo están vacíos
      alert('Por favor, asegurate de que tu nombre y correo estén bien escritos');
    }
    
  });
form.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
}); 
  
function calculateAge(diaField, mesField, yearField) {
    const dia = parseInt(diaField.value);
    const mes = parseInt(mesField.value);
    const year = parseInt(yearField.value);
    
    // Validación de los campos de fecha
    if (dia < 1 || dia > 31) {
      console.log('El valor del día debe estar entre 1 y 31');
      return;
    }
    if (mes < 1 || mes > 12) {
      console.log('El valor del mes debe estar entre 1 y 12');
      return;
    }
    if (year < 1900 || year > new Date().getFullYear()) {
      console.log('El valor del año debe estar entre 1900 y el año actual');
      return;
    }
    const today = new Date();
    const birthDate = new Date(year, mes - 1, dia);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  function calcularIMC(pesoField, alturaField) {
    const peso = parseInt(pesoField.value);
    let altura = parseInt(alturaField.value);
    // Convertir la altura a metros
    altura = altura / 100;
    
    // Calcular el IMC
    let formImc = peso / (altura * altura);
    
    // Redondear el resultado a dos decimales
    formImc = Math.round(formImc * 100) / 100;
    
    return formImc;
  };
