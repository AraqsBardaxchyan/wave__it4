const modal=document.querySelector('#modal_tel'),
  bodyOverflow=document.querySelector('body');
    document.querySelector('#open__modal').addEventListener('click',()=>{
      modal.classList.remove('d-none');
      modal.classList.add('d-flex');
      bodyOverflow.style.overflow = 'hidden';
    })
    document.querySelector('#modal_tel').addEventListener('click',()=>{
      modal.classList.remove('d-flex');
      modal.classList.add('d-none');
      bodyOverflow.removeAttribute('style');
    });
jQuery(function($){
   $("#phone").mask("+7 (999) 999-9999");

});