function sprawdzPole(pole_id,obiektRegex) {
    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    //---------------------------------
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}
// function sprawdz_radio(nazwa_radio){
//     //Funkcja sprawdza czy wybrano przycisk radio
//     //z grupy przycisków o nazwie nazwa_radio
//     //---------------------------------------
//     var obiekt=document.getElementsByName(nazwa_radio);
//     for (i=0;i<obiekt.length;i++){ 
//         wybrany=obiekt[i].checked;
//         if (wybrany) return true; 
//     }
//     return false;
// }
// function sprawdz_box(box_id)
// {
//     //Funkcja sprawdza czy przycisk typu checkbox
//     //o identyfikatorze box_id jest zaznaczony
//     //----------------------------------------
//     var obiekt=document.getElementById(box_id);
//     if (obiekt.checked) return true;
//     else return false;
// }
function sprawdz()
{ 
    var ok=true; 
    obiektName = /^[a-zA-Z]{2,20}$/;
    obiektSurname = /^[a-zA-Z]{2,20}$/; 
    obiektEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    obiektNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    // obiektWiek=/^[1-9][0-9]{1,2}$/;
    if (!sprawdzPole("name",obiektName)){ 
        ok=false;
        document.getElementById("name_error").innerHTML= "Wpisz poprawnie imie!";
    }
    else document.getElementById("name_error").innerHTML="";
    
    if (!sprawdzPole("surname",obiektName)){ 
        ok=false;
        document.getElementById("surname_error").innerHTML= "Wpisz poprawnie nazwisko!";
    }
    else document.getElementById("surname_error").innerHTML="";
    // if (!sprawdzPole("wiek",obiektWiek)){ 
    //     ok=false;
    //     document.getElementById("wiek_error").innerHTML= "Wpisz poprawniy wiek!";
    // }
    // else document.getElementById("wiek_error").innerHTML="";
    
    if (!sprawdzPole("email",obiektEmail)){ 
        ok=false;
        document.getElementById("email_error").innerHTML= "Wpisz poprawny email!";
    }
    else document.getElementById("email_error").innerHTML="";
    
    if (!sprawdzPole("tel",obiektNum)){ 
        ok=false;
        document.getElementById("tel_error").innerHTML= "Wpisz poprawny telefon!";
    }
    else document.getElementById("tel_error").innerHTML="";
    // if(!(sprawdz_box("php") || sprawdz_box("java") || sprawdz_box("c"))){
    //     ok=false;
    //     document.getElementById("produkt_error").innerHTML= "Nic nie zaznaczono!";
    // }
    // else document.getElementById("produkt_error").innerHTML="";
    
    // if(!sprawdz_radio("zaplata")){
    //     ok=false;
    //     document.getElementById("zaplata_error").innerHTML= "Nic nie zaznaczono!";
    // }
    // else document.getElementById("zaplata_error").innerHTML="";
    if(ok){
       var dane="Następujące dane zostaną wysłane:\n";
       dane+="Name: "+document.getElementById('name').value+"\n";
       dane+="Surname: "+document.getElementById('surname').value+"\n"; 
       dane+="Email: " +document.getElementById('email').value+"\n";
       dane+="Telefon: "+document.getElementById('tel').value+"\n";
       confirm(dane);
       
        var item = {};
        var name = document.getElementById("name");
        var surname = document.getElementById("surname");
        var email = document.getElementById("email");
        var tel = document.getElementById("tel");
        item.name = name.value;
        item.surnmae = surname.value;
        item.email = email.value;
        item.tel = tel.value;
        var list = JSON.parse(localStorage.getItem('user'));
        if (list === null) list = []
        list.push(item);
        localStorage.setItem('user', JSON.stringify(list))
    }
    return ok;
}