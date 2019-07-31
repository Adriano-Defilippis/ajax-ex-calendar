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

  //Conto i giorni nel mese in questione
  var contogiorni = month.daysInMonth();
  console.log("Giorni nel mese: ", contogiorni);


  //Ciclo chi in base ai giorni contati stampa una lista
  //con anche il giorno della settimana relativo per il Mese in esame
  for (var i = 1; i <= contogiorni; i++) {
    //Estrapolo dall'oggeto month il la data del giorno con il ciclo
    var dayOfMounth = month.date(i);
    console.log(dayOfMounth.format("DD"));

    //DAll'oggetto del giorno del mese,
    //Estrapolo il nome del giorno
    //formatto il giorno della settimana,  e lo aggiungo nell'append
    var dayOfWeek = month.date(i);
    console.log("Giorni della settimana: ", dayOfWeek.format("dddd"));

    //Memorizzo in una variabile il formato data per confronto
    //oggetto da chiamata Ajax
    var dateFormat = month.date(i).format("YYYY-MM-DD");

    $('.mounth').append(dayOfMounth.format("DD"), " ", dayOfWeek.format("dddd"), " ", month.date(i).format("YYYY-MM-DD") , "<br>");


  }

  console.log($(".mounth"));

  //Richiamo l'api per conoscere le festività
  //tramite l'oggetto di ritorno
  var apiJannuary = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0";

  $.ajax({

    url: apiJannuary,
    method: "GET",
    success: function(data){

      var feste = data.response;
      console.log("Responso da chiamata ajax ", feste);


      $.each(feste, function(index, val){

        var thisEl = $(this);
        console.log(thisEl);

        var nomeFesta = val.name;
        console.log(nomeFesta);

        var dataFesta = val.date;
        console.log(dataFesta);

      });

      // feste.each(function(){
      //
      //   $(this).val;
      //   console.log($(this).val);
      //
      // });
    },
    error: function(error){
      alert("Rilevato errore: ", error);
    }


  });



});//DOCUMENTY READY


// funzione che inserisce il mese restituito
