const games = [
  {
    title: "Tetris Online",
    description: "The classic block-stacking puzzle game.",
    link: "https://tetris.com/play-tetris",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Tetris_Color.svg",
    category: "Puzzle"
  },
  {
    title: "2048",
    description: "Join numbers and reach 2048. Simple, fun, addictive.",
    link: "https://play2048.co/",
    image: "https://play-lh.googleusercontent.com/ghCrjA9yV4XJZKAp3TfnOmV6FDPyQL4hdc-n93wDBF6qBqXhU6XIg4UpbMyUKHyvUA=w600-h300",
    category: "Puzzle"
  },
  {
    title: "Sudoku",
    description: "Classic logic puzzle with numbers.",
    link: "https://sudoku.com/",
    image: "https://play-lh.googleusercontent.com/Y8ckA0vAsqEVZgyh5P5Vb2AY5ztU_0JGZ0-LJ6SNY-MxQJP7r7FRG6Xzv8NmnptZ9N4=w600-h300",
    category: "Puzzle"
  },
  {
    title: "Pac-Man Online",
    description: "Eat dots and avoid ghosts in this classic arcade maze!",
    link: "https://freepacman.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Pacman.png",
    category: "Arcade"
  },
  {
    title: "Snake Game",
    description: "Eat, grow, and don’t crash into yourself.",
    link: "https://playsnake.org/",
    image: "https://play-lh.googleusercontent.com/DV84s9P0Keg0UoZf7rs3QTrNS91hDw5aYXL2_xnG2skK2n4b5FdDcYgPNzcd9h-EeA=w600-h300",
    category: "Arcade"
  },
  {
    title: "A Dark Room",
    description: "Text-based mystery adventure that draws you in.",
    link: "https://adarkroom.doublespeakgames.com/",
    image: "https://miro.medium.com/v2/resize:fit:600/format:webp/1*FcpDzLBY0vQ0spRP0OSu9g.png",
    category: "Adventure"
  },
  {
    title: "Space Invaders",
    description: "Shoot down waves of aliens in this retro shooter!",
    link: "https://spaceinvaders.ultimatearcade.com/",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4e/SpaceInvaders-Gameplay.png",
    category: "Shooter"
  },
  {
    title: "Mini Golf World",
    description: "Play crazy golf in colorful levels.",
    link: "https://www.crazygames.com/game/mini-golf-world",
    image: "https://images.crazygames.com/mini-golf-world/20201005151021/mini-golf-world-cover?auto=format,compress&q=75&cs=strip",
    category: "Sports"
  },
  {
    title: "Flappy Bird Clone",
    description: "Tap to fly and dodge the pipes.",
    link: "https://flappybird.io/",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Flappy_Bird_icon.png",
    category: "Arcade"
  },
  {
    title: "Chess Online",
    description: "Challenge your mind in online chess.",
    link: "https://www.chess.com/play/computer",
    image: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/FredP/ppboard.jpg",
    category: "Strategy"
  },
  {
    title: "Crossword Puzzles",
    description: "Solve classic crosswords directly in your browser.",
    link: "https://www.boatloadpuzzles.com/playcrossword",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Crossword_example.svg/1024px-Crossword_example.svg.png",
    category: "Word"
  },
  {
    title: "Bubble Shooter",
    description: "Match and pop bubbles in this colorful shooter game.",
    link: "https://www.bubbleshooter.net/",
    image: "https://www.bubbleshooter.net/assets/images/logo-bubbleshooter-net.png",
    category: "Puzzle"
  },
  {
    title: "Checkers",
    description: "Outsmart your opponent in checkers.",
    link: "https://www.gamesforthebrain.com/game/checkers/",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Checkers.png",
    category: "Strategy"
  },
  {
    title: "Cut the Rope",
    description: "Feed candy to Om Nom by cutting the right ropes.",
    link: "https://cuttherope.net/",
    image: "https://play-lh.googleusercontent.com/FPLgN9Kk_RKJYd3vLx8EFaWiUnDaL3zphdSSn2ZShCM6X5gQuEoEwU3S6JntI_pC2Q=w600-h300",
    category: "Puzzle"
  },
  {
    title: "Hextris",
    description: "Tetris-style puzzle with a hexagonal twist.",
    link: "https://hextris.io/",
    image: "https://hextris.io/img/hextris-logo.png",
    category: "Puzzle"
  },
  {
    title: "Dino Game",
    description: "Jump over cacti in Chrome’s offline game.",
    link: "https://chromedino.com/",
    image: "https://chromedino.com/images/logo.png",
    category: "Arcade"
  },
  {
    title: "GeoGuessr",
    description: "Guess where you are using Street View.",
    link: "https://www.geoguessr.com/free",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f3/GeoGuessr_logo.png",
    category: "Strategy"
  },
  {
    title: "Solitaire",
    description: "The classic single-player card game.",
    link: "https://www.solitr.com/",
    image: "https://www.solitr.com/favicon/apple-icon-180x180.png",
    category: "Card"
  },
  {
    title: "Uno Online",
    description: "Play Uno with online players!",
    link: "https://www.crazygames.com/game/uno-online",
    image: "https://images.crazygames.com/games/uno-online/cover-1659465001395.png",
    category: "Card"
  },
  {
    title: "Wordle",
    description: "Guess the 5-letter word in 6 tries.",
    link: "https://www.nytimes.com/games/wordle/index.html",
    image: "https://www.nytimes.com/games-assets/v2/assets/wordle/opengraph.png",
    category: "Word"
  },
  {
    title: "ZombsRoyale",
    description: "Multiplayer battle royale in 2D.",
    link: "https://zombsroyale.io/",
    image: "https://zombsroyale.io/images/logo.png",
    category: "Shooter"
  },
  {
    title: "Fireboy and Watergirl",
    description: "Co-op puzzle platformer for two players.",
    link: "https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-forest-temple",
    image: "https://www.coolmathgames.com/sites/default/files/imagecache/100x100/games/FireBoyWaterGirl/logo.png",
    category: "Platformer"
  },
  {
    title: "Basketball Stars",
    description: "1v1 multiplayer basketball arcade game.",
    link: "https://www.crazygames.com/game/basketball-stars",
    image: "https://images.crazygames.com/games/basketball-stars/cover-1647442296465.png",
    category: "Sports"
  },
  {
    title: "Slope",
    description: "Roll your ball down a 3D slope!",
    link: "https://slopegame.com/",
    image: "https://slopegame.com/wp-content/uploads/2020/10/slope3.jpg",
    category: "Arcade"
  },
  {
    title: "Krunker.io",
    description: "Fast-paced FPS with pixel graphics.",
    link: "https://krunker.io/",
    image: "https://assets-prd.ignimgs.com/2021/03/25/krunker-button-1616718049606.jpg",
    category: "Shooter"
  },
  {
    title: "Subway Surfers Online",
    description: "Run, dodge, and collect coins!",
    link: "https://poki.com/en/g/subway-surfers",
    image: "https://upload.wikimedia.org/wikipedia/en/0/02/Subway_Surfers_game_icon.png",
    category: "Runner"
  },
  {
    title: "Temple Run 2",
    description: "Escape the temple while dodging traps!",
    link: "https://poki.com/en/g/temple-run-2",
    image: "https://play-lh.googleusercontent.com/TmRJDzBgxUdYx3KaYuD3JGo4ChFAJY_VBv1yYt6oEAFs-XmPTg5CEyo2oDFU2RoCGNA=w600-h300",
    category: "Runner"
  },
  {
    title: "Moto X3M",
    description: "Stunt biking through wild levels!",
    link: "https://www.coolmathgames.com/0-moto-x3m",
    image: "https://www.coolmathgames.com/sites/default/files/imagecache/100x100/games/moto-x3m/logo.png",
    category: "Sports"
  },
  {
    title: "Connect 4",
    description: "Get four in a row before your opponent.",
    link: "https://www.mathplayground.com/logic_connect_4.html",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Connect_Four_Board_and_Box.jpg/640px-Connect_Four_Board_and_Box.jpg",
    category: "Strategy"
  },
  {
    title: "Among Us (Web)",
    description: "Find the impostor or sabotage the crew!",
    link: "https://now.gg/play/innersloth/4046/among-us",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg",
    category: "Multiplayer"
  },
  {
    title: "Word Search",
    description: "Find hidden words in a grid.",
    link: "https://thewordsearch.com/",
    image: "https://thewordsearch.com/static/img/logo.png",
    category: "Word"
  },
  {
    title: "Candy Crush Online",
    description: "Match colorful candies in this sweet puzzle game!",
    link: "https://king.com/game/candycrush",
    image: "https://upload.wikimedia.org/wikipedia/en/0/01/Candy_Crush_Saga_Logo.png",
    category: "Puzzle"
  },
  {
    title: "Stack",
    description: "Stack blocks as high as you can!",
    link: "https://poki.com/en/g/stack",
    image: "https://play-lh.googleusercontent.com/bKDgzMGaZ0oBlY8BFYewN-Xu5li8m9GCGGLRzYe12v7-btXavI4i8T8_6oXru3YkxA=w600-h300",
    category: "Arcade"
  },
  {
    title: "Stickman Hook",
    description: "Swing like a ninja through crazy levels!",
    link: "https://poki.com/en/g/stickman-hook",
    image: "https://play-lh.googleusercontent.com/EnItFE_Ucm4AVnSRilvGvYx0iv9Ot3KNcDYvhogTxkD0aM1nzFEuPt6u5RL5Qky2Fg=w600-h300",
    category: "Platformer"
  }
{
  title: "Paper.io 2",
  description: "Conquer territory by drawing lines and avoid getting hit!",
  link: "https://paper-io.com/",
  image: "https://play-lh.googleusercontent.com/yCIb2EwU8f2V7g0Q6gSyvHo_YoUP9RZr1sH6d_HhDjCEI_25W5SthGaGJvZ1GqY8fEw=w600-h300",
  category: "Multiplayer"
},
{
  title: "Slope Ball",
  description: "Jump through deadly geometric platforms in rhythm!",
  link: "https://www.crazygames.com/game/slope-ball",
  image: "https://images.crazygames.com/games/slope-ball/cover-1589270092237.png",
  category: "Arcade"
},
{
  title: "Super Mario Bros",
  description: "Relive the classic Mario experience online.",
  link: "https://supermario-game.com/",
  image: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
  category: "Platformer"
},
{
  title: "GunSpin",
  description: "Shoot to fly your weapon as far as possible.",
  link: "https://poki.com/en/g/gunspin",
  image: "https://play-lh.googleusercontent.com/U0MBv8k6AJgMgOBSE0yMY6k5kSS2hA_ranYiITcJ7vMduC_-QbY7edCH4Zg6vX0CmQ=w600-h300",
  category: "Shooter"
},
{
  title: "Tank Trouble",
  description: "1v1 or 1vAI tank warfare in a maze!",
  link: "https://tanktrouble.com/",
  image: "https://play-lh.googleusercontent.com/KzKu99vrrMr_m0vJxRn5U7WmWLM33KyxDihpHPpdxIDZ2QJnmQjBvK8om67vymWWJg=w600-h300",
  category: "Action"
},
{
  title: "Jelly Truck",
  description: "Drive a wobbly jelly truck through bouncy obstacles.",
  link: "https://www.coolmathgames.com/0-jelly-truck",
  image: "https://www.coolmathgames.com/sites/default/files/JellyTruck_LOGO.png",
  category: "Arcade"
},
{
  title: "Stickman Fighter: Epic Battle",
  description: "Destroy enemy stickmen in epic combat.",
  link: "https://poki.com/en/g/stickman-fighter-epic-battle",
  image: "https://play-lh.googleusercontent.com/-7_VYvt0V7eXk6sxPxURKn93gHdOVBv8hTD-3LDgM8k84rZRT2SCsH9t8RvTzKbwDw=w600-h300",
  category: "Action"
},
{
  title: "Basketball Legends",
  description: "Play 1v1 basketball with power-ups and super moves!",
  link: "https://poki.com/en/g/basketball-legends-2020",
  image: "https://play-lh.googleusercontent.com/3_H6FjAq9N8FAZxSC8JbAZamjq2PmnxKqv2yVTIQjN1mdZB4C0RkTg_MRkZ-RguCHWY=w600-h300",
  category: "Sports"
},
{
  title: "Shell Shockers",
  description: "Egg-based multiplayer shooter!",
  link: "https://shellshock.io/",
  image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1732970/header.jpg",
  category: "Shooter"
},
{
  title: "Draw Climber",
  description: "Draw your own legs and race to the finish!",
  link: "https://poki.com/en/g/draw-climber",
  image: "https://play-lh.googleusercontent.com/kkJxGZYYC4dvOYOQlsQZYg5dLG9A0cgMNYz2kA3tEM1LFiGb7D3XUP5ujI4RBiNS-g=w600-h300",
  category: "Puzzle"
},
{
  title: "Jelly Jump",
  description: "Bounce your jelly through closing gates.",
  link: "https://poki.com/en/g/jelly-jump",
  image: "https://play-lh.googleusercontent.com/ViIF98aHUNvqL1C-OT3AvhpoWxGzC7S6gEPW7KUKD9RlxnNaNhA0RIkKjKUk0C6Ejw=w600-h300",
  category: "Arcade"
},
{
  title: "Speed Typing Test",
  description: "Test and improve your typing speed!",
  link: "https://10fastfingers.com/typing-test/english",
  image: "https://www.typing.com/blog/wp-content/uploads/2021/08/typing-test.png",
  category: "Word"
},
{
  title: "Idle Breakout",
  description: "Clicker game meets breakout bricks!",
  link: "https://www.coolmathgames.com/0-idle-breakout",
  image: "https://www.coolmathgames.com/sites/default/files/IdleBreakout_LOGO.png",
  category: "Idle"
},
{
  title: "Line Rider",
  description: "Draw slopes and watch a sledder ride them!",
  link: "https://linerider.com/",
  image: "https://upload.wikimedia.org/wikipedia/en/e/e3/Line_Rider_screenshot.png",
  category: "Creative"
},
{
  title: "Doodle Jump",
  description: "Keep jumping higher while avoiding enemies!",
  link: "https://www.miniplay.com/game/doodle-jump",
  image: "https://upload.wikimedia.org/wikipedia/en/7/71/Doodle_Jump_logo.png",
  category: "Arcade"
},
{
  title: "Rooftop Snipers",
  description: "A chaotic 2-player sniper duel on rooftops.",
  link: "https://poki.com/en/g/rooftop-snipers",
  image: "https://poki.com/_next/image?url=https%3A%2F%2Fimg.poki.com%2F8e2a6245ae6b0fa229a88ff50f40d705.jpeg&w=640&q=75",
  category: "Shooter"
}

];


];

    

    const gameList = document.getElementById("gameList");
    const searchInput = document.getElementById("searchInput");
    const themeToggle = document.getElementById("themeToggle");

    function renderGames(gamesToRender) {
      gameList.innerHTML = "";
      gamesToRender.forEach(game => {
        const li = document.createElement("li");
        li.className = "game-item";
        li.innerHTML = `
          <img src="${game.image}" alt="${game.title} thumbnail" class="game-image">
          <h2>${game.title}</h2>
          <p>${game.description}</p>
          <a href="${game.link}" target="_blank" rel="noopener noreferrer" class="play-button">Play Now</a>
        `;
        gameList.appendChild(li);
      });
    }

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
      );
      renderGames(filteredGames);
    });

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDark ? "true" : "false");
    });

    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    }

    renderGames(games);
  </script>
</body>
</html>
