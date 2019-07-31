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




  //Estrapolo dall'oggeto month il la data del giorno
  var dayOfMounth = month.date(7);
  //la formatto
  var dayOfMounthformattato = dayOfMounth.format("DD");
  console.log("Giorno del mese: ",dayOfMounthformattato,dayOfMounth);

  //DAll'oggetto del giorno del mese,
  //formatto il giorno della settimana
  var dayOfWeek = dayOfMounth.format("dddd");
  console.log("Giorno della settimana: ",dayOfWeek);

  //Ciclo chi in base ai giorni contati stampa una lista
  //con anche il giorno della settimana relativo per il Mese in esame
  for (var i = 1; i <= contogiorni; i++) {
    month.date(i).format("DD");
    $('.mounth').append(month.date(i).format("DD"),"<br>");
    console.log(month.date(i).format("DD"));
  }



});


// funzione che inserisce il mese restituito
