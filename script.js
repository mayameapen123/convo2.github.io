


$(".q").on("mouseenter",function(){
$("audio").css("opacity","0.2");

});

$(".q").on("mouseleave",function(){
$("audio").css("opacity","1");

});

$(".num2").on("click",function(){
$(this).css("opacity","1");
$(".num1").css("opacity","0.2");
$(".num3").css("opacity","0.2");
$('.K p').text('I never learned how to speak English. Only Kannada, Telugu, Tamil');
$('.M p').text('I learned how to communicate in English in my school');
$('.N p').text('I learned how to speak a little English in school, only very little');
$('.Mu p').text('I didn not go to school so I could not learn English');
$('.quest1').hide();
$('.quest2').show();
$('.quest2').css("opacity","1");
$('.quest3').css("opacity","0");

var krissy_question2 = "KQ2.mp4";

var nir = "NQ2.mp4";
var mal = "AQ2.mp4";

$('.Krissy').attr('src', krissy_question2);

$('.Nirmala').attr('src', nir);

$('.Mallu').attr('src', mal);
});

$(".num3").on("click",function(){
$(".num3").css("opacity","1");
$(".num2").css("opacity","0.2");
$(".num1").css("opacity","0.2");
$('.K p').text('I message using the Kannada keypad');
$('.M p').text('I message in English, sometimes in Malayalam if needed');
$('.N p').text('I do not text, I only call on the phone');
$('.Mu p').text('I message in Tamil but prefer phone calls');
$('.quest2').hide();
$('.quest3').show();
$('.quest3').css("opacity","1");

var krissy_question2 = "KQ3.mp4";

var nir = "NQ3.mp4";
var mal = "AQ3.mp4";

$('.Krissy').attr('src', krissy_question2);

$('.Nirmala').attr('src', nir);

$('.Mallu').attr('src', mal);
});

$(".num1").on("click",function(){
$(this).css("opacity","1");
$(".num2").css("opacity","0.2");
$(".num3").css("opacity","0.2");
$('.K p').text('I message using the Kannada keypad');
$('.M p').text('I message in English, sometimes in Malayalam if needed');
$('.N p').text('I do not text, I only call on the phone');
$('.Mu p').text('I message in Tamil but prefer phone calls');
$('.quest2').css("opacity","0");
$('.quest3').css("opacity","0");
$('.quest1').css("opacity","1");
$('.quest1').show();
var krissy_question2 = "KQ1.mp4";

var nir = "NQ1.mp4";
var mal = "AQ1.mp4";

$('.Krissy').attr('src', krissy_question2);

$('.Nirmala').attr('src', nir);

$('.Mallu').attr('src', mal);
});
