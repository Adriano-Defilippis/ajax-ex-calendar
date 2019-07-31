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
  //Estrapolo dall'oggeto month il la data del giorno
  var dayOfMounth = month.date(7);
  //la formatto
  var dayOfMounthformattato = dayOfMounth.format("DD");
  //DAll'oggetto del giorno del mese,
  //formatto il giorno della settimana
  var dayOfWeek = dayOfMounth.format("dddd");


  console.log("Mese esaminato: ", monthformattato , month);
  console.log("Giorno del mese: ",dayOfMounthformattato,dayOfMounth);
  console.log("Giorno della settimana: ",dayOfWeek);



});
