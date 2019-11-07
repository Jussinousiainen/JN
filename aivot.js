function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        // toiminnallisuus puuttuu!
         document.getElementById("laatikko2").innerHTML = "<table style='width:100%'>" +
         "<tr>"+
            "<th>etunimi</th>"+
            "<th>sukunimi</th>"+
            "<th>Age</th>"+
         "</tr>"+
         "<tr>"+
            "<td>jussi</td>"+
            "<td>nousiainen</td>"+
            "<td>17</td>"+
         "</tr>"+
         "<tr>"+
            "<td>patrik</td>"+
            "<td>räsänen</td>"+
            "<td>17</td>"+
         "</tr>"+
        "</table>";    
        //toiminnallisuus puuttuu!
    }
    else if (boxNumber == 3){
         document.getElementById("laatikko3").innerHTML = "<img src='smiley2.png'>";
        //toiminnallisuus puuttuu!
    }
    else{
        document.location.reload();
    }
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
} 
