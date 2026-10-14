(function(){
  var l='';try{l=localStorage.getItem('omd-site-lang')||''}catch(e){}
  if(!l)l=/^de/i.test(navigator.language||'')?'de':'en';
  function set(x){document.documentElement.lang=x;try{localStorage.setItem('omd-site-lang',x)}catch(e){}
    var b=document.getElementById('lang');if(b)b.textContent=x==='de'?'EN':'DE';}
  set(l);
  document.addEventListener('click',function(e){if(e.target.id==='lang'){set(document.documentElement.lang==='de'?'en':'de');}});
})();
