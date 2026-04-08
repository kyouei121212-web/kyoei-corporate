(function(){
  // Mobile menu
  var ham=document.getElementById('ham');
  var mob=document.getElementById('mob');
  if(ham&&mob){
    ham.addEventListener('click',function(){
      ham.classList.toggle('open');
      mob.classList.toggle('open');
      document.body.style.overflow=mob.classList.contains('open')?'hidden':'';
    });
    mob.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        ham.classList.remove('open');
        mob.classList.remove('open');
        document.body.style.overflow='';
      });
    });
  }

  // Scroll: nav style + totop
  var nav=document.getElementById('nav');
  var totop=document.getElementById('totop');
  var heroEl=document.getElementById('heroSection');

  function onScroll(){
    var sy=window.scrollY||window.pageYOffset;
    if(totop) totop.classList.toggle('show', sy>400);

    if(heroEl){
      var heroH=heroEl.offsetHeight;
      if(sy > heroH*0.85){
        nav.classList.remove('nav--hero-visible');
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.add('nav--hero-visible');
        nav.classList.remove('nav--scrolled');
      }
    } else {
      nav.classList.add('nav--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Reveal on scroll
  function initReveal(){
    var els=document.querySelectorAll('.rv:not(.vis)');
    if(!els.length) return;
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('vis'); obs.unobserve(en.target); }
      });
    },{threshold:0.1, rootMargin:'0px 0px -20px 0px'});
    els.forEach(function(el){ obs.observe(el); });
  }
  initReveal();

  // Contact form validation (enhance native)
  var form=document.querySelector('form[data-netlify]');
  if(form){
    form.addEventListener('submit',function(e){
      var cb=document.getElementById('privCheck');
      if(cb&&!cb.checked){
        e.preventDefault();
        alert('個人情報の取り扱いへの同意が必要です。');
        return false;
      }
    });
  }
})();
