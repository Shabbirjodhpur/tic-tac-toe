var gameData = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
]

var playerChance = 1;

function giveWinAlert(num){
	if(num==1) alert('Player X has won')
	else if(num==2) alert('Player O has won')		
}

function checkForWin(){
	//row check
	for(let i=0;i<3;i++){
		if(gameData[i][0]==gameData[i][1] && gameData[i][1]==gameData[i][2]){
			giveWinAlert(gameData[i][0])
		}
	}
	//column check
	for(let j=0;j<3;j++){
		if(gameData[0][j] == gameData[1][j] && gameData[1][j]==gameData[2][j]){
			giveWinAlert(gameData[0][j])	
		}
	}
	//diagonal check
	if(gameData[0][0] == gameData[1][1] && gameData[1][1]==gameData[2][2]){
		giveWinAlert(gameData[0][0])
	}
	if(gameData[0][2] == gameData[1][1] && gameData[1][1]==gameData[2][0]){
		giveWinAlert(gameData[0][2])
	}
}

function updatePlayer(){
	if(playerChance==1) playerChance = 2;
	else playerChance=1;	
}

function handleClick(num){
	let i = Math.floor(num/3);
	let j = num%3;
	if(gameData[i][j]==0){
		gameData[i][j]=playerChance;
		updatePlayer();
		render();
		
	}
}

function render(){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			if(gameData[i][j]==1){
				document.getElementById((i*3) + j).innerText = 'X'
			}
			if(gameData[i][j]==2){
				document.getElementById((i*3) + j).innerText = 'O'
			}
			if(gameData[i][j]==0){
				document.getElementById((i*3) + j).innerText = ''
			}
		}
	}
	if(playerChance==1){
		document.getElementById("chance").innerText = "It is X player's turn"
	}else{
		document.getElementById("chance").innerText = "It is O player's turn"
	}
	checkForWin();
}

function main(){
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			document.getElementById((i*3) + j).addEventListener("click",(e)=>{
				handleClick(e.target.id);
			})
		}
	}
	render()
}

main()
