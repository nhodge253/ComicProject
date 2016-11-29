

if($('.check-media').width() == 768){
    console.log('You are in (max-width: 768px)');
}else{
    console.log('You are out of (max-width: 768px)');
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "sf-menu") {
        x.className += " responsive";
    } else {
        x.className = "sf-menu";
    }
}
