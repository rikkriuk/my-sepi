// SOUND EFFECTS
const sfxBubble = document.getElementById('sfxBubble');
const sfxVine = document.getElementById('sfxVine');

function playSoundEffect(audio) {
   if (!audio) return;
   audio.currentTime = 0;
   audio.play();
}

document.addEventListener('click', function(e) {
   const ignore = e.target.closest('.overlay-close, .overlay, .splash-btn');
   if (!ignore) playSoundEffect(sfxBubble);
});

const SAPI_LIST = [
   {
      id: 'aurochs',
      icon: '🦬',
      name: 'Aurochs',
      tag: '⚡ Ancient Alpha',
      stats: ['🦴 Tinggi: 2m', '🌿 Habitat: Eurasia', '☠️ Status: Punah'],
      desc: 'Nenek moyang semua sapi modern. Badannya gede, tanduknya panjang, dan auranya intimidatif banget. Kalau lewat padang rumput, semua langsung minggir.',
   },
   {
      id: 'purba',
      icon: '🦕',
      name: 'Sapinosaurus',
      tag: '🗿 Fossil Tier',
      stats: ['🦴 Berat: 3 Ton', '🌋 Era: Prasejarah', '🕰️ Umur: 65 jt thn'],
      bestSeller: true,
      desc: 'Sapi legendaris dari zaman purba. 65 jt tahun lalu dia menggema meninggalkan jejak kakinya bisa jadi kolam kecil.',
   },
   {
      id: 'bali',
      icon: '🐂',
      name: 'Sapi Bali',
      tag: '🌴 Local Legend',
      stats: ['🌾 Diet: Rumput tropis', '💪 Tenaga: Kuat', '☀️ Adaptasi: Mantap'],
      desc: 'Sapi asli Indonesia yang tahan banting dan pekerja keras. Kalem di luar, kuat di sawah :v.',
   },
   {
      id: 'limousin',
      icon: '🥩',
      name: 'Sapi Limousin',
      tag: '💎 Premium Beef',
      stats: ['📍 Asal: Prancis', '💪 Otot: Tebal', '🍖 Kualitas: Sultan'],
      desc: 'Sapi dengan body goals paling serius. Ototnya kelihatan bahkan pas lagi diem.',
   },
   {
      id: 'holstein',
      icon: '🥛',
      name: 'Sapi Holstein',
      tag: '🥛 Milk Factory',
      stats: ['🥛 Produksi: 35L/hari', '⚫ Corak: Hitam putih', '😌 Mood: Santuy'],
      desc: 'CEO dunia persusuan. Kerjanya ngasih susu berkualitas sambil pose aesthetic di padang rumput.',
   },
   {
      id: 'kampung',
      icon: '🌾',
      name: 'Sapi Kampung',
      tag: '🏡 Wholesome',
      stats: ['💪 Tenaga: Kuat banget', '🌻 Sifat: Hangat', '🍃 Kerja: Bajak sawah'],
      desc: 'Sapi paling bisa diandalkan. Bangun pagi, kerja keras, dan vibes-nya selalu bikin adem.',
   },
   {
      id: 'sapian',
      icon: '🕴️',
      name: 'Sapi Sapian',
      tag: '🧠 Manipulative',
      bestSeller: true,
      stats: ['💬 Skill: Gaslighting', '📱 Hobi: Last seen hilang', '🚩 Red flag: Banyak'],
      desc: 'Kayaknya Anda, si :v',
   },
   // {
   // id: 'astronot',
   // icon: '🚀',
   // name: 'Sapi Astronot',
   // tag: '🌌 Galactic',
   // stats: ['🌕 Habitat: Orbit', '🛸 Speed: Warp 9', '🥛 Susu: Zero gravity'],
   // desc: 'Sapi pertama yang berhasil mooo di luar angkasa. Helmnya anti tumpah dan vibes-nya NASA banget.',
   // },
   {
      id: 'sapiens',
      icon: '👨‍💼',
      name: 'Sapi-ens',
      tag: '📊 Corporate Species',
      bestSeller: true,
      stats: ['☕ Kopi: 5 gelas/hari', '📅 Mood: Senin terus', '💻 Skill: “Noted kak”'],
      desc: 'Makhluk modern yang hidupnya penuh side quest. Pagi mikirin kerjaan, malam revisi skripsi, akhir bulan panik lihat saldo. Katanya “gapapa capek sekarang demi masa depan”, padahal masa depannya juga capek.',
   },
   {
      id: 'robot',
      icon: '🤖',
      name: 'Sapi Robot',
      tag: '⚙️ Cyber Moo',
      stats: ['🔋 Power: Nuklir mini', '⚡ Mode: Auto farming'],
      desc: 'Di masa depan sapi sudah berevolusi jadi robot. Dia bisa ngurusin ladang, ngasih susu, bahkan ngasih saran hidup..',
   },
   {
      id: 'kaiju',
      icon: '🔥',
      name: 'Sapi Kaiju',
      tag: '☢️ Boss Monster',
      stats: ['🏙️ Tinggi: 50m', '🔥 Napas: Lava', '📢 Mooo: Gempa 6 SR'],
      desc: 'Cocok untuk peternak daging.',
   },
];

const CAT_IMAGES = [
   './assets/image-1.jpg',
   './assets/image-2.jpg',
   './assets/image-3.jpg',
   './assets/image-4.jpg',
   './assets/image-5.jpg',
];

// STATE
let noCount = 0;
let nextThreshold = randomThreshold();
let imageIndex = 0;
let selectedSapi = null;

const btnNo   = document.getElementById('btnNo');
const btnRow  = document.getElementById('btnRow');
const hintEl  = document.getElementById('hintText');

// HELPERS
function randomThreshold() { return Math.random() < .5 ? 2 : 3; }

// MUSIC (Audio file)
let musicPlaying = false;
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

function startMusic() {
   if (!bgMusic) return;
   bgMusic.currentTime = 10;
   bgMusic.play();
   musicPlaying = true;
   if (musicBtn) musicBtn.textContent = '🔊';
}

function stopMusic() {
   if (!bgMusic) return;
   bgMusic.pause();
   musicPlaying = false;
   if (musicBtn) musicBtn.textContent = '🎵';
}

function toggleMusic() {
   if (musicPlaying) stopMusic();
   else startMusic();
}

function enterSite() {
  document.getElementById('splash').classList.add('hidden');
  startMusic();
}

// BTN ENGGA — KABUR
btnNo.style.left = '160px';
btnNo.style.top  = '0px';

function dodgeNo() {
   playSoundEffect(sfxBubble);
   btnNo.style.position = 'absolute';

   const maxX = btnRow.offsetWidth - 120;
   let nx;

   do {
      nx = Math.random() * maxX + 10;
   } while (
      Math.abs(nx - parseFloat(btnNo.style.left || 0)) < 40
   );

   btnNo.style.left = nx + 'px';
   btnNo.style.top  = (Math.random() > .5 ? -52 : 62) + 'px';

   const teases = [
      'Parah klik engga',
      'Jadi sapi enak padahal',
      'Apalagi jadi sapi di Swiss',
      'Makan, turu sambil liatin pegunungan Alpen',
      'Ya walaupun akhirnya jadi daging juga si',
      'Wkwkwk...',
      'Yaudahlah',
      'Yang bener aja klik engga semuanya',
      'Klik mww',
   ];

   const nick = getIGNick() || 'dia';

   if (noCount < teases.length) {
      hintEl.innerHTML =
         `<span class="hint-nick">${nick}</span>${teases[noCount]}`;

      hintEl.classList.add('visible');
      noCount++;
      return;
   }

   const img = document.getElementById('modalImg');

   img.src = CAT_IMAGES[imageIndex % CAT_IMAGES.length];

   imageIndex++;

   document.getElementById('imgModal').classList.add('active');
   playSoundEffect(sfxVine);
}

// HANDLE ENGGA — show image modal cycling
function handleNo() {
   noCount++;

   if (noCount < nextThreshold) {
      const teases = [
         'Yakin engga? 🥺', 'Beneran?? 😢', 'Coba dipikir lagi... 🙈',
         'Masa iya engga sih 😤', 'Hmm... 🤔', 'Nih napas dulu 😤',
      ];
      hintEl.textContent = teases[Math.min(noCount - 1, teases.length - 1)];
      return;
   }

   hintEl.textContent = '';
   noCount = 0;
   nextThreshold = randomThreshold();

   const img = document.getElementById('modalImg');
   img.src = CAT_IMAGES[imageIndex % CAT_IMAGES.length];
   imageIndex++;
   document.getElementById('imgModal').classList.add('active');
   playSoundEffect(sfxVine);
}

// HANDLE MWW — show sapi picker
function handleYes() {
   playSoundEffect(sfxBubble);
   buildSapiGrid();
   document.getElementById('overlayYes').classList.add('active');
}

function buildSapiGrid() {
   const grid = document.getElementById('sapiGrid');
   grid.innerHTML = '';
   SAPI_LIST.forEach(sapi => {
      const el = document.createElement('div');
      el.className = 'sapi-item' + (sapi.bestSeller ? ' best-seller' : '');
      el.innerHTML = `
         ${sapi.bestSeller ? '<div class="bs-badge">⭐ Rekomendasi Sapi</div>' : ''}
         <span class="sapi-icon">${sapi.icon}</span>
         <div class="sapi-name">${sapi.name}</div>
         <div class="sapi-tag">${sapi.tag}</div>
      `;
      el.onclick = () => showSapiInfo(sapi);
      grid.appendChild(el);
   });
}

// SAPI INFO MODAL
function showSapiInfo(sapi) {
   selectedSapi = sapi;
   document.getElementById('infoEmoji').textContent  = sapi.icon;
   document.getElementById('infoTitle').textContent  = sapi.name;
   document.getElementById('infoDesc').textContent   = sapi.desc;

   const statsEl = document.getElementById('infoStats');
   statsEl.innerHTML = sapi.stats.map(s => `<span class="sapi-stat">${s}</span>`).join('');

   document.getElementById('overlayInfo').classList.add('active');
}

// HANDLE PILIH → redirect to IG
function getIGNick() {
  const search = window.location.search.slice(1);
  if (search && !search.includes('=')) return search;
  const path = window.location.pathname.split('/').filter(Boolean).pop();
  return path || '';
}

// OVERLAY UTILS
function closeOverlay(id) {
   playSoundEffect(sfxBubble);
   document.getElementById(id).classList.remove('active');
}

// CONFETTI & HEARTS
function spawnConfetti() {
   const colors = ['#f59e0b','#fbbf24','#10b981','#3b82f6','#ec4899','#f43f5e','#a78bfa'];
   for (let i = 0; i < 40; i++) {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.cssText = `
         left:${Math.random()*100}vw; top:-12px;
         background:${colors[Math.floor(Math.random()*colors.length)]};
         animation-duration:${0.9+Math.random()*1.4}s;
         animation-delay:${Math.random()*0.6}s;
         width:${8+Math.random()*8}px; height:${8+Math.random()*8}px;
         border-radius:${Math.random()>.5?'50%':'2px'};
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2500);
   }
}

function spawnHearts() {
   const emojis = ['🐄','💛','🌙','❤️','✨','🎉'];
   for (let i = 0; i < 6; i++) {
      const h = document.createElement('div');
      h.className = 'heart-anim';
      h.textContent = emojis[i % emojis.length];
      h.style.cssText = `left:${10+i*14}%; bottom:120px; animation-delay:${i*0.18}s;`;
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 2000);
   }
}

function handlePilih() {
   if (!selectedSapi) return;

   const nick = getIGNick() || 'dia';

   const text =
      `Hallo, Saya ${selectedSapi.name} (sapi) 🐄\n`;

   const encodedText = encodeURIComponent(text);

   const igUsername = nick;

   const url = `https://ig.me/m/${igUsername}?text=${encodedText}`;

   playSoundEffect(sfxBubble);

   window.open(url, '_blank');
}