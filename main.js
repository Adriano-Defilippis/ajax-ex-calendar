$(document).ready(function(){

  // STEP DA SEGUIRE (non specificato nel doc):
  //  Fare solo gennaio stampando la lista senza aggiungere le festività
  //  Aggiungere le festività a Gennaio
  //  Dare la possibilità di cambiare il mese

  //salvo in una variabile l'oggetto di ritorno
  //dell' anno che ci interessa eseminare
  var date = moment([2018]);

  //Estrapolo dall'anno, l'oggetto del mese
  //0=Gennaio
  var month = date.month(0);
  //Mese formattato nel formato a lettere e per intero
  var monthformattato = month.format("MMMM");
  //Inserisco il Mese in pagina nell'H1
  $("#mese").text(monthformattato);

  console.log("Mese esaminato: ", monthformattato , month);

  var contogiorni = month.daysInMonth();
  console.log("Giorni nel mese: ", contogiorni);




  //Ciclo chi in base ai giorni contati stampa una lista
  //con anche il giorno della settimana relativo per il Mese in esame
  for (var i = 1; i <= contogiorni; i++) {
    //Estrapolo dall'oggeto month il la data del giorno
    var dayOfMounth = month.date(i).format("DD");
    console.log(dayOfMounth);

    //DAll'oggetto del giorno del mese,
    //Estrapolo il nome del giorno
    //formatto il giorno della settimana,  e lo aggiungo nell'append
    var dayOfWeek = month.date(i).format("dddd");
    console.log("Giorni della settimana: ", dayOfWeek);

    $('.mounth').append(dayOfMounth, " ", dayOfWeek,"<br>");


  }



});


// funzione che inserisce il mese restituito
