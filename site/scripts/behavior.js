 $('span.nav-home').click( (e) => {
   $('section').hide();
   $('section.sec-home').show();
 });

 $('span.nav-hm').click( (e) => {
   $('section').hide();
   $('section.sec-hm').show();
 });

 $('span.nav-img').click( (e) => {
   $('section').hide();
   $('section.sec-img').show();
 });

 $('span.nav-anim').click( (e) => {
   $('section').hide();
   $('section.sec-anim').show();
 });

 $('span.nav-about').click( (e) => {
   $('section').hide();
   $('section.sec-about').show();
 });

 $('nav span').click( (e) => {
   $('nav span').removeClass("selected");
   $(e.currentTarget).addClass("selected");
 })

 $('span.nav-home').click();

$(document).ready( (e) => {
  if(location.hash && location.hash.charAt(0) === '#'){
    const data = location.hash.substring(1).split(";").map( (e) => e.split("=")).reduce( (a,e) => {a[e[0]] = e[1]; return a;}, {});
    
    if(["eng", "rus", "bel"].includes(data["lang"])){
      $(".btn-" + data["lang"]).click();
    } else {
      $(".btn-rus").click();
    }
    
    if(["home", "hm", "img", "anim", "about"].includes(data["sec"])){
      $("span.nav-" + data["sec"]).click();
    } else {
      $("span.nav-home").click();
    }
  }
});

