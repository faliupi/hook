(async()=>{if(document.getElementById("meet-monitor-popup"))return;const n="popup_count",s=(await chrome.storage.local.get([n]))[n]||0;chrome.storage.local.set({[n]:s+1});const e=document.createElement("div");e.id="meet-monitor-popup",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.background="rgba(0, 0, 0, 0.5)",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.zIndex="999999";let a=30;const l=setInterval(()=>{const o=document.getElementById("countdown-label");o&&(o.textContent=`Pop-up akan hilang dalam ${a} detik...`),a<=0&&(clearInterval(l),r()),a--},1e3);e.innerHTML=`
    <div style="
      background: white;
      border-radius: 10px;
      padding: 30px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      text-align: center;
      font-family: 'Segoe UI', sans-serif;
      box-sizing: border-box;
    ">
      <h2 style="color: maroon; margin-bottom: 10px;">⚠️ PERHATIAN</h2>
      <p style="margin-bottom: 20px;">Kamu terdeteksi keluar dari Google Meet.<br>Harap segera kembali ke ruang kelas.</p>
      <button id="close-popup-btn" style="
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease;
      ">Saya akan kembali</button>
      <p id="countdown-label" style="margin-top: 10px; font-size: 12px; color: gray;">Pop-up akan hilang dalam 30 detik...</p>
    </div>
  `,document.body.appendChild(e);const r=()=>{const o=document.getElementById("meet-monitor-popup");o&&o.remove(),clearInterval(l)},t=document.getElementById("close-popup-btn");t.addEventListener("click",r),t.addEventListener("mouseenter",()=>{t.style.padding="12px 24px",t.style.fontSize="15px",t.style.backgroundColor="#218838"}),t.addEventListener("mouseleave",()=>{t.style.padding="10px 20px",t.style.fontSize="14px",t.style.backgroundColor="#28a745"})})();
