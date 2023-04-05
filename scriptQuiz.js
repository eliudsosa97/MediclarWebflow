const form = document.getElementById('quiz-form');
const formSteps = form.querySelectorAll('.step');
const nextBtns = form.querySelectorAll('.next-btn');
const prevBtns = form.querySelectorAll('.prev-btn');
const submitSection = document.querySelector('.submit-section');
const submitBtn = document.querySelector('.submit-btn');


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
      if (selectedTabaco.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
  }
}

/* //-----Version antigua de validate current

function validateCurrentStep() {
    const currentStepFields = formSteps[currentStep].querySelectorAll('input, select');
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
    
        switch (currentStep) {
          case 0:
            let selectedGender = $('input[name=sexo]:checked');
            if (selectedGender.length === 0) {
            alert('Por favor, seleccione su género.');
            return false;
            } else {
            return true;
            }
          case 1:
            //-------Validar estatura y peso
    
            const alturaField = document.getElementById('altura');
            const pesoField = document.getElementById('peso');
            const altura = parseInt(alturaField.value);
            const peso = parseInt(pesoField.value);
    
            if (altura < 20 || altura > 250) {
            alert("La estatura debe estar en cm y ser mayor de 20");
            return false;
            }
    
            if (peso < 3 || peso > 350) {
            alert("El peso debe estar en kg y ser mayor de 10.");
            return false;
            }
        case 2:
          //---------Validar respuesta ultimo estudio--
          let selectedEstudio = $('input[name=estudio]:checked');
          if (selectedEstudio.length === 0) {
          alert('Por favor, seleccione una respuesta.');
          return false;
          } else {
          return true;
          }


        };

    
    const sexoField = form.querySelector('#sexo');
    const alturaField = form.querySelector('#altura');
    let isValid = true;
  
    currentStepFields.forEach((field) => {
      if (field.value === '' || (currentStep === 1 && !sexoField) || (currentStep === 2 && !alturaField)) {
        field.classList.add('error');
        isValid = false;
      } else {
        field.classList.remove('error');
      }
    });
  
    // En el último paso, solo validamos que todos los campos anteriores hayan sido completados
    if (currentStep === formSteps.length - 1) {
      for (let i = 0; i < currentStepFields.length - 1; i++) {
        if (currentStepFields[i].value === '') {
          isValid = false;
          break;
        }
      }
    }
  
    return isValid;
  }
  
   */
  

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
let recomendacion = '';
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

//--------Algoritomo de recomendacion---------
if (age < 39 && sexo === 'M') {
  recomendacion = 'hombres40';
} else if (age > 59 && sexo === 'F') {
  recomendacion = 'adultoMayorMujer';
} else if (age < 15){
    recomendacion = 'kids';
} 
else {
  recomendacion = 'basico';
}
console.log("recom: " + recomendacion);
// Cambiar la visibilidad del checkup correspondiente
let checkup = document.getElementById(recomendacion);
checkup.style.display = 'block';
submitSection.style.display = 'none';
    }
  });
/* form.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
}); */
  
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
  
