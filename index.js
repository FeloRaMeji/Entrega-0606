alert(' \tBienvenido a seguros Cheee!!! \t \n \tEstamos para protegerte \t\n\t ◄ De ♥ Desde el ♥ ►\t\n Por favor ingrese los datos a continuación');
//Creación variables contacto
let nam3 = prompt('Ingrese su nombre: ');
let lastName = prompt('Ingrese su apellido: ');
//Creación variable que lista el pedido con cada producto seleccionado
let preOreder = (`Hola ${nam3} ${lastName} Gracais por elegir a seguros Cheee!!! Estamos para protegerte ◄ De ♥ Desde el ♥ ► Tu pedido es: \n `);
//Ciclo de control en el menú de compra
do {
    //Creación de menú de productos -Por opción tiene datos de entrada función-
    insurance = prompt(' \tSeleccione la opción que desea cotizar:\t \n 1 → VehiSeguro \n 2 → VidaSegura \n 3 → MascoSeguro \n 4 → EmpleSeguro \n 5 → HogarSguro');
    menuInsurance(insurance); //Funcion menú de compra
    if (item != 0) {
        preOreder += (`\n\t${item}\t`); //Se lista 
    }
    flag = prompt('Para cotizar otro seguro digite "s" → Sí o digite "n" → No para ver el resumen de la compra');
} while (flag.toLowerCase() === 's');
alert(preOreder);
console.warn(preOreder);
// Creación funcion MENÚ y funciones que calcula cada opción
function menuInsurance(insur) { //Menú Switch
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
            //Validación de string estricto
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
// 1 → car Insurance
function carInsurance(vModel, vValue) {
    if (vModel >= '2020') {
        if (vValue >= 150) {
            item = (`modelo1: ${vModel} precio1: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`modelo1: ${vModel} precio2: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`modelo1: ${vModel} precio3: ${vValue}`);
        } else {
            item = (`modelo1: ${vModel} precio4: ${vValue}`);
        }
    } else if (vModel < '2020' && vModel >= '2015') {
        if (vValue >= 150) {
            item = (`modelo2: ${vModel} precio1: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`modelo2: ${vModel} precio2: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`modelo2: ${vModel} precio3: ${vValue}`);
        } else {
            item = (`modelo2: ${vModel} precio4: ${vValue}`);
        }
    } else if (vModel < '2015' && vModel >= '2010') {
        if (vValue >= 150) {
            item = (`modelo3: ${vModel} precio1: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`modelo3: ${vModel} precio2: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`modelo3: ${vModel} precio:3 ${vValue}`);
        } else {
            item = (`modelo3: ${vModel} precio4: ${vValue}`);
        }
    } else if (vModel < '2010' && vModel >= '2005') {
        if (vValue >= 150) {
            item = (`modelo4: ${vModel} precio1: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`modelo4: ${vModel} precio2: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`modelo4: ${vModel} precio3: ${vValue}`);
        } else {
            item = (`modelo4: ${vModel} precio4: ${vValue}`);
        }
    } else if (vModel < '2005' && vModel >= '2000') {
        if (vValue >= 150) {
            item = (`modelo5: ${vModel} precio1: ${vValue}`);
        } else if (vValue < 150 && vValue >= 90) {
            item = (`modelo5: ${vModel} precio2: ${vValue}`);
        } else if (vValue < 90 && vValue >= 50) {
            item = (`modelo5: ${vModel} precio3: ${vValue}`);
        } else {
            item = (`modelo5: ${vModel} precio4: ${vValue}`);
        }
    } else {
        item = (`No aseguramos vehiculos de modelos anteriores a 2000`)
    }
    return (item);
}
// 2 → life Insurance
function lifeInsurance(vLife, aAge, nPre) {
    if (nPre < 3 && aAge <= 60) {
        item = (`Puede adquirir cualquier seguro`)
    } else {
        item = (`No puede adquieir el seguro ya que no cumple condiciones${vLife}`)
    }
    return (item);
}
// 3 → pet Insurance
function petInsurance(aPet) {
    if (aPet > 10) {
        item = (`Mas caro ${aPet}`);
    } else if (aPet >= 6) {
        item = (`Moderado ${aPet}`);
    } else {
        item = (`Economico ${aPet}`);
    }
    return (item);
}
// 4 → Job Insurance
function jobInsurance(wTime, fType) {
    if (wTime > 6) {
        if (fType === 'indefinido') {
            item = (`Asegurado fijo ${fType}`);
        } else {
            if (wTime > 12) {
                item = (`Asegurado promedio ${fType}`);
            } else {
                item = (`Asegurado minimo ${fType}`);
            }
        }
    } else {
        item = ('Debes tener minimo 6 mese de contrato.');
    }
    return (item);
}
//5 → home Insurance
function homeInsurance(value) {
    if (value > 200) {
        item = (`Avaluo mayor: ${value}`);
    } else if (value > 100 && value <= 200) {
        item = (`Avaluo medio: ${value}`);
    } else {
        item = (`Avaluo bajo: ${value}`);
    }
    return (item);
}