(function(){
  var overlay = document.getElementById('wishOverlay');
  var phucOverlay = document.getElementById('phucOverlay');
  var text = document.getElementById('wishText');
  document.querySelectorAll('.lantern-container').forEach(function(el){
    el.addEventListener('click', function(e){
      if(el.id === 'lantern-phuc') {
        phucOverlay.style.display = 'flex';
      } else {
        var wish = el.getAttribute('data-wish');
        text.textContent = wish || '';
        overlay.classList.add('active');
      }
    });
  });
  overlay.addEventListener('click', function(e){ if(e.target === overlay) overlay.classList.remove('active'); });
  phucOverlay.addEventListener('click', function(e){ if(e.target === phucOverlay) phucOverlay.style.display = 'none'; });
  document.addEventListener('keydown', function(e){ 
    if(e.key === 'Escape') {
      overlay.classList.remove('active');
      phucOverlay.style.display = 'none';
    }
  });
})();

(function(){
  var audio = document.getElementById('bgm');
  if(!audio) return;
  try{
    if(audio.muted) audio.muted = false;
    if(audio.volume === 0) audio.volume = 0.6;
    if(audio.paused) audio.play().catch(function(){});
  }catch(e){}
})();

(function(){
  var audio = document.getElementById('bgm');
  var btn = document.getElementById('audioToggleBtn');
  if(!audio || !btn) return;

  function updateBtn() {
    btn.textContent = audio.muted || audio.paused ? '🔇' : '🔈';
  }

  btn.addEventListener('click', function() {
    if(audio.paused) {
      audio.muted = false;
      audio.volume = 0.6;
      audio.play().catch(function(){});
    } else {
      audio.muted = !audio.muted;
    }
    updateBtn();
  });

  setTimeout(function(){
    if(audio.paused || audio.muted) {
      updateBtn();
      audio.muted = false;
      audio.volume = 0.6;
      audio.play().then(function(){
        updateBtn();
      }).catch(function(){
        audio.muted = true;
        updateBtn();
      });
    } else {
      updateBtn();
    }
  }, 1000);

  updateBtn();
})();


(function createStars(){
  const scene = document.querySelector('.scene');
  if(!scene) return;
  const starCount = 60;
  for(let i=0; i<starCount; i++){
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random()*100 + 'vw';
    star.style.top = Math.random()*100 + 'vh';
    const size = Math.random()*2+1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = (Math.random()*6) + 's';
    scene.appendChild(star);
  }
})();
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

