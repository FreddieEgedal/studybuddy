//GOD DAG TEKST


    const hour = new Date().getHours();
    let greeting;

    if (hour < 18) {
        greeting = "God dag! Udfyld felterne og få løst dit problem";
    } else {
        greeting = "God aften! Udfyld felterne og få løst dit problem";
    }

    document.getElementById("demo").innerHTML = greeting;


    //DROPDOWN KATEGORI
    let opretArray = new Array("HTML", "CSS", "Javascript", "UI/UX");

    let dropdown = document.getElementById("vælgKategori");

    for (let i = 0; i < opretArray.length; ++i) {
        dropdown[dropdown.length] = new Option(opretArray[i], opretArray[i]);
    }


//ALERT
function beskedsendt() {
    console.log("Har trykket");
    let response = ["Udfyld felt", "Din besked er sendt!"];
    let empt = document.form1.Titel.value;
    if (empt === "")
    {
    alert( response[0] );
    return false;
    }
    else
    {
    alert( response[1] );
    return true;
    }
    }