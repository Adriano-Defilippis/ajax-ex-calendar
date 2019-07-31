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
  var monthformattato = month.format("MMMM");

  var dayOfMounth = date.date(7);
  var dayOfMounthformattato = dayOfMounth.format("DD");

  var dayOfWeek = dayOfMounth.format("dddd");


  // var month = date.calendar();

  // var day = month.format()

  // console.log(date);
  console.log("Mese esaminato: ", monthformattato , month);
  console.log("Giorno del mese: ",dayOfMounthformattato,dayOfMounth);
  console.log("Giorno della settimana: ",dayOfWeek);



});
