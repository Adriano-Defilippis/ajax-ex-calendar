//Codice

$(document).ready(function(){

  // STEP DA SEGUIRE (non specificato nel doc):
  //  Fare solo gennaio stampando la lista senza aggiungere le festività
  //  Aggiungere le festività a Gennaio
  //  Dare la possibilità di cambiare il mese


  //salvo in una variabile l'oggetto di ritorno
  //dell' anno che ci interessa eseminare
  var date = moment([2020]);

//Creo un ciclo che mi genera la funzione per 12 volte
//0ssia per i 12 mesi
for (var i = 0; i < 12; i++) {
  var tostring = i.toString();

  //PARAMETRI : Oggeto moment2018, mese con indice ciclato, stringa
  //per passare parametro all'URI dell'API di Boolean
  aggiungimesi(date, date.month(i), tostring);

}

  //Attivo la classe active solo al primo mese
  $(".wrapper").children().first().addClass("active");

  var prev = $('#prev');
  var next = $("#next");

  next.click(function(){

    if ($(".mounth.active").hasClass("December")) {
      $(".mounth.active").removeClass("active placeholder");
      $('.wrapper').children().first().addClass("active");
    }else{
      $(".mounth.active").next().addClass("active placeholder");
      $(".mounth.placeholder").prev().removeClass("active placeholder");

    }

  });

  prev.click(function(){

    if ($(".mounth.active").hasClass("January")) {
      $(".mounth.active").removeClass("active placeholder");
      $('.wrapper').children().last().addClass("active");
    }else{
      $(".mounth.active").prev().addClass("active placeholder");
      $(".mounth.placeholder").next().removeClass("active placeholder");

    }

  });

});//DOCUMENTY READY










// funzione da còiclare per 12 mesi
function aggiungimesi (date, month, parametro){

  //Richiamo l'api per conoscere le festività
  //tramite l'oggetto di ritorno
  //Mese Gennaio (parmetro URI)
  var apiJannuary = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=" + parametro;

  //Mese formattato nel formato a lettere e per intero
  var monthformattato = month.format("MMMM-YYYY");
  var monthrif =  month.format("MMMM");
  //Inserisco il Mese in pagina nell'H1 e nel contenitore clonato del Mese
  var mesediv = $('#mioT2 .mounth').clone();
  mesediv.addClass(monthrif);
  var appendnomemese =mesediv.append("<h1>" + monthformattato + "<h1>");


  $("body .wrapper").append(appendnomemese);
  mesediv.off();
  $('#mioT2 .mounth').text("");

  // $("#mese").text(monthformattato);

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

    //Aggiungo un template fatto con handlebars per creare
    //il template per il calendario, e per aggiungere classi
    //o attributi

    //Inserisco template per creare dvi giorni all'interno del Mese
    var source = $("#templateDayOfMonth").html();
    var template = Handlebars.compile(source);

    var context = {
                    classDayBox: "giorni",
                    addAttribute: dateFormat,
                    date: dayOfMounth.format("DD"),
                    day: dayOfWeek.format("dddd")
                  }

    var html = template(context);

if (mesediv.hasClass(monthrif)) {
  mesediv.append(html);
}
    // $('.mounth').append(html);


  }
  console.log("mounth.date(i)" , dayOfMounth);
  $.ajax({

    url: apiJannuary,
    method: "GET",
    success: function(data){

      var feste = data.response;
      console.log("Responso da chiamata ajax ", feste);

      //Ciclo all'interno dell'array di oggetti Json
      $.each(feste, function(index, val){
        //Salvo questo elemento ciclato
        var thisEl = $(this);
        console.log(thisEl);
        //Recupero il nome della festa
        var nomeFesta = val.name;
        console.log(nomeFesta);
        //e la sua data
        var dataFesta = val.date;
        console.log(dataFesta);


        var arrGiorni = $(".mounth .giorni");
        if ($('.mounth').hasClass(monthrif)) {


        // console.log("aarGiorni", arrGiorni);
        $.each(arrGiorni, function(index, val){

          // var day = $(this).hasAttr("valdata");

          var thisday = $(this);
          // console.log("Attr day" ,thisday);

          if (thisday.attr("valdata") === dataFesta) {
            var spanClone = $("#mioTemplate .festa").clone();
            var nuovoEl = spanClone.append(nomeFesta);
            $(this).append(nuovoEl);
            $( this ).css({
                          "background-color": "yellow",
                          "font-weight": "bolder",
                          "color": "red"
                          });
          }

        });
      }

      });


    },
    error: function(error){
      alert("Rilevato errore: ", error);
    }


  });


    console.log($(".mounth"));


}
