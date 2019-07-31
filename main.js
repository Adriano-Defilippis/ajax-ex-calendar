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
  var month = date.month(1).format("MMMM");

  // var day = month.date(1);


  // var month = date.calendar();

  // var day = month.format()

  // console.log(date);
  console.log("Mese esaminato: ", month);
  // console.log("Giorno del mese: ",day);


});
