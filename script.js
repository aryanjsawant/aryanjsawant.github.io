let c=1;  //desktop
if (window.matchMedia("(max-width: 600px)").matches)
  c=0;    //mobile

let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function check(){
  checkWidth();

  const toggleCheckbox = document.getElementById("toggle");
  if(localStorage.getItem("ogx")){
    x=parseInt(localStorage.getItem("ogx"));
    y=parseInt(localStorage.getItem("ogy"));
    // console.log("x= ",x,",y= ",y);
    if(x % 2 === 0)
      localStorage.clear();
    else{
    toggleCheckbox.checked = !toggleCheckbox.checked;
    // console.log(x);
    document.getElementById("toggle").togg 

    const allElements = document.querySelectorAll("*");
    const animationStyles = {};
    allElements.forEach(element => animationStyles[element] = element.style.animation);

    allElements.forEach(element => element.style.animation = "none");
    allElements.forEach(element => {
      element.style.transition = "none";
    });
    allElements.forEach(element => animationStyles[element] = element.style.animation);
    allElements.forEach(element => element.style.animation = "none");
    changeContent();

    setTimeout(function() {
      if (!window.matchMedia("(max-width: 600px)").matches){
        slide();
        document.getElementById("Identifier").innerHTML="Creative!";
        snowflakes();
        changeBGColor();
        // console.log('max width called');
      }
      else{
        changeBGColor();
        // console.log('max width called');
        snowflakes();
        document.getElementById("Identifier").innerHTML="Creative!";
        setTimeout(function() {
          document.getElementById("content").style.opacity = "1";
          document.getElementById("footer").style.display = "flex";
        },100);
      }

      setTimeout(function() {
        allElements.forEach(element => {
          element.style.transition = "";
        });
        allElements.forEach((element, index) => element.style.animation = animationStyles[element]);

        localStorage.clear();
      }, 19);
    }, 10);
    }
  }
}
function checkWidth(){
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;
  
  if(((previousWidth > 450 && currentWidth <= 450)||(previousWidth < 450 && currentWidth >= 450))||((previousHeight > 515 && currentHeight <= 515)||(previousHeight < 515 && currentHeight >= 515))||(currentWidth<=740 && currentWidth>600)){
    document.querySelectorAll('.section .fas').forEach(function(icon) {
      icon.classList.toggle("fa-5x");
      icon.classList.toggle("fa-2x");
    });
  }
  if ((previousWidth > 600 && currentWidth <= 600)
    ||(previousWidth < 600 && currentWidth >= 600))
    redirect();

  previousWidth = currentWidth; 
  previousHeight = currentHeight;
}
window.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('background-music');
  var muteUnmuteBtn = document.getElementById('mute-unmute-btn');
  var muteIcon = 'fa-volume-xmark';
  var unmuteIcon = 'fa-volume-high';

  if (audio) {
      audio.volume = 1;

      muteUnmuteBtn.addEventListener('click', function() {
          if (audio.muted) {
              audio.muted = false;
              audio.play();
              sessionStorage.setItem("audioOn", true);
              muteUnmuteBtn.querySelector('i').classList.remove(muteIcon);
              muteUnmuteBtn.querySelector('i').classList.add(unmuteIcon);
          } else {
              audio.muted = true;
              audio.pause();
              sessionStorage.setItem("audioOn", false);
              muteUnmuteBtn.querySelector('i').classList.remove(unmuteIcon);
              muteUnmuteBtn.querySelector('i').classList.add(muteIcon);
          }
      });

      document.addEventListener('visibilitychange', function() {
          if (document.hidden) {
              audio.pause();
          } else {
              if (!audio.muted) {
                  audio.play();
              }
          }
      });

      window.addEventListener('load', function() {
          audio.play().catch(function(e) {
              console.log('Audio autoplay prevented');
          });
      });
  }
  if(c && isMobile()){
    this.document.body.style.overflowY="auto";
  }
  else if(!c){
    this.document.body.style.overflowY="auto";
  }
  else if(c){
    this.document.body.style.overflowY="hidden";
  }
  checkWidth();
});

window.addEventListener("orientationchange", function() {
  redirect();
});

window.addEventListener("resize", function() {
  checkWidth();
});

let x = 0;
let y = 0;
let t = 0;
function welcomeToCreative() {
  if(c){
    document.getElementById('WelcomeContainer').style.display = 'block';
    document.getElementById('Welcome1').style.display = 'flex';
    document.getElementById('Welcome2').style.display = 'flex';

    setTimeout(function() {
      document.getElementById('WelcomeContainer').style.display = 'none';
    }, 5000);
  }
  else{
    document.getElementById('WelcomeContainer').style.display = 'block';
    document.getElementById('Welcome1').style.display = 'block';
    document.getElementById('Welcome2').style.display = 'block';
    setTimeout(function() {
      document.getElementById('WelcomeContainer').style.display = 'none';
    }, 5000);
  }
}
function toAbout(){
  y=0;
  changeContent();
  const state = { x: x, y: y };
  history.replaceState(state, null, ' ');
}
function toProjects(){
  y=1;
  setTimeout(()=>
  {if(x%2!=0){
    for (const element of document.querySelectorAll('.project')) {
      element.style.background = `linear-gradient(290deg,
        #FF8B80,
        #FFDABC,
        #F2B9C3,
        #E599CA
        )`;
    }
    for (const element of document.querySelectorAll('.projectImg')) {
      element.style.backgroundColor = "#F9F8E6";
    }
  }},10);
}
function toAchievement(){
  y=2;
}
function toLinks(){
  y=3;
}
function copyGmailt(){
  navigator.clipboard.writeText("u23ai042@coed.svnit.ac.in");
}
function copyDiscord(){
  navigator.clipboard.writeText("aryan2425");
}
function forwards(){
  document.body.classList.toggle("stalebodyt");
  document.body.classList.toggle("changeForward");
  setTimeout(() => {
      document.body.classList.toggle("changeForward");
  }, 2000);
  document.body.classList.toggle("alternatebg");
}
function backwards(){
  document.body.classList.toggle("alternatebg");
  document.body.classList.toggle("changeBackwards");
  setTimeout(() => {
      document.body.classList.toggle("changeBackwards");
    document.body.classList.toggle("stalebodyt");
  }, 2000);
}
function changeColorD(){
  if(x%2!=0){
    document.getElementById("slider").style.backgroundColor="#FEDCCC";
    document.getElementById("content").style.backgroundImage="linear-gradient(to bottom, #FEDCCC , transparent)";
    document.getElementById("content").style.color="#2F2F2F";
    for (const element of document.querySelectorAll('.switch')) {
      element.style.backgroundColor = "#FF8B80";
    }
    for (const element of document.querySelectorAll('.section')) {
      element.style.backgroundColor = "#F9F8E6";
    }
    for (const element of document.querySelectorAll('.switch-container')) {
      element.style.backgroundColor = "transparent";
    }
    for (const element of document.querySelectorAll('.fas')) {
      element.style.color = "#FF8B80";
    }
    for (const element of document.querySelectorAll('.pointer-follower')) {
      element.style.color = "#ff8b8096";
    }
    for (const element of document.querySelectorAll('.tooltip-template')) {
      element.style.color = "black";
    }
    for (const element of document.querySelectorAll('.project')) {
      element.style.background = `linear-gradient(290deg,
        #FF8B80,
        #FFDABC,
        #F2B9C3,
        #E599CA
        )`;
    }
    for (const element of document.querySelectorAll('.projectImg')) {
      element.style.backgroundColor = "#F9F8E6";
    }
  }
  else{
    document.getElementById("slider").style.backgroundColor="#1d1c4d";
    document.getElementById("content").style.backgroundImage="linear-gradient(to bottom, #1d1c4dea , transparent)";
    document.getElementById("content").style.color="white";
    for (const element of document.querySelectorAll('.switch')) {
      element.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
    for (const element of document.querySelectorAll('.section')) {
      element.style.backgroundColor = "#CDD1C4";
    }
    for (const element of document.querySelectorAll('.switch-container')) {
      element.style.backgroundColor = "#1d1c4d";
    }
    for (const element of document.querySelectorAll('.fas')) {
      element.style.color = "#1b1a55";
    }
    for (const element of document.querySelectorAll('.pointer-follower')) {
      element.style.color = "#1b1a55d0";
    }
    for (const element of document.querySelectorAll('.tooltip-template')) {
      element.style.color = "white";
    }
    for (const element of document.querySelectorAll('.project')) {
      element.style.background = `linear-gradient(290deg,
        #070F2B,
        #1B1A55,
        #535C91,
        #C899C2
      )`;
    }
    for (const element of document.querySelectorAll('.projectImg')) {
      element.style.backgroundColor = "#B6D5F4";
    }
  }
}
function changeColorM(){
  if(x%2!=0){
    document.getElementById("slider").style.backgroundColor="#FEDCCC";
    document.getElementById("footer").style.backgroundColor="#CE7AD1";
    document.getElementById("Identifier").style.color="#2F2F2F";
    document.getElementById("easterEgg").style.color="#2F2F2F";
    document.getElementById("content").style.backgroundImage="linear-gradient(to bottom, #FEDCCC , transparent)";
    document.getElementById("content").style.color="#2F2F2F";
    for (const element of document.querySelectorAll('.switch')) {
      element.style.backgroundColor = "#FF8B80";
    }
    for (const element of document.querySelectorAll('.section')) {
      element.style.backgroundColor = "#F9F8E6";
    }
    for (const element of document.querySelectorAll('.switch-container')) {
      element.style.backgroundColor = "transparent";
    }
    for (const element of document.querySelectorAll('.fas')) {
      element.style.color = "#FF8B80";
    }
  }
  else{
    document.getElementById("slider").style.backgroundColor="#1d1c4d";
    document.getElementById("footer").style.backgroundColor="#1d1c4d";
    document.getElementById("Identifier").style.color="white";
    document.getElementById("easterEgg").style.color="#2F2F2F";
    document.getElementById("content").style.backgroundImage="linear-gradient(to bottom, #1d1c4dea , transparent)";
    document.getElementById("content").style.color="white";
    for (const element of document.querySelectorAll('.switch')) {
      element.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
    for (const element of document.querySelectorAll('.section')) {
      element.style.backgroundColor = "#CDD1C4";
    }
    for (const element of document.querySelectorAll('.switch-container')) {
      element.style.backgroundColor = "#1d1c4d";
    }
    for (const element of document.querySelectorAll('.fas')) {
      element.style.color = "#1d1c4d";
    }
  }
}
function changeBGColor(){
  if(x%2==0)
      backwards();
  else
      forwards();
}
function attachTooltipListeners() {
  const clipboards = document.querySelectorAll('.ctc');
  clipboards.forEach(clipboard => {
      clipboard.addEventListener('click', () => showTooltip(clipboard, 'Copied to Clipboard'));
  });
}
function changeContent() {
  var content = document.getElementById("content");
  var newContent;
  if (y == 0) {
      if (x % 2 === 0) {
        newContent = `
          <h1 id="MainHeading">About me</h1>
          <p>Hey there! I am Aryan Sawant, an undergraduate pursuing a BTech degree in Artificial Intelligence at NIT Surat. Although I havent dived headfirst into the world of AI, I despise doing tedious and repetitive tasks(I'm lazy), but love the concept of training an algorithm to automate them.</p>
          <p>To prepare myself for this exciting field, I'm currently sharpening my programming skills by delving into Data Structures and Algorithms (DSA) in C++ and building my mathematical foundation with Statistics.</p>
        `;
      } else {
          newContent = `
            <h1 id="MainHeading">About me</h1>
            <p>Hello again! I'm Aryan Sawant, an amateur music composer with a deep passion for creating soundscapes that evoke emotions and tell stories.</p>
            <p>The current music scene is very dynamic with not one type of genre making it large. I'm currently pouring my heart into making quality music, constantly refining my sound and stories I want to tell. That's why I'm actively working on expanding my reach and building a larger fan base.</p>
          `;
      }
  } else if (y == 1) {
      if (x % 2 === 0) {
          newContent = `
            <h1 id="MainHeading">Projects</h1>
            <div style="display: flex;  flex-flow: row wrap; justify-content: flex-start;"">
              <div class="projectContainer">
                <a href="projects/profileWebsite.html" style="text-decoration: none; color: inherit;" target="_blank">
                  <div class="project">
                      <div class="projectImg">
                          <i class="fa-solid fa-globe fa-7x"></i>
                      </div>
                      <div style="text-align: center;">
                          <h3>Profile Website</h3>
                      </div>
                  </div>
                </a>
              </div>
              <div class="projectContainer">
                <a href="projects/lineFollower.html" style="text-decoration: none; color: inherit;" target="_blank">
                  <div class="project">
                    <div class="projectImg">
                    <img src="media/LineFollowerBot.jpg" alt="logo" style="height: 90%; width: 90%; margin: 0px;">
                    </div>
                    <div style="text-align: center;">
                        <h3>Line Follower</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="projectContainer">
                <a href="projects/profileWebsite.html" style="text-decoration: none; color: inherit;" target="_blank">
                  <div style="display: none;" class="project">
                    <div class="projectImg">
                        <i class="fa-solid fa-globe fa-7x"></i>
                    </div>
                    <div style="text-align: center;">
                        <h3>To be decided</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          `;
      } else {
          newContent = `
            <h1 id="MainHeading" >Projects</h1>
            <div style="display: flex; flex-flow: row wrap; justify-content: flex-start;">
              <div class="projectContainer">
                <a href="projects/allRounderSquad.html" style="text-decoration: none; color: inherit;" target="_blank">  
                  <div class="project projectAlt">
                    <div class="projectImg projectImgAlt">
                      <img src="media/Logo.png" alt="logo" style="height: 90%; width: 90%; margin: 0px;">
                    </div>
                    <div style="text-align: center;">
                        <h3>All Rounder Squad</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="projectContainer" style="display: none;">
                <a href="" style="text-decoration: none; color: inherit;" target="_blank">
                  <div style="display: none;" class="project projectAlt">
                    <div class="projectImg projectImgAlt">
                      <i class="fa-solid fa-globe fa-7x"></i>
                    </div>
                    <div style="text-align: center;">
                      <h3>Profile Website</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          `;
      }
  } else if (y == 2) {
      if (x % 2 === 0) {
          newContent = `
              <h1 id="MainHeading">Achievements</h1>
              <ul>
                  <li>JEE 2023: Scored 99.04 percentile (Rank 11387)</li>
                  <li>Won first place in a drone building and flying workshop at IIT Bombay (against 200 participants)</li>
                  <li>Silver medal awardee in the Dr. Homi Bhabha Balvaidnyanik Competition</li>
                  <li>Second prize in the Technova Competition (2023) hosted by Mindbend in NIT Surat</li>
                  <li>Qualified the JEE Advanced Examination (2023)</li>
                  <li>ICSE (10th Grade): 96.6%</li>
                  <li>HSC (12th Grade): 82%</li>
                  <li>Current CGPA: 9.1</li>
              </ul>
          `;
      } else {
          newContent = `
              <h1 id="MainHeading">Achievements</h1>
              <ul>
                  <li>Compose high-quality music using Ableton, striving for professional sound quality</li>
                  <li>My musical content has engaged over 5,000 viewers on social media</li>
                  <li>Accomplished Tabla player with 4 certifications from the Akhil Bharatiya Gandharva Maha Vidhyalay Mandal</li>
                  <li>Basic keyboard proficiency</li>
                  <li>Placed third at the Battle of DJ competition (2023) hosted by Mindbend in NIT Surat</li>
                  <li>Proficient badminton player with a passion for the sport</li>
              </ul>
          `;
      }
  } else if (y == 3) {
      if (x % 2 === 0) {
          newContent = `
              <h1 id="MainHeading" style="margin-bottom: 0%;">Links</h1>
              <h3>Coding</h3>
              <div id="linkers">
                  <a href="https://github.com/aryanjsawant" target="_blank"><div><img src="media/icons/github-mark.svg" style="height: 40px;" alt="Github"></div></a>
                  <a href="https://leetcode.com/u/aryan-sawant/" target="_blank"><div><img style="height: 40px;" src="media/icons/leetcode.svg" alt="Leetcode"></div></a>
              </div>
              <h3>Contact</h3>
              <div id="linkers">
                  <div class="ctc" onclick="copyGmailt()"><img src="media/icons/7089163_gmail_google_icon.svg" alt="Gmail"></div>
                  <a href="https://www.linkedin.com/in/aryan-j-sawant/" target="_blank"><div><img src="media/icons/5296501_linkedin_network_linkedin logo_icon.svg" alt="Linked in"></div></a>
              </div>
              <h3>Socials</h3>
              <div id="linkers">
                  <a href="https://www.instagram.com/aryan_sawant_24/" target="_blank"><div><img src="media/icons/6929237_instagram_icon.svg" alt="Instagram"></div></a>
                  <a href="https://x.com/aryan22746" target="_blank"><div><img src="media/icons/11053969_x_logo_twitter_new_brand_icon.svg" alt="Twitter" style="height: 40px;"></div></a>
                  <div class="ctc"  onclick="copyDiscord()"><img src="media/icons/8725815_discord_icon.svg" alt="Discord"></div>
                  <a href="https://www.reddit.com/user/aryan_sawant_/" target="_blank"><div><img src="media/icons/3225187_app_logo_media_popular_reddit_icon.svg" alt="reddit"></div></a>
              </div>
          `;
      } else {
          newContent = `
              <h1 id="MainHeading" style="margin-bottom: 0%;">Links</h1>
              <h3>Music</h3>
              <div id="linkers">
                  <a href="https://open.spotify.com/user/lt44xbicwteh7re74qihtg362?si=3b81d1b66fdc4937" target="_blank"><div><img src="media/icons/9796018_spotify_icon.svg" alt="Spotify"></div></a>
                  <a href="https://www.youtube.com/@all-roundersquad7252" target="_blank"><div><img src="media/icons/5296521_play_video_vlog_youtube_youtube logo_icon.svg" alt="Youtube"></div></a>
                  <a href="https://last.fm/user/Aryan_Sawant" target="_blank"><div><img src="media/icons/9035632_stats_chart_outline_icon.svg" alt="Last.fm" style="height: 40px;"></div></a>
              </div>
              <h3>Contact</h3>
              <div id="linkers">
                  <div class="ctc"  onclick="copyGmailt()"><img src="media/icons/7089163_gmail_google_icon.svg" alt="Gmail"></div>
              </div>
              <h3>Socials</h3>
              <div id="linkers">
                  <a href="https://www.instagram.com/all_rounder_squad/" target="_blank"><div><img src="media/icons/6929237_instagram_icon.svg" alt="Instagram"></div></a>
                  <a href="https://x.com/aryan22746" target="_blank"><div><img src="media/icons/11053969_x_logo_twitter_new_brand_icon.svg" alt="Twitter" style="height: 40px;"></div></a>
                  <div class="ctc"  onclick="copyDiscord()"><img src="media/icons/8725815_discord_icon.svg" alt="Discord"></div>
              </div>
          `;
      }
  }

  content.innerHTML = newContent;
  attachTooltipListeners();
}
function handleHashChange() {
  const hash = window.location.hash;

  if (hash === "#projects") {
      y = 1;
  } else if (hash === "#achievements") {
      y = 2;
  } else if (hash === "#links") {
      y = 3;
  } else {
      y = 0;
  }

  changeContent();
  redirects();
}
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        handleHashChange();
    }
});
function toggleFont(){
  document.getElementById("content").classList.toggle("lobsterTwoRegular");
  document.getElementById("easterEgg").classList.toggle("lobsterTwoRegular");
}
function disableButton(T){
  const toggleCheckbox = document.getElementById("toggle");
  toggleCheckbox.disabled = true; 
  setTimeout(() => {
    toggleCheckbox.disabled = false;
  }, T);
}
function changeLetter() {
  if(x%2==0){
    setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">T</span>
        <span class="lobsterTwoRegular">reative!</span>
      </p>
    `;
  }, 200);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Te</span>
        <span class="lobsterTwoRegular">eative!</span>
      </p>
    `;
  }, 400);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Tec</span>
        <span class="lobsterTwoRegular">ative!</span>
      </p>
    `;
  }, 600);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Tech</span>
        <span class="lobsterTwoRegular">tive!</span>
      </p>
    `;
  }, 800);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Techn</span>
        <span class="lobsterTwoRegular">ive!</span>
      </p>
    `;
  }, 1000);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Techni</span>
        <span class="lobsterTwoRegular">ve!</span>
      </p>
    `;
  }, 1200);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Technic</span>
        <span class="lobsterTwoRegular">e!</span>
      </p>
    `;
  }, 1400);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Technica</span>
        <span class="lobsterTwoRegular">!</span>
      </p>
    `;
  }, 1600);

  setTimeout(function() {
    document.getElementById('Identifier').innerHTML = `
      <p id="Identifier">
        <span class="poppinsSansSerif">Technical</span>
      </p>
    `;
  }, 1800);
  }
  else{
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">C</span>
          <span class="poppinsSansSerif">echnical</span>
        </p>
      `;
    }, 200);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Cr</span>
          <span class="poppinsSansSerif">chnical</span>
        </p>
      `;
    }, 400);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Cre</span>
          <span class="poppinsSansSerif">hnical</span>
        </p>
      `;
    }, 600);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Crea</span>
          <span class="poppinsSansSerif">nical</span>
        </p>
      `;
    }, 800);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Creat</span>
          <span class="poppinsSansSerif">ical</span>
        </p>
      `;
    }, 1000);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Creati</span>
          <span class="poppinsSansSerif">cal</span>
        </p>
      `;
    }, 1200);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Creativ</span>
          <span class="poppinsSansSerif">al</span>
        </p>
      `;
    }, 1400);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Creative</span>
          <span class="poppinsSansSerif">l!</span>
        </p>
      `;
    }, 1600);
    setTimeout(function() {
      document.getElementById('Identifier').innerHTML = `
        <p id="Identifier">
          <span class="lobsterTwoRegular">Creative!</span>
        </p>
      `;
    }, 1800);
  }
}
function goToHome() {
  window.location.href = "index.html";
}
function disableButton(T){
  const toggleCheckbox = document.getElementById("toggle");
  toggleCheckbox.disabled = true; 
  setTimeout(() => {
    toggleCheckbox.disabled = false;
  }, T);
}
function snowflakes() {
  const blo = document.getElementById('sno');
  if (x % 2 === 0)
    blo.style.opacity = "0";
  else
    blo.style.opacity = "0.3";
}
function slide() {
  if (x % 2 != 0) {
      document.getElementById('slider').style.left = '0%';
      document.getElementById('content').style.right = '0%';
      document.getElementById('mute-unmute-btn').style.left = '94%';
  } else {
      document.getElementById('slider').style.left = '100%';
      document.getElementById('content').style.right = '100%';
      document.getElementById('mute-unmute-btn').style.left = '3.5%';
  }
}
function transition() {
  const contentDiv = document.getElementById('content');
  x++;
  // console.log(x);
  localStorage.setItem("ogy",y);
  localStorage.setItem("ogx",x);
  contentDiv.style.opacity = '0';
  document.getElementById('mute-unmute-btn').style.opacity="0";
  setTimeout(toggleFont,1050);
  if(!window.matchMedia("(max-width: 600px)").matches){
    document.getElementById("content").style.opacity="0";

    if(x==1) setTimeout(welcomeToCreative(),1200),t=5000,setTimeout(function(){
      contentDiv.style.opacity = '1';
      document.getElementById('mute-unmute-btn').style.opacity="1";
    },t+1000);
    else t=0,setTimeout(function(){
      contentDiv.style.opacity = '1';
      document.getElementById('mute-unmute-btn').style.opacity="1";
    },t+2000);

    setTimeout(slide,1050);
    setTimeout(changeBGColor,1050);
    disableButton(t+1200);
    setTimeout(changeContent,1000);
    setTimeout(changeLetter,100);
    setTimeout(snowflakes,1100);
    setTimeout(changeColorD,1050);
  }
  else{
    changeBGColor();
    snowflakes();
    changeLetter();
      if(x==1)
        setTimeout(function(){
          welcomeToCreative();
          document.getElementById("footer").style.display="none";
        },500),t=5000;
      else 
        t=0;
      disableButton(t+1200);
      setTimeout(function(){
        document.getElementById("footer").style.display="flex";
      },t+100);
      setTimeout(changeContent,1000);
      setTimeout(function(){
        contentDiv.style.opacity = '1';
        document.getElementById('mute-unmute-btn').style.opacity="1";
        changeColorM();
      },t+1000);
  }
}
function redirects() {
  const state = { x: x, y: y };
  history.pushState(state, null, window.location.hash);
}
function redirect(){
  localStorage.setItem("ogy",y);
  localStorage.setItem("ogx",x);
  changeContent();
}