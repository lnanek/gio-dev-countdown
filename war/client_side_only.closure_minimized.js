var isDragging,logo,logoReplacement,body,PHONE_IMAGES=["193004.jpg","272006.jpg","279006.jpg","293003.jpg","293004.jpg","302002.jpg","311006.jpg","345006.jpg","358001.jpg","420004.jpg","444002.jpg","58003.jpg","608002.jpg","72002.jpg","850005.jpg","850008.jpg","892058.jpg"],currentRandomIndex=-1,currentUserPhoneElement,bits=[],MAX_BITS=50,nextBitIndex=0,allBitsCreated,digits=[];function isAndroid(){return navigator.userAgent.toLowerCase().search("android")>-1}
function handleMouseOverDigit(a,b){var c=document.getElementById(b),d=document.getElementById(b+"Phone");c.style.display="none";if(a!=currentUserPhoneElement){var e;do e=Math.floor(Math.random()*PHONE_IMAGES.length);while(e==currentRandomIndex);currentRandomIndex=e}currentUserPhoneElement=a;d.src="phones/"+PHONE_IMAGES[currentRandomIndex];d.style.width="100%";a.onmouseout=function(){c.style.display="";d.src="images/nexus_one.jpg";d.style.width="100%";a.onmouseout=null}}
function handleTouchStart(a){isDragging=!0;logo.style.position="absolute";logo.style.left=a.touches[a.touches.length].pageX-logo.width/2+"px";logo.style.top=a.touches[a.touches.length].pageY-logo.height/2+"px";logoReplacement.style.display="inline";isAndroid()||a.preventDefault()}
function handleMouseDown(a){isDragging=!0;logo.style.position="absolute";logo.style.left=a.pageX-logo.width/2+"px";logo.style.top=a.pageY-logo.height/2+"px";logoReplacement.style.display="inline";isAndroid()||a.preventDefault()}function handleMouseUp(a){isDragging=!1;isAndroid()||a.preventDefault()}
function handleTouchMove(a){if(null==logo||!isDragging)return!1;logo.style.left=a.touches[a.touches.length].pageX-logo.width/2+"px";logo.style.top=a.touches[a.touches.length].pageY-logo.height/2+"px";isAndroid()||a.preventDefault()}function handleMouseMove(a){if(null==logo||!isDragging)return!1;logo.style.left=a.pageX-logo.width/2+"px";logo.style.top=a.pageY-logo.height/2+"px";isAndroid()||a.preventDefault()}
function animateBits(){var a;allBitsCreated?(a=bits[nextBitIndex],a.img.style.display="inline"):(a={},a.img=document.createElement("img"),a.img.className="flyingBit",a.img.src=Math.floor(Math.random()*2)==0?"images/bit_0.png":"images/bit_1.png",a.img.onmousedown=noDrag);var b=getElementLocation(logo);a.x=b.left+3*logo.width/4;a.y=b.top+logo.height/2;a.img.style.left=a.x+"px";a.img.style.top=a.y+"px";var c=digits[Math.floor(Math.random()*digits.length)],d=getElementLocation(c);a.targetX=d.left+c.width/
2-a.img.width/2;a.targetY=d.top-a.img.height/2;allBitsCreated||body.appendChild(a.img);bits[nextBitIndex]=a;var e=10+Math.floor(Math.random()*40);a.speedX=(a.targetX-a.x)/e;a.speedY=(a.targetY-a.y)/e;if(a.speedY<0)a.y=b.top+logo.height/4-a.img.height,a.img.style.top=a.y+"px",a.targetY=d.top+c.height-a.img.height/2,a.speedY=(a.targetY-a.y)/e;nextBitIndex++;nextBitIndex>=MAX_BITS&&(nextBitIndex=0,allBitsCreated=!0);for(var f in bits)if(a=bits[f],a.x+=a.speedX,a.y+=a.speedY,a.img.style.left=a.x+"px",
a.img.style.top=a.y+"px",b=!1,a.speedX<=0?a.x<=a.targetX&&(b=!0):a.x>=a.targetX&&(b=!0),c=!1,a.speedY<=0?a.y<=a.targetY&&(c=!0):a.y>=a.targetY&&(c=!0),b&&c)a.img.style.display="none"}function noDrag(a){isAndroid()||a.preventDefault()}
function handleLoad(){logo=document.getElementById("logoImage");logoReplacement=document.getElementById("logoReplacement");body=document.getElementById("body");digits[0]=document.getElementById("digitDaysHundredsPhone");digits[1]=document.getElementById("digitDaysTensPhone");digits[2]=document.getElementById("digitDaysOnesPhone");digits[3]=document.getElementById("digitHoursTensPhone");digits[4]=document.getElementById("digitHoursOnesPhone");digits[5]=document.getElementById("digitMinutesTensPhone");
digits[6]=document.getElementById("digitMinutesOnesPhone");digits[7]=document.getElementById("digitSecondsTensPhone");digits[8]=document.getElementById("digitSecondsOnesPhone");animateBits();setInterval(animateBits,100)}function getElementLocation(a){var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent)}a={};a.left=b;a.top=c;return a};