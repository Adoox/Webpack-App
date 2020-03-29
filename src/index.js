const $ = require("jquery");

//$(".login-form").hide();

$(".login-form").hide();
$(".main-box").removeClass("toggle-class");

$("#toggle-btn").click(function() {
  $(".login-form").show(1000);
});

$("#yes1").hide();
$("#yes2").hide();
$("#yes3").hide();
$("#yes4").hide();

$("#no1").hide();
$("#no2").hide();
$("#no3").hide();
$("#no4").hide();

$("#login-btn").click(function(e) {
  //funkcija kojom provjeravamo da li je forma ispravno popunjena
  var fname = document.getElementById("f_name").value;
  var lname = document.getElementById("l_name").value;
  let messages = [];

  if ($("#f_name").val() === "") {
    $("#no1").show();
    $("#yes1").hide();
  } else {
    $("#yes1").show();
    $("#no1").hide();
  }

  if ($("#l_name").val() === "") {
    $("#no2").show();
    $("#yes2").hide();
  } else {
    $("#yes2").show();
    $("#no2").hide();
  }

  if ($("#email").val() === "") {
    $("#no3").show();
    $("#yes3").hide();
  } else {
    $("#yes3").show();
    $("#no3").hide();
  }

  if ($("#psw").val() === "") {
    $("#no4").show();
    $("#yes4").hide();
  } else {
    $("#yes4").show();
    $("#no4").hide();
  }

  if (
    $("#f_name").val() === "" ||
    $("#l_name").val() === "" ||
    $("#email").val() === "" ||
    $("#psw").val() == ""
  ) {
    alert("Ooops, something is required. Check your input!");
  } else {
    alert(
      "Welcome, " + fname + " " + lname + ". You are successfully logged in!"
    );
  }
});
