
document.addEventListener('DOMContentLoaded', function() {
	
	const all_table = document.querySelector("table");
	const all_td = document.getElementsByTagName("td");
	const X = document.getElementById("X");
	const play = document.getElementById("play");
	const reset_game = document.getElementById("reset");
	const play_with = document.getElementById("play_with");
	const you_choose = document.getElementById("you_choose");
	const zero = document.getElementById("zero");
	let helper = "0";
	let winner = "";
	let player = "";
	
	play.addEventListener("click", function() {
		player = "human_play";
		play_with.innerText = "Grasz z inną osobą";
	})
	
	X.addEventListener("click", function() {
		helper = "X";
		if (player == "human_play") { 
		you_choose.innerText = "Wybrałeś X \n Przeciwnik gra O";
		} else { 
		you_choose.innerText = "Wybrałeś X";
		}
		zero.style.display = "none";
	})
	
	zero.addEventListener("click", function() {
		helper = "0";
		if (player == "human_play") { 
		document.getElementById("you_choose").innerText = "Wybrałeś O \n Przeciwnik gra X";
		} else { 
		document.getElementById("you_choose").innerText = "Wybrałeś O";
		}
		X.style.display = "none";
	})
	
	reset_game.addEventListener("click", function() {
		for ( i = 0; i < all_td.length; i = i+1 ) {
			all_td[i].innerText = "";
			document.querySelector("#statement").innerText = "Wynik gry:";
			helper = "0";
			player = "";
			X.style.display = "inline-block";
			zero.style.display = "inline-block";
			winner = "";
			play_with.innerText = "";
			you_choose.innerText = "";
		}
	})
	
	all_table.addEventListener("click", function(e){
		
		let field = e.target.closest("td").innerText
		
		if (winner == true){ 
			return;
		}
		
		if (helper === "X" && field == ""){
		e.target.closest("td").innerText = "X";
			wynik("X"); 
			wynik("0");
			if (player == "") { 
				helper = "0";
			}
			if (player == "human_play") { 
				helper = "0";	
			}
			if (player == "computer_play") {	
				computer_move();						
			}
				wynik("X"); 
				wynik("0");
		return;
		} 
			
		if (helper === "0" && field == ""){ 
		e.target.closest("td").innerText = "0";
			wynik("0");
			wynik("X");
			if (player == "") { 
				helper = "X";
			}
			if (player == "human_play") { 
				helper = "X";
			}
				wynik("0");
				wynik("X");
		return;
		} 
	}) 	
	
	function wygrana(C)
	{
		document.querySelector("#statement").innerText = "Wygrana!" + " \n Wygrał: " + C;
		winner = true;
	}
	
	function remis(){
		document.querySelector("#statement").innerText = "Remis!";
	}
	
	function wynik(C)	{ 
	
		let all_td_tab = [];
		
		
		for ( i = 0; i < all_td.length; i = i+3 )				
		{ 
			if (all_td[i].innerText == C && all_td[i+1].innerText == C && all_td[i+2].innerText == C) { 
			wygrana(C);
			}
		}
		for ( i = 0; i < 3; i= i+1 )							
		{ 	
			if (all_td[i].innerText == C && all_td[i+3].innerText == C && all_td[i+6].innerText == C) { 
			wygrana(C);
			}
		}
			if (all_td[0].innerText == C && all_td[4].innerText == C && all_td[8].innerText == C) { 
			wygrana(C);
			}
			if (all_td[2].innerText == C && all_td[4].innerText == C && all_td[6].innerText == C) { 
			wygrana(C);
			}
		for ( i = 0; i < all_td.length; i = i+1 ) {
			if (all_td[i].innerText != "" ) {
				all_td_tab.push(all_td[i]);
			}}
			if (all_td_tab.length == 9 && winner != true) {
				remis();
			}
	}	
});