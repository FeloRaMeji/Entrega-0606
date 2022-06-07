alert(' \tBienvenido a seguros Cheee!!! \t \n \tEstamos para protegerte \t\n\t ◄ De ♥ Desde el ♥ ►\t\n Por favor ingrese los datos a continuación');
//*Creación variables contacto
let nam3 = prompt('Ingrese su nombre: ');
let lastName = prompt('Ingrese su apellido: ');
//*Creación variable que lista el pedido con cada producto seleccionado
let preOreder = (`Hola ${nam3} ${lastName} Gracais por elegir a seguros Cheee!!! Estamos para protegerte ◄ De ♥ Desde el ♥ ► Tu pedido es: \n `);
//*Ciclo de control en el menú de compra
do {
    //?Creación de menú de productos -Por opción tiene datos de entrada función-
    insurance = prompt(' \tSeleccione la opción que desea cotizar:\t \n 1 → VehiSeguro \n 2 → VidaSegura \n 3 → MascoSeguro \n 4 → EmpleSeguro \n 5 → HogarSguro');
    menuInsurance(insurance); //Funcion menú de compra
    
    if (item != 0) {
        preOreder += (`\n\t${item}\t `); //Se lista 
    }
    flag = prompt('Para cotizar otro seguro digite "s" → Sí o digite "n" → No para ver el resumen de la compra');
} while (flag.toLowerCase() === 's');
alert(`${preOreder}`);
console.warn(preOreder);
//? Creación funcion MENÚ y funciones que calcula cada opción
function menuInsurance(insur) { //* Menú Switch
    switch (insur) {
        case '1':
            veicleModel = prompt('Ingrese el modelo del vehiculo: ');
            veicleValue = prompt('Ingrese el valor en el que esta avaludao su vehiculo:');
            carInsurance(veicleModel, veicleValue);
            break;
        case '2':
            valueLife = prompt(" Recuerda que puedes asegurate desde $8'000.000 \n Ingrese el valor a asegurar:\n (Sin puntos ni comas)");
            actualyAge = prompt('Ingresa tu edad: ');
            numPre = prompt('Ingres el númro de enfermedades que padecio o padece, de la siguiente lista:\n \t   → Cancer | 2 → Tiroides | 3 → Leucemia\t \n  \t   → Cancer | 2 → Tiroides | 3 → Leucemia\t \n \t   → Cancer | 2 → Tiroides | 3 → Leucemia\t \n ');
            lifeInsurance(valueLife, actualyAge, numPre);
            break;
        case '3':
            agePet = prompt('Ingrese la edad de la mascota: ');
            petInsurance(agePet);
            break;
        case '4':
            workTime = prompt(' Ingrese el tiempo en la actual Empresa: \n En meses.');
            factType = prompt(' Ingrese tipo de contrato: \n Digite Fijo o Indefinido');
            //* Validación de string estricto
            while (factType.toLowerCase() !== 'fijo' && factType.toLowerCase() !== 'indefinido') {
                factType = prompt('\t¡ERROR!\t \n Ingrese tipo de contrato: \n Digite Fijo o Indefinido');
            }
            factType = factType.toLowerCase();
            jobInsurance(workTime, factType);
            break;
        case '5':
            houseValue = prompt(' Ingrese el Avaluo de la vivenda: \n sin puntos ni comas: ');
            homeInsurance(houseValue);
            break;
        default:
            alert(`Por favor ${nam3} ingrese un dígito del menu.`);
            item = 0;
            console.log(typeof(item));
            break;
    }   
}
//* 1 → car Insurance
function carInsurance(vModel, vValue) {
    if (vModel >= '2020') {
        if (vValue >= 150) {
            item = (`Seguro Car, Full de modelo 2020: ${vModel} Avaluo Mayor: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`Seguro Car, Full de modelo 2020: ${vModel} Avaluo Medio: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`Seguro Car, Full de modelo 2020: ${vModel} Avaluo Actual: ${vValue}`);
        } else {
            item = (`mSeguro Car, Full de modelo 2020: ${vModel} Avaluo Bajo: ${vValue}`);
        }
    } else if (vModel < '2020' && vModel >= '2015') {
        if (vValue >= 150) {
            item = (`Seguro Car, Medio de modelo 1999 - 2015: ${vModel} Avaluo Mayor: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`Seguro Car, Medio de modelo 1999 - 2015: ${vModel} Avaluo Medio: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`Seguro Car, Medio de modelo 1999 - 2015: ${vModel} Avaluo Actual: ${vValue}`);
        } else {
            item = (`Seguro Car, Medio de modelo 1999 - 2015: ${vModel} Avaluo Bajo: ${vValue}`);
        }
    } else if (vModel < '2015' && vModel >= '2010') {
        if (vValue >= 150) {
            item = (`Seguro Car, Bajo de modelo 2014 - 2010: ${vModel} Avaluo Mayor: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`Seguro Car, Bajo de modelo 2014 - 2010: ${vModel} Avaluo Medio: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`Seguro Car, Bajo de modelo 2014 - 2010: ${vModel} Avaluo Actual: ${vValue}`);
        } else {
            item = (`Seguro Car, Bajo de modelo 2014 - 2010: ${vModel} Avaluo Bajo: ${vValue}`);
        }
    } else if (vModel < '2010' && vModel >= '2005') {
        if (vValue >= 150) {
            item = (`Seguro Car, Bajo de modelo 2005 - 2009: ${vModel} Avaluo Mayor: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`Seguro Car, Bajo de modelo 2005 - 2009: ${vModel} Avaluo Medio: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`Seguro Car, Bajo de modelo 2005 - 2009: ${vModel} Avaluo Actual: ${vValue}`);
        } else {
            item = (`Seguro Car, Bajo de modelo 2005 - 2009: ${vModel} Avaluo Bajo: ${vValue}`);
        }
    } else if (vModel < '2005' && vModel >= '2000') {
        if (vValue >= 150) {
            item = (`Seguro Car, Retoma de modelo 2005 - 2009: ${vModel} Avaluo Mayor: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`Seguro Car, Retoma de modelo 2005 - 2009: ${vModel} Avaluo Medio: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`Seguro Car, Retoma de modelo 2005 - 2009: ${vModel} Avaluo Actual: ${vValue}`);
        } else {
            item = (`Seguro Car, Retoma de modelo 2005 - 2009: ${vModel} Avaluo Bajo: ${vValue}`);
        }
    } else {
        item = (`No aseguramos vehiculos de modelos anteriores a 2000`)
    }
    return (item);
}
//* 2 → life Insurance
function lifeInsurance(vLife, aAge, nPre) {
    if (nPre < 3 || aAge <= 60) {
        cutoa = (vLife / 4)/12
        item = (`Su seguro de ${vLife} tiene una cuota de : ${cuota}`)
    } else {
        item = (`No puede adquieir el seguro ya que no cumple condiciones${vLife}`)
    }
    return (item);
}
//* 3 → pet Insurance
function petInsurance(aPet) {
    cuota = 20
    if (aPet > 10) {
        item = (`Seguro Mascotas Mayores, de edad ${aPet}, Valor cuota ${cuota}`);
    } else if (aPet >= 6) {
        cuota -= 3
        item = (`Seguro Mascotas Adultos, de edad ${aPet}, Valor cuota ${cuota}`);
    } else {
        cuota -= 5
        item = (`Seguro Mascotas Jovnes, de edad ${aPet}, Valor cuota ${cuota} `);
    }
    return (item);
}
//* 4 → Job Insurance
function jobInsurance(wTime, fType) {
    cuota = 20
    if (wTime > 6) {
        if (fType === 'indefinido') {
            item = (`Seguro  Desempleo, contrato termino ${fType}, Valor cuota ${cuota}`);
        } else {
            if (wTime > 12) {
                Cuota = cuota - 2;
                item = (`Seguro  Desempleo, contrato termino ${fType}, Valor cuota ${cuota}`);
            } else {
                cuota = cuota - 4;
                item = (`Seguro  Desempleo, contrato termino ${fType}, Valor cuota ${cuota}`);
            }
        }
    } else {
        item = (`Debes tener minimo 6 mese de contrato, contactanos en ${12 - wTime }.`);
    }
    return (item);
}
//* 5 → home Insurance
function homeInsurance(value) {
    if (value > 200) {
        value = value*0.1
        cuota = value / 4
        item = (`Seguro Hogar Superior, Valor de cobertura ${value}, Valor cuota ${cuota}`);
    } else if (value > 100 && value <= 200) {
        value = value*0.3
        cuota = value / 4
        item = (`Seguro Hogar Medio, Valor de cobertura ${value}, Valor cuota ${cuota}`);
    } else {
        value = value*0.5
        cuota = value / 4
        item = (`Seguro Hogar Bajo, Valor de cobertura ${value}, Valor cuota ${cuota}`);
    }
    return (item);
}