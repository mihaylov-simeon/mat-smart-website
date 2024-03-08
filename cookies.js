/*
* The JS file - shows a cookie pop up on the website in 1 sec. And then write a cookie about visiting the website.
*/
"use strict";

var btz_cookie_popup_html = `
<div id="btz-cookie-popup">
  <div class="btz-cookie-popup__c-p-card btz-cookie-popup__card">
    <div class="btz-cookie-popup__c-p-close btz-cookie-popup--close"></div>
    <div class="btz-cookie-popup__content">
      <h3>Нашият уебсайт използва бисквитки!</h3>
      <p>
      Използваме бисквитки на нашия сайт, за да подобрим вашето преживяване. 
      За да приемете бисквитките и да продължите да преглеждате този уебсайт, моля, 
      натиснете СЪГЛАСЯВАМ СЕ. Можете да <a href="http://jackcanfield.com/privacy-policy/" target="_blank">КЛИКНЕТЕ ТУК</a>, 
      за да прочетете нашата политика за бисквитките, или <a href="http://www.allaboutcookies.org/manage-cookies/" target="_blank">ТУК</a>, 
      за да научите как да деактивирате бисквитките. <span class="btz-cookie-popup__content--text-bold"></span>
      </p>
      <button class="btz-cookie-popup__c-p-button">Съгласявам се</button>
    </div>
  </div>
</div>
`;

var btz_cookie_popup_css = document.createElement("style");
btz_cookie_popup_css.type = "text/css";
btz_cookie_popup_css.innerHTML = `
#btz-cookie-popup *, #btz-cookie-popup *:after, #btz-cookie-popup *:before {
  box-sizing: inherit !important;
}

#btz-cookie-popup {
  position: fixed !important;
  bottom: 15vh !important;
  right: 0 !important;
  z-index: 9999 !important;
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}

#btz-cookie-popup .btz-cookie-popup__card {
  background: rgb(0,78,200);
  background: linear-gradient(90deg, rgba(0,143,17, 0.9) 0%, rgba(0,102,0,0.8) 100%);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2) !important;
  border-radius: 10px;
  display: flex !important;
  flex-wrap: wrap !important;
  height: 330px !important;
  max-width: 100% !important;
  position: relative !important;
  width: 400px !important;
  line-height: 1.5 !important;
}

#btz-cookie-popup .btz-cookie-popup--closed {
  -webkit-animation: btz-cookie-popup--close 0.4s ease-in-out forwards !important;
  animation: btz-cookie-popup--close 0.4s ease-in-out forwards !important;
}

#btz-cookie-popup .btz-cookie-popup--opened {
  -webkit-animation: btz-cookie-popup--open 0.4s ease-in-out forwards !important;
  animation: btz-cookie-popup--open 0.4s ease-in-out forwards !important;
}

#btz-cookie-popup .btz-cookie-popup__content {
  padding: 15px 15px !important;
  text-align: center !important;
}

#btz-cookie-popup .btz-cookie-popup__content--text-bold {
  font-weight: 600 !important;
}

#btz-cookie-popup h3 {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  color: #fff !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  margin: 0 0 0.5em !important;
}

#btz-cookie-popup p {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  font-size: 14px !important;
  color: #fff !important;
  margin: 20px 0 !important;
}

#btz-cookie-popup a {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue/", Helvetica, Arial, sans-serif !important;
  font-size: 14px !important;
  color: #fff !important;
  text-decoration: underline !important;
}

#btz-cookie-popup button {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  background: #fff !important;
  border: none !important;
  border-radius: 10px; 
  color: #008F11 !important;
  cursor: pointer !important;
  font-size: 14px !important;
  height: 3em !important;
  line-height: 3em !important;
  padding: 0 3em !important;
  transition: box-shadow 0.3s ease !important;
  outline: none !important;
  font-style: bold;
}
#btz-cookie-popup button:hover {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3) !important;
}

#btz-cookie-popup .btz-cookie-popup--close:after {
  color: #fff !important;
  content: "X" !important;
  cursor: pointer !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  position: absolute !important;
  right: 1.3em !important;
  top: 0.7em !important;
  -webkit-transform: scaleX(1.25) !important;
          transform: scaleX(1.25) !important;
  transition: color 0.3s ease !important;
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
      -ms-user-select: none !important;
          user-select: none !important;
}
#btz-cookie-popup .btz-cookie-popup--close:hover:after {
  color: #212121 !important;
}

@-webkit-keyframes btz-cookie-popup--close {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  20% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
}

@keyframes btz-cookie-popup--close {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

@-webkit-keyframes btz-cookie-popup--open {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  80% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes btz-cookie-popup--open {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

function btzSetCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function btzGetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function btzCheckCookie() {
    var btz_cookie_popup_visited=btzGetCookie("cookie_pop_visited");
    if (btz_cookie_popup_visited != "") {
      console.log("Cookie popup visited: " + btz_cookie_popup_visited);
    } else {
      setTimeout(function () {
        
        var btz_cookie_popup_span = document.createElement('span');
        btz_cookie_popup_span.innerHTML = btz_cookie_popup_html;
        document.body.appendChild(btz_cookie_popup_span);
        document.body.appendChild(btz_cookie_popup_css);
                    
        const close = document.getElementsByClassName('btz-cookie-popup__c-p-close')[0];
        const card = document.getElementsByClassName('btz-cookie-popup__c-p-card')[0];
        const button = document.getElementsByClassName('btz-cookie-popup__c-p-button')[0];

        card.classList.add('btz-cookie-popup--opened');
        card.classList.remove('btz-cookie-popup--closed');

        card.addEventListener('click', function (e) {
          if (e.target === close | e.target === button) {
            card.classList.remove('btz-cookie-popup--opened');
            card.classList.add('btz-cookie-popup--closed');
            btzSetCookie("cookie_pop_visited", true, 365);
          }
        });
      }, 200);
    }
};

setTimeout(function () {
  btzCheckCookie();
}, 200);