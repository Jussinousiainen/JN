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
    for (i = x.length-1; i >= 0; i--) {
      text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
} 

function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    
    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText('50', 10, 300);
    
    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    ctx.fillText('200', 40, 200);
    
    ctx.lineTo(60, 250);
    ctx.fillText('250', 60, 250);
    
    ctx.lineTo(80, 200);
    ctx.fillText('200', 80, 200);
    
    ctx.lineTo(100, 210);
    ctx.fillText('210', 100, 210);
    
    ctx.lineTo(120, 230);
    ctx.fillText('230', 120, 230);
    
    ctx.lineTo(140, 250);
    ctx.fillText('250', 140, 250);
    
    ctx.lineTo(160, 190);
    ctx.fillText('190', 160, 190);
    
    ctx.lineTo(180, 200);
    ctx.fillText('200', 180, 200);
    
    ctx.lineTo(200, 205);
    ctx.fillText('205', 200, 205);
    
    ctx.lineTo(225, 150);
    ctx.fillText('150', 225, 150);
    
    //vaaka
    ctx.fillText('200', 40, 300);
    ctx.fillText('250', 60, 300);
    ctx.fillText('300', 80, 300);
    ctx.fillText('350', 100, 300);
    ctx.fillText('400', 120, 300);
    ctx.fillText('450', 140, 300);
    ctx.fillText('500', 160, 300);
    ctx.fillText('550', 180, 300);
    ctx.fillText('600', 200, 300);
    ctx.fillText('650', 220, 300);

    //pysty
    ctx.fillText('600', 10, 100);
    ctx.fillText('550', 10, 120);
    ctx.fillText('500', 10, 140);
    ctx.fillText('450', 10, 160);
    ctx.fillText('400', 10, 180);
    ctx.fillText('350', 10, 200);
    ctx.fillText('300', 10, 220);
    ctx.fillText('250', 10, 240);
    ctx.fillText('200', 10, 260);

    ctx.stroke();
    }
