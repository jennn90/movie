 const movies = [
    {title:"Inception",year:2010,rating:9.1,genre:"Sci-Fi, Thriller",director:"Christopher Nolan",cast:"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",synopsis:"A skilled thief who steals secrets through dream-sharing technology is given a chance at redemption: plant an idea in a target's subconscious.",img:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",trailer:"https://www.youtube.com/embed/YoHD9XEInc0"},
    {title:"Interstellar",year:2014,rating:8.9,genre:"Sci-Fi, Drama",director:"Christopher Nolan",cast:"Matthew McConaughey, Anne Hathaway, Jessica Chastain",synopsis:"A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",img:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"},
    {title:"The Dark Knight",year:2008,rating:9.3,genre:"Action, Crime",director:"Christopher Nolan",cast:"Christian Bale, Heath Ledger, Aaron Eckhart",synopsis:"Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and DA Harvey Dent — until the Joker unleashes chaos.",img:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"},
    {title:"Parasite",year:2019,rating:8.6,genre:"Thriller, Drama",director:"Bong Joon-ho",cast:"Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",synopsis:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",img:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",trailer:"https://www.youtube.com/embed/Q38h5XD4RKE"},
    {title:"Pulp Fiction",year:1994,rating:8.9,genre:"Crime, Drama",director:"Quentin Tarantino",cast:"John Travolta, Uma Thurman, Samuel L. Jackson",synopsis:"The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",img:"https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",trailer:"https://www.youtube.com/embed/s7kH1WYp_j8"},
    {title:"The Godfather",year:1972,rating:9.2,genre:"Crime, Drama",director:"Francis Ford Coppola",cast:"Marlon Brando, Al Pacino, James Caan",synopsis:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",img:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",trailer:"https://www.youtube.com/embed/sY1S34973zA"},
    {title:"Spirited Away",year:2001,rating:8.6,genre:"Animation, Fantasy",director:"Hayao Miyazaki",cast:"Rumi Hiiragi, Miyu Irino, Mari Natsuki",synopsis:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and witches.",img:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",trailer:"https://www.youtube.com/embed/fDUFP7EeXLE"},
    {title:"The Matrix",year:1999,rating:8.7,genre:"Sci-Fi, Action",director:"The Wachowskis",cast:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",synopsis:"A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",img:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",trailer:"https://www.youtube.com/embed/m8e-FF8MsqU"}
  ];

  // Render gallery
  const grid = document.getElementById('movie-grid');
  movies.forEach((m,i)=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${m.img}" alt="${m.title} poster" loading="lazy"
           onerror="this.src='https://via.placeholder.com/300x450/1c2435/ffb800?text=${encodeURIComponent(m.title)}'">
      <div class="info">
        <h3>${m.title}</h3>
        <div class="meta">${m.year} · ⭐ ${m.rating}</div>
      </div>`;
    card.addEventListener('click',()=>openModal(i));
    grid.appendChild(card);
  });

  // Modal
  const modal = document.getElementById('modal');
  function openModal(i){
    const m = movies[i];
    document.getElementById('m-img').src = m.img;
    document.getElementById('m-title').textContent = m.title;
    document.getElementById('m-rating').textContent = `⭐ ${m.rating} / 10`;
    document.getElementById('m-synopsis').textContent = m.synopsis;
    document.getElementById('m-genre').textContent = m.genre;
    document.getElementById('m-year').textContent = m.year;
    document.getElementById('m-director').textContent = m.director;
    document.getElementById('m-cast').textContent = m.cast;
   document.getElementById('m-trailer').src = m.trailer;
    modal.classList.add('open');
  }
document.getElementById('closeModal').onclick = ()=>{
  modal.classList.remove('open');
  document.getElementById('m-trailer').src = "";
};
  modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

  // Show more / less
  const aboutBtn = document.getElementById('toggleAbout');
  const aboutExtra = document.getElementById('about-extra');
  aboutBtn.onclick = ()=>{
    aboutExtra.classList.toggle('show');
    aboutBtn.textContent = aboutExtra.classList.contains('show') ? 'Show Less' : 'Show More';
  };

  // Back to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll',()=>{
    toTop.classList.toggle('show', window.scrollY > 400);
  });
  toTop.onclick = ()=>window.scrollTo({top:0,behavior:'smooth'});

  // Reviews
  const form = document.getElementById('reviewForm');
  const list = document.getElementById('reviews-list');
  const seedReviews = [
    {name:"Maya R.",movie:"Interstellar",rating:5,comment:"Visually breathtaking and emotionally devastating. Hans Zimmer's score is unmatched."},
    {name:"Jordan T.",movie:"Parasite",rating:5,comment:"A perfect film. Every frame serves the story — sharp, funny, and brutal."}
  ];
  function renderReview(r){
    const div = document.createElement('div');
    div.className = 'review';
    div.innerHTML = `
      <div class="head">
        <strong>${escapeHtml(r.name)}</strong>
        <span class="stars">${'⭐'.repeat(r.rating)}</span>
      </div>
      <div style="color:var(--muted);font-size:.85rem;margin-bottom:6px">on <em>${escapeHtml(r.movie)}</em></div>
      <p>${escapeHtml(r.comment)}</p>`;
    list.prepend(div);
  }
  function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  seedReviews.forEach(renderReview);

  form.addEventListener('submit',e=>{
    e.preventDefault();
    const r = {
      name: document.getElementById('name').value.trim(),
      movie: document.getElementById('movie').value.trim(),
      rating: parseInt(document.getElementById('rating').value),
      comment: document.getElementById('comment').value.trim()
    };
    if(!r.name||!r.movie||!r.rating||!r.comment) return;
    renderReview(r);
    form.reset();
  });

  