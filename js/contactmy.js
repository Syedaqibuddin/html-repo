
        var app = angular.module('myApp', []);
        app.controller('namesCtrl', function ($scope) {});



var myform = $("form#contactForm");
var successMessage = $("#success");
var failureMessage = $("#failure");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  // var template_id = "template_WbEuaGVk";
  var template_id= "template_K8SknBg8";
  var validate = 0;

  if(params.contactName == ''){
    myform.find("#errorName").show();
  }else{
    myform.find("#errorName").hide();
    validate++;
  }

  if(params.contactNumber == ''){
    myform.find("#errorNumber").show();
    myform.find("#errorIfNotNumber").hide();
  }else{
    myform.find("#errorNumber").hide();
    validate++;
  }

  if((!$.isNumeric(params.contactNumber)) && (params.contactNumber != '')){
    myform.find("#errorIfNotNumber").show();
  }else{
    myform.find("#errorIfNotNumber").hide();
    validate++;
  }

  if(params.contactEmail == ''){
    myform.find("#errorEmail").show();
  }else{
    myform.find("#errorEmail").hide();
    validate++;
  }

  if(params.enterSubject == ''){
    params.enterSubject = 'None';
  }

  if(params.contactMsg_value == ''){
    params.contactMsg_value = 'User has entered no message!';
  }

  if(validate != 4){
      validate = 0;
      return;
  }

  myform.find(".button").text("Submitting...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){
        myform.find(".button").text("Submit");
        successMessage.show();
        myform.hide();
     }, function(err) {
        myform.find(".button").text("Submit");
        console.log("Send email failed!\r\n Response:\n " +JSON.stringify(err));
        failureMessage.show();
        myform.hide();
    });

  return false;
});

function backToForm(){
    var myform = $("form#contactForm");
    var successMessage = $("#success");
    var failureMessage = $("#failure");

    myform.show();
    failureMessage.hide();
    successMessage.hide();

    myform.find("#contactName").val('');
    myform.find("#contactNumber").val('');
    myform.find("#contactEmail").val('');
 myform.find("#enterSubject").val('');
    myform.find("#contactMsg").val('');
}


emailjs.send('user_OmzFcFvTXeLQ4N4oekkgp', 'template_K8SknBg8', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });


    var data = {
      service_id: 'gmail',
      template_id: 'template_K8SknBg8',
      user_id: 'user_OmzFcFvTXeLQ4N4oekkgp',
      template_params: {
          'username': ' Arshana',
          ' mobile-number':'7994583134',
          'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
  };
   
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });