var easy=["24","31","32","33","36","43","45","51","53","55","56","68"]; 
var medium=["15","22","23","27","28","31","34","35","37","41","43","49","54","56","57","62","69","73","75","76","82","83","87","88","95"];
var hard=["14","15","19","22","27","35","38","42","43","46","47","54","59","61","65","67","68","73","81","85","87","88","92","94","96","98","101","107","112","113","115","116","119","125","128","132","134","136","143","147"];
// ,"151","154","155","158","161","162","165","166","168","173","174","178","182","186","187","193","194","198","202","206","207","213","216","219","221","222","225","228","234","237","245","247","248","251","253","255","258","263","264","267","271","275","277","279","283","289"];
var ebonus=["41","46"];
var mbonus=["33","39","98"];
var hbonus=["18","71","75","106","129"];
var monstMov=[down,right,left,up];
var monstMov2=[left2,right2,down2,up2];
var retry=[];
var blocks,x,y,user='',count,t,score,bonus,r,l,d,u,br,monsterStart,monsterStart2,size='';

interface();
// function dance(){
// 	document.getElementById(startn).style.transform="rotate(startndeg)";;
// }
// setInterval(dance,500);

/*to replace pic into screen size*/
var compare = screen.width;
if(compare<=450 && compare>=375){
	size='39';
}
else if(compare<375){
	size='32';
}
else{
	size='';
}
function ret(){
	interface()
	retry[0]();
}

function interface() {
	var st =document.createElement('div');
	st.id="interface";
	document.body.appendChild(st);
	document.getElementById("interface").innerHTML=(`
	<div class='container mt-5 pt-5 text-center'>
		<div class='row'>
			<div class='col'>
				<div>
					<img src='./img/logo.png' class='mb-3'>
				</div>
				<h3 class='bird-logo mb-5'>BIRD <span>GAME</span></h3>
				<div class='username-box col-md-5 m-auto p-3' onclick='username()'>Enter Your Name Please</div>
				<div class='text-center mt-5'>
					<button id='easy' class='btn btn-light col-md-3 col-3 mr-2 startbtn' onclick='eas()'>Easy</button>
					<button id='medium' class='btn btn-light col-md-3 col-4 mr-2 startbtn' onclick='mediu()'>Medium</button>
					<button id='hard' class='btn btn-light col-md-3 col-3 mr-2 startbtn' onclick='har()'>Hard</button> 
				</div>
			</div>
		</div>
		<div class="authors text-center">
      		<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
      		<h3>Games</h3>
    	</div>
	</div>`);	
	document.getElementById("interface").previousSibling.innerHTML="";
}

function newGame(){
	document.body.innerHTML="";
	b=blocks.length;
	bon=bonus.length;
	br="ok";
	monsterStart=12;
	monsterStart2=78;
	document.body.innerHTML=`
	<div class='container'>
		<div class='row'>
			<div class='col-md-8 col-12'>
				<div id='map' ></div>
			</div>
			<div class='col-md-4 col-11 mt-4'>
				<div class='row'>
					<div id='mov'   class='col-4 col-md-12 text-uppercase text-center'><h4>Move</h4><p id='move'>0</p></div>
					<div id='score' class='col-4 col-md-12 text-uppercase text-center'><h4>Score</h4><p id='points'>0</p></div>
					<div id='time'  class='col-4 col-md-12 text-uppercase text-center'><h4>Seconds</h4><p id='sec'>0</p></div>
				</div>
			</div>
		</div>

		<div class='move-btns-box'>
			<div class='col-12 text-center mb-3'>
				<button onclick='myFunction(38)' class='move-btns'><i class="fas fa-chevron-circle-up"></i></button>
			</div>

			<div class='row'>
				<div class='col-4 text-center'>
					<button onclick='myFunction(37)' class='move-btns float-right'><i class="fas fa-chevron-circle-left"></i></button>
				</div>
				<div class='col-4 text-center'>
					<button onclick='myFunction(40)' class='move-btns'><i class="fas fa-chevron-circle-down"></i></button>
				</div>
				<div class='col-4 text-center'>
					<button onclick='myFunction(39)' class='move-btns float-left'><i class="fas fa-chevron-circle-right"></i></button>
				</div>
			</div>
		</div>

		<div class="authors text-center">
      		<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
      		<h3>Games</h3>
    	</div>
	</div>`;

	for(var i=0;i<x;i++){
		var rowMap= document.createElement('div');
		rowMap.id = "a"+(i+1);
		rowMap.className="rowMap";
		document.getElementById('map').appendChild(rowMap);		
		for(var k=0;k<y;k++){
			var cell= document.createElement('div');
			var z= (""+((i)+1)+(k+1));
			// console.log(z);
			cell.id=z;
			cell.className = "cellMap";
			document.getElementById("a"+(i+1)).appendChild(cell);
		}
	}
	start = ("")+x+("1");
	startn = parseInt(start);
	document.getElementById(start).style.background = `url(./img/bird${size}.png)`;
	document.getElementById(start).style.color = "yellow";
	for(i=0;i<b;i++){
	var cc =document.getElementById(blocks[i]);
	cc.setAttribute("style",`background:url(./img/stone${size}.png);color:black;`);
	};
	for(i=0;i<bon;i++){
	var cc=	document.getElementById(bonus[i]);
	cc.setAttribute("style",`background:url(./img/bouns${size}.png);color:red;`);
	}
		
}	

function placeMoster(xy){
	document.getElementById(xy).style.background=`url(./img/monster${size}.png)`;
	document.getElementById(xy).style.color="blue";	
}

setInterval(move,170);

function move(){
	if(br=="ok"){
		// console.log(startn);
		// console.log(monsterStart);
		// console.log("moving");
		monstMov[0]();
		monstMov2[0]();
	}
	else{return false}
}

function left(){	
	if(((monsterStart-1)%10)!=0){	
		if((document.getElementById(monsterStart-1).style.color=="black")||(document.getElementById(monsterStart-1).style.color=="red")||(document.getElementById(monsterStart-1).style.color=="green")){
			// console.log("monssLeft");
			monstMov=[right,down,up];
			shuffle(monstMov);
			monstMov[0]();
			br="ok";
		}
		else if(document.getElementById(monsterStart-1).style.color=="yellow"){
			// console.log("monsterdeadleft");
			document.body.innerHTML = (`
			<div class='container pt-lg-5'>
				<div class='row'>
					<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
						<h2 class='mt-2'>
							<span id='name' class='text-capitalize'></span>
						</h2>
						<p id='paragraph'></p>
						<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
						<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
					</div>
				</div>
				<div class="authors text-center">
					<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
					<h3>Games</h3>
			</div>
			</div>`);
			document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
				br="";
				clearInterval(t);
			}
		else{
		document.getElementById(monsterStart-1).style.background=`url(./img/monster${size}.png)`;
		document.getElementById(monsterStart).style.background="transparent";
		document.getElementById(monsterStart-1).style.color="blue";
		document.getElementById(monsterStart).style.color="";	
		monsterStart--;
		br="ok";	
		}
	}
	else{
		// console.log("elseLeft");
		monstMov=[right,down,up];
		shuffle(monstMov);
		monstMov[0]();
		br="ok";
	}
}

function right(){
	if(((monsterStart-y)%10)!=0){	
		if((document.getElementById(monsterStart+1).style.color=="black")||(document.getElementById(monsterStart+1).style.color=="red")||(document.getElementById(monsterStart+1).style.color=="green")){
		// console.log("monsRight");
		monstMov=[left,down,up];
		shuffle(monstMov);
		monstMov[0]();
		br="ok";
		}
		else if(document.getElementById(monsterStart+1).style.color=="yellow"){
			// console.log("monsterdeadright");
			document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
			document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
			br="";
			clearInterval(t);
		}
		else{
			document.getElementById(monsterStart+1).style.background=`url(./img/monster${size}.png)`;
			document.getElementById(monsterStart).style.background="transparent";
			document.getElementById(monsterStart+1).style.color="blue";
			document.getElementById(monsterStart).style.color="";	
			monsterStart++;
			// console.log("right");
			br="ok";
		}
	}
	else{
	// console.log("elseRight");
	monstMov=[left,down,up];
	shuffle(monstMov);
	monstMov[0]();
	br="ok";
	}
}

function down(){
	if(monsterStart<(x*10)){	
		if((document.getElementById(monsterStart+10).style.color=="black")||(document.getElementById(monsterStart+10).style.color=="red")||(document.getElementById(monsterStart+10).style.color=="green")){
			// console.log("monsDown");
			monstMov=[right,left,up];
			shuffle(monstMov);
			monstMov[0]();
			br="ok";
		}
		else if(document.getElementById(monsterStart+10).style.color=="yellow"){
				// console.log("monsterdeaddown");
				document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
				br="";
				clearInterval(t);
		}
		else{		
			document.getElementById(monsterStart+10).style.background=`url(./img/monster${size}.png)`;
			document.getElementById(monsterStart).style.background="transparent";
			document.getElementById(monsterStart+10).style.color="blue";
			document.getElementById(monsterStart).style.color="";	
			monsterStart+=10;
			br="ok";
		}
	}
	else{
		// console.log("elseDown");
		monstMov=[right,left,up];
		shuffle(monstMov);
		monstMov[0]();
		br="ok";
	}
}

function up(){
	if(monsterStart>20){	
		if((document.getElementById(monsterStart-10).style.color=="black")||(document.getElementById(monsterStart-10).style.color=="red")||(document.getElementById(monsterStart-10).style.color=="green")){
			// console.log("monsUp");
			monstMov=[right,down,left];
			shuffle(monstMov);
			monstMov[0]();
			br="ok";
		}
		else if(document.getElementById(monsterStart-10).style.color=="yellow"){
			// console.log("monsterdeadup");
			document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
			document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
			br="";
			clearInterval(t);
		}
		else{		
			document.getElementById(monsterStart-10).style.background=`url(./img/monster${size}.png)`;
			document.getElementById(monsterStart).style.background="transparent";	
			document.getElementById(monsterStart-10).style.color="blue";
			document.getElementById(monsterStart).style.color="";
			monsterStart-=10;
			br="ok";
		}
	}
	else{
		// console.log("elseUp");
		monstMov=[right,down,left];
		shuffle(monstMov);
		monstMov[0]();
		br="ok";
	}
}


// monster 2
function left2(){	
	if(((monsterStart2-1)%10)!=0){	
		if((document.getElementById(monsterStart2-1).style.color=="black")||(document.getElementById(monsterStart2-1).style.color=="red")||(document.getElementById(monsterStart2-1).style.color=="green")){
			// console.log("monssLeft");
			monstMov2=[right2,down2,up2];
			shuffle(monstMov2);
			monstMov2[0]();
			br="ok";
		}
		else if(document.getElementById(monsterStart2-1).style.color=="yellow"){
			document.body.innerHTML = (`
			<div class='container pt-lg-5'>
				<div class='row'>
					<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
						<h2 class='mt-2'>
							<span id='name' class='text-capitalize'></span>
						</h2>
						<p id='paragraph'></p>
						<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
						<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
					</div>
				</div>
				<div class="authors text-center">
					<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
					<h3>Games</h3>
			</div>
			</div>`);
			document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
	
				clearInterval(t);
			}
		else{
		document.getElementById(monsterStart2-1).style.background=`url(./img/monster${size}.png)`;
		document.getElementById(monsterStart2).style.background="transparent";
		document.getElementById(monsterStart2-1).style.color="blue";
		document.getElementById(monsterStart2).style.color="";	
		monsterStart2--;
		br="ok";	
		}
	}
	else{
		// console.log("elseLeft");
		monstMov2=[right2,down2,up2];
		shuffle(monstMov2);
		monstMov2[0]();
		br="ok";
	}
}

function right2(){
	if(((monsterStart2-y)%10)!=0){	
		if((document.getElementById(monsterStart2+1).style.color=="black")||(document.getElementById(monsterStart2+1).style.color=="red")||(document.getElementById(monsterStart2+1).style.color=="green")){
		// console.log("monsRight");
		monstMov2=[left2,down2,up2];
		shuffle(monstMov2);
		monstMov2[0]();
		br="ok";
		}
		else if(document.getElementById(monsterStart2+1).style.color=="yellow"){
			document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
			document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
			br="";
			clearInterval(t);
		}
		else{
			document.getElementById(monsterStart2+1).style.background=`url(./img/monster${size}.png)`;
			document.getElementById(monsterStart2).style.background="transparent";
			document.getElementById(monsterStart2+1).style.color="blue";
			document.getElementById(monsterStart2).style.color="";	
			monsterStart2++;
			// console.log("right");
			br="ok";
		}
	}
	else{
	// console.log("elseRight");
	monstMov2=[left2,down2,up2];
	shuffle(monstMov2);
	monstMov2[0]();
	br="ok";
	}
}

function down2(){
	if(monsterStart2<(x*10)){	
		if((document.getElementById(monsterStart2+10).style.color=="black")||(document.getElementById(monsterStart2+10).style.color=="red")||(document.getElementById(monsterStart2+10).style.color=="green")){
			// console.log("monsDown");
			monstMov2=[right2,left2,up2];
			shuffle(monstMov2);
			monstMov2[0]();
			br="ok";
		}
		else if(document.getElementById(monsterStart2+10).style.color=="yellow"){
			document.body.innerHTML = (`
			<div class='container pt-lg-5'>
				<div class='row'>
					<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
						<h2 class='mt-2'>
							<span id='name' class='text-capitalize'></span>
						</h2>
						<p id='paragraph'></p>
						<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
						<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
					</div>
				</div>
				<div class="authors text-center">
					<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
					<h3>Games</h3>
			</div>
			</div>`);
			document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);			br="";
			clearInterval(t);
		}
		else{		
			document.getElementById(monsterStart2+10).style.background=`url(./img/monster${size}.png)`;
			document.getElementById(monsterStart2).style.background="transparent";
			document.getElementById(monsterStart2+10).style.color="blue";
			document.getElementById(monsterStart2).style.color="";	
			monsterStart2+=10;
			br="ok";
		}
	}
	else{
		// console.log("elseDown");
		monstMov2=[right2,left2,up2];
		shuffle(monstMov2);
		monstMov2[0]();
		br="ok";
	}
}

function up2(){
	if(monsterStart2>20){	
		if((document.getElementById(monsterStart2-10).style.color=="black")||(document.getElementById(monsterStart2-10).style.color=="red")||(document.getElementById(monsterStart2-10).style.color=="green")){
			// console.log("monsUp");
			monstMov2=[right2,down2,left2];
			shuffle(monstMov2);
			monstMov2[0]();
			br="ok";
		}
		else if(document.getElementById(monsterStart2-10).style.color=="yellow"){
			document.body.innerHTML = (`
			<div class='container pt-lg-5'>
				<div class='row'>
					<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
						<h2 class='mt-2'>
							<span id='name' class='text-capitalize'></span>
						</h2>
						<p id='paragraph'></p>
						<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
						<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
					</div>
				</div>
				<div class="authors text-center">
					<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
					<h3>Games</h3>
			</div>
			</div>`);
			document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);			br="";
			clearInterval(t);
		}
		else{		
			document.getElementById(monsterStart2-10).style.background=`url(./img/monster${size}.png)`;
			document.getElementById(monsterStart2).style.background="transparent";	
			document.getElementById(monsterStart2-10).style.color="blue";
			document.getElementById(monsterStart2).style.color="";
			monsterStart2-=10;
			br="ok";
		}
	}
	else{
		// console.log("elseUp");
		monstMov2=[right2,down2,left2];
		shuffle(monstMov2);
		monstMov2[0]();
		br="ok";
	}
}


// monster 2 

function username(){
	user=prompt("Enter your Name");
}

function counter(){
	count+=1;
	document.getElementById("sec").innerHTML=count;
}

function eas(){
	x=6;
	y=8;
	blocks=easy;
	bonus=ebonus;
	retry=[eas];
	moves=0;
	count=0;
	score=0;
	newGame();
	// monsterStart2=68;
	document.getElementById(11).style.background=`url(./img/home${size}.png)`;
	document.getElementById(11).style.color="green";
	placeMoster(12);
	// placeMoster(68);
	t= setInterval(counter, 1000);
}

function mediu(){
	x=9;
	y=9;
	bonus=mbonus;
	blocks=medium;
	retry=[mediu]
	moves=0;
	count=0;
	score=0;
	newGame();
	document.getElementById(11).style.background=`url(./img/home${size}.png)`;
	document.getElementById(11).style.color="green";
	placeMoster(12);
		placeMoster(78);
	t = setInterval(counter, 1000);
}

function har(){
	x=14;
	y=9;
	blocks=hard;
	moves=0;
	retry=[har];
	bonus=hbonus;
	count=0;
	score=0;
	newGame();
	document.getElementById(11).style.background=`url(./img/home${size}.png)`;
	document.getElementById(11).style.color="green";
	t =setInterval(counter, 1000);
}

function myFunction(key) {
	// var key = event.keyCode;
	console.log(key);
		switch (key){
		case 37:
		// console.log("left");
		if(((startn-1)%10)!=0){
			if(document.getElementById(startn-1).style.color=="black"){
				break;
			}
			else if(document.getElementById(startn-1).style.color=="blue"){
				// console.log("birddeadleft");
				document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);				br="";
				clearInterval(t);
			}
			else if(document.getElementById(startn-1).style.color=="red"){score+=10;
				document.getElementById("points").innerHTML=score;
				document.getElementById(startn-1).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn).style.color = "";
				moves++;
				document.getElementById("move").innerHTML = moves;
				startn--;
				// console.log(score);
			}
			else if(document.getElementById(startn-1).style.color=="green"){
				br="";
				moves++;
				document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
					</div>
				</div>`);
				document.getElementById("name").innerHTML=("Congratulations "+user);
				document.getElementById("paragraph").innerHTML=("You finished in "+moves+" Movemand in "+count+" seconds."+"<br/>Your score is  "+score);				clearInterval(t);
				clearInterval(t);
				// console.log("Done!");
			}
			else{
				document.getElementById(startn-1).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn).style.color = "";
				document.getElementById(startn-1).style.color = "yellow";
				moves++;
				document.getElementById("move").innerHTML = moves;
				startn--;
			}
		}
		break;
		case 38:
		// console.log("up");
		if(startn>20){	
			if(document.getElementById(startn-10).style.color=="black"){
				break;
			}
			else if(document.getElementById(startn-10).style.color=="blue"){
				// console.log("birddeadup");
				document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);				br="";
				clearInterval(t);
			}
			else if(document.getElementById(startn-10).style.color=="red"){score+=10;
				document.getElementById("points").innerHTML=score;
				document.getElementById(startn-10).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn).style.color = "";
				startn-=10;
				moves++;
				document.getElementById("move").innerHTML = moves;
			}
			else if(document.getElementById(startn-10).style.color=="green"){
				br="";
				moves++;
				document.body.innerHTML = ("<div class='container pt-lg-5'><div class='row'><div id='finnish' class='col-md-8 m-auto text-center pt-5'><h2 class='mt-2'><span id='name' class='text-capitalize'></span></h2><p id='paragraph'></p><button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button><button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button></div></div></div>");
				document.getElementById("name").innerHTML=("Congratulations "+user);
				document.getElementById("paragraph").innerHTML=("You finished in "+moves+" Movemand in "+count+" seconds."+"<br/>Your score is  "+score);				clearInterval(t);	
				clearInterval(t);
				// console.log("Done!");
			}
			else{
				document.getElementById(startn-10).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn-10).style.color = "yellow";
				document.getElementById(startn).style.color = "";
				startn-=10;
				moves++;
				document.getElementById("move").innerHTML = moves;
			}
		};
		break;
		case 39:
		// console.log("right");
		if(((startn-y)%10)!=0){	
			if(document.getElementById(startn+1).style.color=="black"){
				break;
			}
			else if(document.getElementById(startn+1).style.color=="blue"){
				// console.log("birddeadright");
				document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);				br="";
				clearInterval(t);
			}
			else if(document.getElementById(startn+1).style.color=="red"){score+=10;
				document.getElementById("points").innerHTML=score;
				document.getElementById(startn+1).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn).style.color = "";
				moves++;
				document.getElementById("move").innerHTML = moves;			
				startn++;
			}
			else if(document.getElementById(startn+1).style.background==`url(./img/home${size}.png)`){
				moves++;
				document.getElementById("move").innerHTML = moves;
				// console.log("Done!");
			}
			else{
				document.getElementById(startn+1).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn+1).style.color = "yellow";
				document.getElementById(startn).style.color = "";
				moves++;
				document.getElementById("move").innerHTML = moves;			
				startn++;
			}
		};
		break;
		case 40:
		// console.log("down");
		if(startn<(x*10)){
			if(document.getElementById(startn+10).style.color=="black"){
				break;
			}
			else if(document.getElementById(startn+10).style.color=="blue"){
				// console.log("birddeaddown");
				document.body.innerHTML = (`
				<div class='container pt-lg-5'>
					<div class='row'>
						<div id='finnish' class='col-md-8 m-auto text-center pt-5'>
							<h2 class='mt-2'>
								<span id='name' class='text-capitalize'></span>
							</h2>
							<p id='paragraph'></p>
							<button id='start' class='btn my-5 mr-3 px-5' onclick='ret()'>Retry</button>
							<button id='new' class='btn my-5 px-4' onclick='interface()'>New Game</button>
						</div>
					</div>
					<div class="authors text-center">
						<h4>Hazem <i class="fas fa-bolt"></i> Refaat</h4>
						<h3>Games</h3>
				</div>
				</div>`);
				document.getElementById("name").innerHTML=("Try Again "+user);
				document.getElementById("paragraph").innerHTML=("You are dead in "+count+" seconds."+"<br/>Your score is  "+score);
				br="";
				clearInterval(t);
			}
			else if(document.getElementById(startn+10).style.color=="red"){score+=10;
				document.getElementById("points").innerHTML=score;
				document.getElementById(startn+10).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn).style.color = "";
				moves++;
				document.getElementById("move").innerHTML = moves;			
				startn+=10;
			}
			else if(document.getElementById(startn+10).style.background==`url(./img/home${size}.png)`){
				// console.log("Done!");
			}
			else{
				document.getElementById(startn+10).style.background=`url(./img/bird${size}.png)`;
				document.getElementById(startn).style.background="transparent";
				document.getElementById(startn+10).style.color = "yellow";
				document.getElementById(startn).style.color = "";
				moves++;
				document.getElementById("move").innerHTML = moves;			
				startn+=10;
			}
		};
		break;
	}
}

function shuffle(arra1) {

	var ctr = arra1.length, temp, index;

	// While there are elements in the array
	    while (ctr > 0) {
	// Pick a random index
	        index = Math.floor(Math.random() * ctr);
	// Decrease ctr by 1
	        ctr--;
	// And swap the last element with it
	        temp = arra1[ctr];
	        arra1[ctr] = arra1[index];
	        arra1[index] = temp;
    }
    return arra1;
}
