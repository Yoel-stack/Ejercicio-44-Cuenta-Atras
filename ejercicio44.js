/*
 * EJERCICIO:
 * ¡El 12 de noviembre lanzo mouredev pro!
 * El campus de la comunidad para estudiar programación de
 * una manera diferente: https://mouredev.pro
 *
 * Crea un programa que funcione como una cuenta atrás.
 *
 * - Al iniciarlo tendrás que indicarle el día, mes, año,
 *   hora, minuto y segundo en el que quieres que finalice.
 * - Deberás transformar esa fecha local a UTC.
 * - La cuenta atrás comenzará y mostrará los días, horas,
 *   minutos y segundos que faltan.
 * - Se actualizará cada segundo y borrará la terminal en
 *   cada nueva representación del tiempo restante.
 * - Una vez finalice, mostrará un mensaje.
 * - Realiza la ejecución, si el lenguaje lo soporta, en
 *   un hilo independiente.
 */



const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

//Fecha de finalizacion cuenta atras
const cumple = `3 Jul 2025` 

function cuentaAtras(){
    const cumpleDate = new Date(cumple);
    const fechaActual = new Date();
    const totalSec = (cumpleDate - fechaActual) / 1000;

    const totalDays = Math.floor(totalSec / 3600 / 24);
    const totalHours = Math.floor(totalSec / 3600) % 24;
    const totalMinutes = Math.floor(totalSec / 60) % 60;
    const totalSeconds = Math.floor(totalSec % 60);

    console.log(totalDays, totalHours, totalMinutes, totalSeconds);

    days.innerHTML = totalDays;
    hours.innerHTML = totalHours;
    minutes.innerHTML = totalMinutes;
    seconds.innerHTML = totalSeconds;

};
cuentaAtras(setInterval(cuentaAtras, 1000));

