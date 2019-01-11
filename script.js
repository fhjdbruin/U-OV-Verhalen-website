    var buttonbefore = document.querySelector("#before");
    var buttonafter = document.querySelector("#after");
    var form = document.querySelector('form');

 	before.addEventListener('click', function(){
     form.classList.toggle('push');
     buttonbefore.classList.toggle('before');
     buttonafter.classList.toggle('after');
    });

