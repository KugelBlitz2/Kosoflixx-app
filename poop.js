const movies = [
  {
    id: "1Xym8LFMBXlMv9bhMpNLK4_24aeLV8fjq",
    title: "Harry Potter and the Goblet of Fire",
    image: "img/Goblet_of_Fire_Film_Poster.jpg",
  },
  {
    id: "1ngKo8yR3pRbYbofElog40_qT-9Q4MBLJ",
    title: "Harry Potter and the Chamber of Secrets",
    image: "img/2002.jpg",
  },
  {
    id: "18IaEQ2Lb7drbYzjGIvFv1cN-61whYQCf",
    title: "Harry Potter and the Order of Phoenix",
    image: "img/2007.jpg",
  },
  {
    id: "1l55BV7SO0GyoG8sdB5gC6FS5MU63FAo7",
    title: "Harry Potter and the Half Blood Prince",
    image: "img/2009.jpg",
  },
  {
    id: "1zbfPLn3zbYv3_ijObyMm5GG4b9Toi_pu",
    title: "The Hobbit: The Desolation of Smaug",
    image: "img/hobbit2013.jpg",
  },
  {
    id: "1eePs9j_9CVKOVRB0YpA6-_UE3LUk0bVV",
    title: "The Hobbit: The Battle of the Five Armies",
    image: "img/hobbit2014.jpg",
  },
  {
    id: "1zf8JzwTlN0i7OwtO439tdtXrgVlVrhdt",
    title: "Harry Potter and the Deathly Hallows: Part 1",
    image: "img/2010.jpg",
  },
  {
    id: "16n8dHk85IwqBYhIQY1Jy5iGe4Hd27quB",
    title: "Harry Potter and the Deathly Hallows: Part 2",
    image: "img/2011.jpg",
  },
];

const tvShows = [
  {
    id: "show1",
    title: "Ben 10 Alien Force (2008)",
    image: "img/ben10.webp",
    seasons: [
      {
        number: 1,
        episodes: [
          { id: "1M1vLhNK-4myX1kuoIbVJjKpyYl2qhJ4q", title: "Episode 1" },
          { id: "1Srz0L2YnVI8uHUSBb5DRxpouQE0sVB29", title: "Episode 2" },
          { id: "1g7Xmqe1CYIhOzBgmAggmnjHIMcCOJeaI", title: "Episode 3" },
        ],
      },
      {
        number: 2,
        episodes: [
          { id: "1Gy2D9Mc2Mtsrt34ob5OZXwLlau0wcxfM", title: "Episode 1" },
          { id: "1fdv4cj8SsnO72hXn7Svk-WD75yH96Z0U", title: "Episode 2" },
        ],
      },
    ],
  },
  {
    id: "show2",
    title: "Teenage Mutant Ninja Turtles",
    image: "img/tmnt.jpg",
    seasons: [
      {
        number: 1,
        episodes: [
          { id: "1CPFceJizFmaYp-vUlVWoSKSxRHnDMZ4U", title: "Episode 1" },
          { id: "1n4xAtdtBN3TWIzu4BF9gaaks9Q3SHeKi", title: "Episode 2" },
        ],
      },
      {
        number: 2,
        episodes: [
          { id: "1f7VFrx-WB4Z0vEDDPA4wKfMsKzQzJ3D0", title: "Episode 1" },
          { id: "1RI6TTYnPTtC4sAKhkpg25qiN3oinh4Yl", title: "Episode 2" },
        ],
      },
    ],
  },
  {
    id: "show3",
    title: "The Ice Age",
    image: "img/ia.jpg",
    seasons: [
      {
        number: 1,
        episodes: [
          { id: "1UX00vCCTGdp6Usy9_1oEAi0V9WRTSaRf", title: "Episode 1" },
          { id: "16Wha1QDZZGhGO8zy5Zo1NkdF5an0dUWE", title: "Episode 2" },
        ],
      },
      {
        number: 2,
        episodes: [
          { id: "1kowFldatYLqXmL_Vl0EONGdPqgvGUhV4", title: "Episode 1" },
          { id: "13GC0x_5LI0UrHWaiyPbgefKwYalDM9v2", title: "Episode 2" },
        ],
      },
    ],
  },
  {
    id: "show4",
    title: "Percy Jackson and the Olympians",
    image: "img/percy.jpg",
    seasons: [
      {
        number: 1,
        episodes: [
          { id: "16-Ky4HSWGnL58qh86OOETX4PNvSaBEtm", title: "Episode 1" },
          { id: "1kvgbkhXrQlopDaMKnrywYbKcIBnQ5Q_G", title: "Episode 2" },
        ],
      },
      {
        number: 2,
        episodes: [
          { id: "1Jrw1I-EsHrCgY0b0O5SBPcCjqn-ENq_U", title: "Episode 1" },
          { id: "1jVNY5L3eRRK_ZkDasyr0yzU3ONYc4QeJ", title: "Episode 2" },
        ],
      },
    ],
  },
  {
    id: "show5",
    title: "Lego Ninjago",
    image: "img/nin.jpg",
    seasons: [
      {
        number: 1,
        episodes: [
          { id: "1t2h_D04qZqhP6UJlDgCAoNAxcFwUsI9d", title: "Episode 1" },
          { id: "11aPI2F8HcKPNqnEmdfaUyR-2t7E59XWi", title: "Episode 2" },
        ],
      },
      {
        number: 2,
        episodes: [
          { id: "1lLZg-1k1c1P4Wc1lyb2oDSzzRfFCSXba", title: "Episode 1" },
          { id: "1kvdpWO4q7D1z-9_5bUpWFohZUHq4yHav", title: "Episode 2" },
        ],
      },
      {
        number: 3,
        episodes: [
          { id: "1xXswgBJQLVBerExCVYUYXgtO5z6vii-G", title: "Episode 1" },
          { id: "1g5qdpwNWRgdBhqWbVvE5pfhSaRHWWxUh", title: "Episdoe 2" },
        ],
      },
    ],
  },
  {
    id: "show6",
    title: "The Muppets Mayhem",
    image: "img/mup.jpg",
    seasons: [
      {
        number: 1,
        episodes: [
          { id: "1XppLpOGZL5X_QM3oRLwMNuy9jyh7Gxcu", title: "Episode 1" },
          { id: "19JVLoDb-Xt5IZRNDsD8-VuvcwOAjVBeh", title: "Episode 2" },
        ],
      },
      {
        number: 2,
        episodes: [
          { id: "1cjIvfFmtTOydfSTV4_U5QXf_irPjtpNC", title: "Episode 1" },
          { id: "13cb-sA-clvw6Kp4RXbBhWbsdQr-T4TFn", title: "Episode 2" },
        ],
      },
    ],
  },
];

// Global variables and elements
let currentShow, currentSeason, currentEpisode;
const $ = document.querySelector.bind(document);
const header = $("header");
const yearElements = document.querySelectorAll("#current-year");

// Init function - runs on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set year in footer
  yearElements.forEach((el) => (el.textContent = new Date().getFullYear()));

  // Load content based on page
  if ($(".movie-grid")) loadMovies();
  if ($(".tvshow-grid")) loadTVShows();

  // Header scroll effect
  window.addEventListener("scroll", () =>
    header.classList.toggle("scrolled", window.scrollY > 50)
  );

  // Setup modal close events
  setupModalEvents();
});

// Load movies into the grid
function loadMovies() {
  const grid = $(".movie-grid");
  grid.innerHTML = movies
    .map(
      (movie) => `
    <div class="content-card" data-id="${movie.id}">
      <img src="${movie.image}" alt="${movie.title}" loading="lazy">
      <div class="content-card-overlay">
        <div class="play-icon">▶</div>
        <h3 class="content-title">${movie.title}</h3>
      </div>
    </div>
  `
    )
    .join("");

  grid
    .querySelectorAll(".content-card")
    .forEach((card) =>
      card.addEventListener("click", () => openMovie(card.dataset.id))
    );
}

// Load TV shows into the grid
function loadTVShows() {
  const grid = $(".tvshow-grid");
  grid.innerHTML = tvShows
    .map(
      (show) => `
    <div class="content-card" data-id="${show.id}">
      <img src="${show.image}" alt="${show.title}" loading="lazy">
      <div class="content-card-overlay">
        <div class="play-icon">▶</div>
        <h3 class="content-title">${show.title}</h3>
      </div>
    </div>
  `
    )
    .join("");

  grid
    .querySelectorAll(".content-card")
    .forEach((card) =>
      card.addEventListener("click", () => openTVShow(card.dataset.id))
    );
}

// Setup modal close events
function setupModalEvents() {
  // Movie modal
  const modal = $("#modal");
  if (modal) {
    $("#close-btn").addEventListener("click", closeMovieModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeMovieModal();
    });
  }

  // TV Show modal
  const tvModal = $("#tvshow-modal");
  if (tvModal) {
    $("#tvshow-close-btn").addEventListener("click", closeTVModal);
    tvModal.addEventListener("click", (e) => {
      if (e.target === tvModal) closeTVModal();
    });

    // Season selector event
    const seasonSelector = $("#season-selector");
    if (seasonSelector) {
      seasonSelector.addEventListener("change", (e) => {
        const num = parseInt(e.target.value);
        currentSeason = currentShow.seasons.find((s) => s.number === num);
        currentEpisode = currentSeason.episodes[0];
        updateEpisodes();
        $(
          "#tvshow-video-frame"
        ).src = `https://drive.google.com/file/d/${currentEpisode.id}/preview`;
      });
    }
  }

  // Escape key closes all modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMovieModal();
      closeTVModal();
    }
  });
}

// Open movie modal
function openMovie(id) {
  const modal = $("#modal");
  $("#video-frame").src = `https://drive.google.com/file/d/${id}/preview`;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// Close movie modal
function closeMovieModal() {
  const modal = $("#modal");
  $("#video-frame").src = "";
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

// Open TV show modal
function openTVShow(id) {
  currentShow = tvShows.find((show) => show.id === id);
  if (!currentShow) return;

  // Set initial state
  currentSeason = currentShow.seasons[0];
  currentEpisode = currentSeason.episodes[0];

  // Update UI
  $("#tvshow-title").textContent = currentShow.title;
  updateSeasons();
  updateEpisodes();

  // Set video and show modal
  $(
    "#tvshow-video-frame"
  ).src = `https://drive.google.com/file/d/${currentEpisode.id}/preview`;
  $("#tvshow-modal").classList.add("show");
  document.body.style.overflow = "hidden";
}

// Close TV show modal
function closeTVModal() {
  $("#tvshow-video-frame").src = "";
  $("#tvshow-modal").classList.remove("show");
  document.body.style.overflow = "";
  currentShow = currentSeason = currentEpisode = null;
}

// Update seasons dropdown
function updateSeasons() {
  const select = $("#season-selector");
  select.innerHTML = currentShow.seasons
    .map((s) => `<option value="${s.number}">Season ${s.number}</option>`)
    .join("");
}

// Update episodes grid
function updateEpisodes() {
  const grid = $("#episodes-grid");
  grid.innerHTML = currentSeason.episodes
    .map(
      (ep) =>
        `<div class="episode-item ${
          ep.id === currentEpisode.id ? "active" : ""
        }" data-id="${ep.id}">${ep.title}</div>`
    )
    .join("");

  grid.querySelectorAll(".episode-item").forEach((item) => {
    item.addEventListener("click", () => {
      grid
        .querySelectorAll(".episode-item")
        .forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      currentEpisode = currentSeason.episodes.find(
        (ep) => ep.id === item.dataset.id
      );
      $(
        "#tvshow-video-frame"
      ).src = `https://drive.google.com/file/d/${currentEpisode.id}/preview`;
    });
  });
}

// const movies = [
//   {
//     id: "1Xym8LFMBXlMv9bhMpNLK4_24aeLV8fjq",
//     title: "Harry Potter and the Goblet of Fire",
//     image: "img/Goblet_of_Fire_Film_Poster.jpg",
//   },
//   {
//     id: "1ngKo8yR3pRbYbofElog40_qT-9Q4MBLJ",
//     title: "Harry Potter and the Chamber of Secrets",
//     image: "img/2002.jpg",
//   },
//   {
//     id: "18IaEQ2Lb7drbYzjGIvFv1cN-61whYQCf",
//     title: "Harry Potter and the Order of Phoenix",
//     image: "img/2007.jpg",
//   },
//   {
//     id: "1l55BV7SO0GyoG8sdB5gC6FS5MU63FAo7",
//     title: "Harry Potter and the Half Blood Prince",
//     image: "img/2009.jpg",
//   },
//   {
//     id: "1zbfPLn3zbYv3_ijObyMm5GG4b9Toi_pu",
//     title: "The Hobbit: The Desolation of Smaug",
//     image: "img/hobbit2013.jpg",
//   },
//   {
//     id: "1eePs9j_9CVKOVRB0YpA6-_UE3LUk0bVV",
//     title: "The Hobbit: The Battle of the Five Armies",
//     image: "img/hobbit2014.jpg",
//   },
//   {
//     id: "1zf8JzwTlN0i7OwtO439tdtXrgVlVrhdt",
//     title: "Harry Potter and the Deathly Hallows: Part 1",
//     image: "img/2010.jpg",
//   },
//   {
//     id: "16n8dHk85IwqBYhIQY1Jy5iGe4Hd27quB",
//     title: "Harry Potter and the Deathly Hallows: Part 2",
//     image: "img/2011.jpg",
//   },
// ];

// const tvShows = [
//   {
//     id: "show1",
//     title: "Ben 10 Alien Force (2008)",
//     image: "img/ben10.webp",
//     seasons: [
//       {
//         number: 1,
//         episodes: [
//           { id: "1M1vLhNK-4myX1kuoIbVJjKpyYl2qhJ4q", title: "Episode 1" },
//           { id: "1Srz0L2YnVI8uHUSBb5DRxpouQE0sVB29", title: "Episode 2" },
//           { id: "1g7Xmqe1CYIhOzBgmAggmnjHIMcCOJeaI", title: "Episode 3" },
//         ],
//       },
//       {
//         number: 2,
//         episodes: [
//           { id: "1Gy2D9Mc2Mtsrt34ob5OZXwLlau0wcxfM", title: "Episode 1" },
//           { id: "1fdv4cj8SsnO72hXn7Svk-WD75yH96Z0U", title: "Episode 2" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "show2",
//     title: "Teenage Mutant Ninja Turtles",
//     image: "img/tmnt.jpg",
//     seasons: [
//       {
//         number: 1,
//         episodes: [
//           { id: "1CPFceJizFmaYp-vUlVWoSKSxRHnDMZ4U", title: "Episode 1" },
//           { id: "1n4xAtdtBN3TWIzu4BF9gaaks9Q3SHeKi", title: "Episode 2" },
//         ],
//       },
//       {
//         number: 2,
//         episodes: [
//           { id: "1f7VFrx-WB4Z0vEDDPA4wKfMsKzQzJ3D0", title: "Episode 1" },
//           { id: "1RI6TTYnPTtC4sAKhkpg25qiN3oinh4Yl", title: "Episode 2" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "show3",
//     title: "The Ice Age",
//     image: "img/ia.jpg",
//     seasons: [
//       {
//         number: 1,
//         episodes: [
//           { id: "1UX00vCCTGdp6Usy9_1oEAi0V9WRTSaRf", title: "Episode 1" },
//           { id: "16Wha1QDZZGhGO8zy5Zo1NkdF5an0dUWE", title: "Episode 2" },
//         ],
//       },
//       {
//         number: 2,
//         episodes: [
//           { id: "1kowFldatYLqXmL_Vl0EONGdPqgvGUhV4", title: "Episode 1" },
//           { id: "13GC0x_5LI0UrHWaiyPbgefKwYalDM9v2", title: "Episode 2" },
//         ],
//       },
//     ],
//   },
// ];

// // 1.
// let currentShow, currentSeason, currentEpisode;
// const $ = document.querySelector.bind(document);
// const header = $("header");
// const yearElements = document.querySelectorAll("#current-year");

// // 2.
// document.addEventListener("DOMContentLoaded", () => {
//   yearElements.forEach((el) => (el.textContent = new Date().getFullYear()));

//   if ($("#movie-grid")) loadMovie();
//   if ($("#tvshow-grid")) loadTVShows();

//   window.addEventListener("scroll", () => {
//     header.classList.toggle("scrolled", window.scrollY > 50);
//   });

//   setUpModal();
// });

// // 3.
// function loadMovie() {
//   const grid = $("#movie-grid");
//   grid.innerHTML = movies
//     .map(
//       (movie) => `
//   <div class="content-card" data-id="${movie.id}">
//       <img src="${movie.image}" alt="${movie.title}" loading="lazy">
//       <div class="content-card-overlay">
//         <div class="play-icon">▶</div>
//         <h3 class="content-title">${movie.title}</h3>
//       </div>
//     </div>
//   `
//     )
//     .join("");

//   grid.querySelectorAll(".content-card").forEach((card) => {
//     card.addEventListener("click", () => openMovie(card.dataset.id));
//   });
// }

// // 4.
// function loadTVShows() {
//   const grid = $("#tvshow-grid");
//   grid.innerHTML = tvShows
//     .map(
//       (show) => `
//   <div class="content-card" data-id="${show.id}">
//       <img src="${show.image}" alt="${show.title}" loading="lazy">
//       <div class="content-card-overlay">
//         <div class="play-icon">▶</div>
//         <h3 class="content-title">${show.title}</h3>
//       </div>
//     </div>
//   `
//     )
//     .join("");

//   grid.querySelectorAll(".content-card").forEach((card) => {
//     card.addEventListener("click", () => openTVShow(card.dataset.id));
//   });
// }

// // 5.
// function setUpModal() {
//   const modal = $("#modal");
//   if (modal) {
//     $("#close-btn").addEventListener("click", closeMovieModal);
//     modal.addEventListener("click", (e) => {
//       if (e.target === modal) closeMovieModal();
//     });
//   }

//   const tvModal = $("#tvshow-modal");
//   if (tvModal) {
//     $("#tvshow-close-btn").addEventListener("click", closeTVModal);
//     tvModal.addEventListener("click", (e) => {
//       if (e.target === tvModal) closeTVModal();
//     });

//     const seasonSelector = $("#season-selector");
//     if (seasonSelector) {
//       seasonSelector.addEventListener("change", (e) => {
//         const num = parseInt(e.target.value);
//         currentSeason = currentShow.seasons.find((s) => s.number === num);
//         currentEpisode = currentSeason.episodes[0];
//         updateEpisdoes();
//         $(
//           "#tvshow-video-frame"
//         ).src = `https://drive.google.com/file/d/${currentEpisode.id}/preview`;
//       });
//     }
//   }

//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Esc") {
//       closeMovieModal();
//       closeTVModal();
//     }
//   });
// }

// // 6.
// function openMovie(id) {
//   const modal = $("#modal");
//   $("#video-frame").src = `https://drive.google.com/file/d/${id}/preview`;
//   modal.classList.add("show");
//   document.body.style.overflow = "hidden";
// }

// function closeMovieModal() {
//   $("#video-frame").src = "";
//   modal.classList.remove("show");
//   document.body.style.overflow = "";
// }

// // 7.
// function openTVShow(id) {
//   currentShow = tvShows.find((show) => show.id === id);
//   if (!currentShow) return;

//   currentSeason = currentShow.seasons[0];
//   currentEpisode = currentSeason.episodes[0];

//   $("#tvshow-title").textContent = currentShow.title;
//   updateEpisdoes();
//   updateSeasons();

//   $(
//     "#tvshow-video-frame"
//   ).src = `https://drive.google.com/file/d/${currentEpisode.id}/preview`;

//   $("#tvshow-modal").classList.add("show");
//   document.body.style.overflow = "hidden";
// }

// function closeTVModal() {
//   $("#tvshow-video-frame").src = "";
//   $("#tvshow-modal").classList.remove("show");
//   document.body.style.overflow = "";
//   currentEpisode = currentSeason = currentShow = null;
// }

// function updateSeasons() {
//   const select = $("#season-selector");
//   select.innerHTML = currentShow.seasons
//     .map((s) => `<option value="${s.number}">Season ${s.number}</option>`)
//     .join("");
//   select.value = currentSeason.number;
// }

// function updateEpisodes() {
//   const grid = $("#episodes-grid");
//   grid.innerHTML = currentSeason.episodes
//     .map(
//       (ep, index) => `
//     <div class="episode-card ${
//       ep.id === currentEpisode.id ? "active" : ""
//     }" data-id="${ep.id}">
//       <span>Ep ${index + 1}</span>
//       <p>${ep.title}</p>
//     </div>
//   `
//     )
//     .join("");

//   grid.querySelectorAll(".episode-card").forEach((card) =>
//     card.addEventListener("click", () => {
//       const epId = card.dataset.id;
//       const selected = currentSeason.episodes.find((ep) => ep.id === epId);
//       if (selected) {
//         currentEpisode = selected;
//         updateEpisodes();
//         $(
//           "#tvshow-video-frame"
//         ).src = `https://drive.google.com/file/d/${epId}/preview`;
//       }
//     })
//   );
// }
