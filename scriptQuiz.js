
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
  formSteps[stepIndex].style.display = 'flex';
}
//---------Validar los pasos----------------
function validateCurrentStep() {
  switch (currentStep) {
    case 0:
      
      // Validar fecha de nacimiento
    const diaField = document.getElementById('dia'); //Hacer todo aqui 
    const mesField = document.getElementById('mes');
    const yearField = document.getElementById('year');
    const dia = parseInt(diaField.value);
    const mes = parseInt(mesField.value);
    const year = parseInt(yearField.value);
    if (isNaN(dia) || isNaN(mes) || isNaN(year) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || year < 1900 || year > 2015/* new Date().getFullYear() */) {
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
      
      let selectedEstudio = $('input[name=estudio]:checked');
      if (selectedEstudio.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }

    case 3:
      
      let selectedDescanso = $('input[name=descanso]:checked');
      if (selectedDescanso.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }

    case 4:
      
      let selectedEjercicio = $('input[name=ejercicio]:checked');
      if (selectedEjercicio.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }

    case 5:
      
      let selectedTabaco = $('input[name=tabaco]:checked');
      let selectedConsumidor = $('input[name=consumidor]:checked');
      if (selectedTabaco.length === 0 || selectedConsumidor.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    
    case 6:
      
      let selectedAlcohol = $('input[name=alcohol]:checked');
      if (selectedAlcohol.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    case 7:
      
      let selectedSexual = $('input[name=sexual]:checked');
      if (selectedSexual.length === 0) {
        alert('Por favor, seleccione una respuesta.');
        return false;
      } else {
        return true;
      }
    case 8:
      
      return true;
    case 9:
     
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
            

      } else {
        hideAllSteps();
        submitSection.style.display = 'flex';
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
    
    const nombreInput = document.querySelector('#nombre');
    const correoInput = document.querySelector('#correo');
    const celularInput = document.querySelector('#celular');
    const primerApellido = document.querySelector('#primerApellido')
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validCelular = /^\+?[0-9]{10,13}$/;
    
    if (nombreInput.value && primerApellido.value && (validEmail.test(correoInput.value)) && (validCelular.test(celularInput.value))){
    const formData = new FormData(form);
    const entries = formData.entries();
    
//-----Obtener valor del sexo--------
    const maleRadio = document.getElementById("radio-m");
    const femaleRadio = document.getElementById("radio-f");
    
    let sexo;

if (maleRadio.checked) {
    sexo = maleRadio.value;
} else if (femaleRadio.checked) {
    sexo = femaleRadio.value;
} 
//-----Calcular edad------
const age = calculateAge(dia, mes, year);

//--------Obtener IMC-----------
const imc = calcularIMC(peso, altura);

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
  estatusImc = "No calculado"
}

//------Obtener respuesta ultimo estudio---------------
    const ultEstudio1 = document.getElementById("ult-estudio1");
    const ultEstudio2 = document.getElementById("ult-estudio2");
    const ultEstudio3 = document.getElementById("ult-estudio3");
    
    let answerUltEstudio;

    if(ultEstudio1.checked){
        answerUltEstudio = ultEstudio1.value;
    } else if (ultEstudio2.checked){
        answerUltEstudio = ultEstudio2.value;
    }else if (ultEstudio3.checked){
        answerUltEstudio = ultEstudio3.value;
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
    }

    //------------Obtener respuesta de ejercicio----------------

    const ejercicio1 = document.getElementById("ejercicio1");
    const ejercicio2 = document.getElementById("ejercicio2");
    const ejercicio3 = document.getElementById("ejercicio3");
    const ejercicio4 = document.getElementById("ejercicio4");
    

    let answerEjercicio;
    if(ejercicio1.checked){
      answerEjercicio = ejercicio1.value;
    } else if (ejercicio2.checked){
      answerEjercicio = ejercicio2.value;
    } else if (ejercicio3.checked){
      answerEjercicio = ejercicio3.value;
    } else if (ejercicio4.checked){
      answerEjercicio = ejercicio4.value;
    }

    //-----------Obtener respuesta tabaco---------
    const tabacoSi = document.getElementById("tabacoSi");
    const tabacoNo = document.getElementById("tabacoNo");

    let answerTabaco;
    if(tabacoSi.checked){
      answerTabaco = tabacoSi.value;
    } else if (tabacoNo.checked) {
      answerTabaco = tabacoNo.value;
    } 
    //-----------Obtener respuesta Consumidor---------
    const consumidorSi = document.getElementById("consumidorSi");
    const consumidorNo = document.getElementById("consumidorNo");

    let answerConsumidor;
    if(consumidorSi.checked){
      answerConsumidor = consumidorSi.value;
    } else if (consumidorNo.checked) {
      answerConsumidor = consumidorNo.value;
    } 
    //-----------Obtener respuesta Alcohol-------------
    const alcohol1 = document.getElementById("alcohol1");
    const alcohol2 = document.getElementById("alcohol2");
    const alcohol3 = document.getElementById("alcohol3");
    const alcohol4 = document.getElementById("alcohol4");

    let answerAlcohol;
    if(alcohol1.checked){
      answerAlcohol = alcohol1.value;
    } else if (alcohol2.checked){
      answerAlcohol = alcohol2.value;
    } else if (alcohol3.checked){
      answerAlcohol = alcohol3.value;
    } else if (alcohol4.checked){
      answerAlcohol = alcohol4.value;
    } 
    //-----------Obtener respuesta Sexual-------------
    const sexual1 = document.getElementById("sexual1");
    const sexual2 = document.getElementById("sexual2");
    const sexual3 = document.getElementById("sexual3");    

    let answerSexual;
    if(sexual1.checked){
      answerSexual = sexual1.value;
    } else if (sexual2.checked){
      answerSexual = sexual2.value;
    } else if (sexual3.checked){
      answerSexual = sexual3.value;
    } 

    //-----------Obtener respuesta Enfermedades cronicas-------------
   
    const diabetes = document.getElementById("diabetes");
    const hipertension = document.getElementById("hipertension");
    const cancer = document.getElementById("cancer");
    const problemasRenales = document.getElementById("problemas-renales");
    const hepatitis = document.getElementById("hepatitis");
    const ninguna = document.getElementById("ninguna");


    //-----------Obtener respuesta de vegetariano-----------------------
    const vegetarianoSi = document.getElementById("vegSi");
    const vegetarianoNo = document.getElementById("vegNo");

    let answerVegetariano;
    if(vegetarianoSi.checked){
      answerVegetariano = vegetarianoSi.value;
    } else if (vegetarianoNo.checked) {
      answerVegetariano = vegetarianoNo.value;
    }

//--------Algoritomo de recomendacion---------
let recomendacion = '';
if (age >= 19 && age <35){
        recomendacion ='adultoJoven';
      } else if (age > 6 && age < 15){
      recomendacion ='ninos';
      } else if (age < 6){
      recomendacion = 'pediatra';
      } else if (age > 14 && age < 19){
      recomendacion = 'basico';
      } else if (age >=35 && age <= 59){
      if (sexo === "F"){
        recomendacion = 'mujeres40';
      } else if (sexo === "M"){
          recomendacion = 'hombres40';
      }
      } else if (age > 59){
      if (sexo === "F"){
        if (answerUltEstudio < 2){
          recomendacion = 'adultoMayorMBP';
        } else {
          recomendacion ='adultoMayorMPA';
        }
      } else if (sexo === "M"){
        if (answerUltEstudio < 2){
          recomendacion = 'adultoMayorBP';
        } else {
          recomendacion ='adultoMayorPA';
        }
      }
    }
    //--------------------cambiar estatus de imc--------------

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
    let recomExtraUno = '';
    let recomExtraDos = '';
    let recomExtraTres = '';
    let recomExtraCuatro = '';

    if (answerVegetariano === 'si'){
      recomExtraUno = 'vegetariano';
    } else {
      recomExtraUno = false;
    };
    if (sexo === "M" && age < 59 && answerSexual === "2"){
      recomExtraDos = 'saludSexualH';
    } else {
      recomExtraDos = false;
    };
    if (sexo === "F" && age > 17 && age < 59 &&  answerSexual === "2"){
      recomExtraTres = 'saludSexualM';
    } else {
      recomExtraTres = false;
    };
    if (answerEjercicio === '1' && age > 17 && age < 49){
      recomExtraCuatro = 'sport';
    } else {
      recomExtraCuatro = false;
    };
    

//----------- Mensaje de gracias------------

    const perfilDiv = document.getElementById("encabezado");
    const mensaje = `Gracias por llenar tu cuestionario <strong> ${nombreInput.value} </strong> , nos importa tu salud`;
    perfilDiv.innerHTML = mensaje;
    
    perfilDiv.classList.add("card-perfil");

//----------- Obtener la fecha actual

let fecha = new Date();

//---------- Obtener el día, mes y año

let diaFecha = fecha.getDate();
let mesFecha = fecha.getMonth() + 1;
let yearFecha = fecha.getFullYear();

// ----------Mostrar la fecha en el elemento HTML

const fechaDiv = document.getElementById("fecha-actual");
const mensajeFecha = diaFecha + "/" + mesFecha + "/" + yearFecha;

fechaDiv.innerHTML = mensajeFecha;
fechaDiv.classList.add("fecha-div");

// Cambiar la visibilidad del checkup correspondiente
if (recomExtraUno !== false) {
  let extraUno = document.getElementById(recomExtraUno);
  if (extraUno) {
    extraUno.style.display = 'block';
  }
}
if (recomExtraDos !== false) {
  let extraDos = document.getElementById(recomExtraDos);
  if (extraDos) {
    extraDos.style.display = 'block';
  }
}
if (recomExtraTres !== false) {
  let extraTres = document.getElementById(recomExtraTres);
  if (extraTres) {
    extraTres.style.display = 'block';
  }
}
if (recomExtraCuatro !== false) {
  let extraCuatro = document.getElementById(recomExtraCuatro);
  if (extraCuatro) {
    extraCuatro.style.display = 'block';
  }
}

//------mostrar el heading de otros estudios------

if (recomExtraUno !== false || recomExtraDos !== false || recomExtraTres !== false || recomExtraCuatro !== false) {
  let otrosDiv = document.getElementById('div-otros');
  if (otrosDiv) {
    otrosDiv.style.display = 'block';
  }
}
let footerDiv = document.getElementById('footer-recom');
footerDiv.style.display = 'block'

let checkup = document.getElementById(recomendacion);
checkup.style.display = 'block';
submitSection.style.display = 'none'; 
//-----------Asignar a inputs ocultos
document.getElementById("edadCalculada").value = age;
document.getElementById("imcCalculado").value = estatusImc;
document.getElementById("recomFinal").value = recomendacion;

} else {
      e.preventDefault();
      // Si los campos de nombre y correo están vacíos
      alert('Por favor, asegurate de que tu nombre, correo y teléfono estén bien escritos');
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
      
      return;
    }
    if (mes < 1 || mes > 12) {
      
      return;
    }
    if (year < 1900 || year > new Date().getFullYear()) {
      
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
