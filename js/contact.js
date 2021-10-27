// $(document).ready(function(){
    
//     (function($) {
//         "use strict";

    
//     jQuery.validator.addMethod('answercheck', function (value, element) {
//         return this.optional(element) || /^\bcat\b$/.test(value)
//     }, "type the correct answer -_-");

//     // validate contactForm form
//     $(function() {
//         $('#contactForm').validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2
//                 },
//                 subject: {
//                     required: true,
//                     minlength: 4
//                 },
//                 number: {
//                     required: true,
//                     minlength: 5
//                 },
//                 email: {
//                     required: true,
//                     email: true
//                 },
//                 message: {
//                     required: true,
//                     minlength: 20
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "come on, you have a name, don't you?",
//                     minlength: "your name must consist of at least 2 characters"
//                 },
//                 subject: {
//                     required: "come on, you have a subject, don't you?",
//                     minlength: "your subject must consist of at least 4 characters"
//                 },
//                 number: {
//                     required: "come on, you have a number, don't you?",
//                     minlength: "your Number must consist of at least 5 characters"
//                 },
//                 email: {
//                     required: "no email, no message"
//                 },
//                 message: {
//                     required: "um...yea, you have to write something to send this form.",
//                     minlength: "thats all? really?"
//                 }
//             },
//             submitHandler: function(form) {
//                 $(form).ajaxSubmit({
//                     type:"POST",
//                     data: $(form).serialize(),
//                     url:"contact_process.php",
//                     success: function() {
//                         $('#contactForm :input').attr('disabled', 'disabled');
//                         $('#contactForm').fadeTo( "slow", 1, function() {
//                             $(this).find(':input').attr('disabled', 'disabled');
//                             $(this).find('label').css('cursor','default');
//                             $('#success').fadeIn()
//                             $('.modal').modal('hide');
// 		                	$('#success').modal('show');
//                         })
//                     },
//                     error: function() {
//                         $('#contactForm').fadeTo( "slow", 1, function() {
//                             $('#error').fadeIn()
//                             $('.modal').modal('hide');
// 		                	$('#error').modal('show');
//                         })
//                     }
//                 })
//             }
//         })
//     })
        
//  })(jQuery)
// })

// var myform = $("form#contactForm");
// var successMessage = $("#success");
// var failureMessage = $("#failure");
// myform.submit(function(event){
// 	event.preventDefault();

// 	var params = myform.serializeArray().reduce(function(obj, item) {
//      obj[item.name] = item.value;
//      return obj;
//   }, {});

//   // Change to your service ID, or keep using the default service
//   var service_id = "gmail";
//   // var template_id = "template_WbEuaGVk";
//   var template_id= "template_K8SknBg8";
//   var validate = 0;

//   if(params.contactName == ''){
//     myform.find("#errorName").show();
//   }else{
//     myform.find("#errorName").hide();
//     validate++;
//   }

//   if(params.contactNumber == ''){
//     myform.find("#errorNumber").show();
//     myform.find("#errorIfNotNumber").hide();
//   }else{
//     myform.find("#errorNumber").hide();
//     validate++;
//   }

//   if((!$.isNumeric(params.contactNumber)) && (params.contactNumber != '')){
//     myform.find("#errorIfNotNumber").show();
//   }else{
//     myform.find("#errorIfNotNumber").hide();
//     validate++;
//   }

//   if(params.contactEmail == ''){
//     myform.find("#errorEmail").show();
//   }else{
//     myform.find("#errorEmail").hide();
//     validate++;
//   }

//   if(params.selectedProduct == ''){
//     params.selectedProduct = 'None';
//   }

//   if(params.contactMsg_value == ''){
//     params.contactMsg_value = 'User has entered no message!';
//   }

//   if(validate != 4){
//       validate = 0;
//       return;
//   }

//   myform.find(".button").text("Submitting...");
//   emailjs.send(service_id, template_id, params)
//   	.then(function(){
//         myform.find(".button").text("Submit");
//         successMessage.show();
//         myform.hide();
//      }, function(err) {
//         myform.find(".button").text("Submit");
//         console.log("Send email failed!\r\n Response:\n " +JSON.stringify(err));
//         failureMessage.show();
//         myform.hide();
//     });

//   return false;
// });

// function backToForm(){
//     var myform = $("form#contactForm");
//     var successMessage = $("#success");
//     var failureMessage = $("#failure");

//     myform.show();
//     failureMessage.hide();
//     successMessage.hide();

//     myform.find("#contactName").val('');
//     myform.find("#contactNumber").val('');
//     myform.find("#contactEmail").val('');
//     myform.find("#selectedSubject").val('');
//     myform.find("#contactMsg").val('');
// }


// emailjs.send('user_OmzFcFvTXeLQ4N4oekkgp', 'template_K8SknBg8', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });


//     var data = {
//       service_id: 'gmail',
//       template_id: 'template_K8SknBg8',
//       user_id: 'user_OmzFcFvTXeLQ4N4oekkgp',
//       template_params: {
//           'username': 'James',
//           'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//       }
//   };
   
//   $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//       type: 'POST',
//       data: JSON.stringify(data),
//       contentType: 'application/json'
//   }).done(function() {
//       alert('Your mail is sent!');
//   }).fail(function(error) {
//       alert('Oops... ' + JSON.stringify(error));
//   });