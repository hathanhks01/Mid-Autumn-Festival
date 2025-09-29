(function(){
  var overlay = document.getElementById('wishOverlay');
  var text = document.getElementById('wishText');
  function openWish(msg){ text.textContent = msg || ''; overlay.classList.add('active'); }
  function closeWish(){ overlay.classList.remove('active'); }
  document.querySelectorAll('.lantern-container').forEach(function(el){
    if(el.classList.contains('special-fb')){
      el.addEventListener('click', function(e){
        var msg = el.getAttribute('data-wish') || 'Chúc Trung Thu vui vẻ!';
        openWish(msg);
        setTimeout(function(){
         window.location.href = "https://www.instagram.com/w._.iiiii/";
        }, 3000);
      });
    }else{
      el.addEventListener('click', function(e){
        var msg = el.getAttribute('data-wish') || 'Chúc Trung Thu vui vẻ!';
        openWish(msg);
      });
    }
  });
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeWish(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeWish(); });
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

// Nút bật/tắt audio với kiểm tra trạng thái khi load
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

  // Khi trang vừa load, nếu audio bị chặn thì để nút ở trạng thái tắt
  setTimeout(function(){
    if(audio.paused || audio.muted) {
      updateBtn();
      // Thử bật lại audio sau 1s
      audio.muted = false;
      audio.volume = 0.6;
      audio.play().then(function(){
        updateBtn();
      }).catch(function(){
        // Nếu vẫn bị chặn, giữ trạng thái tắt
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