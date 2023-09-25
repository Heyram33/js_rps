console.log("hello")

let playgame=confirm("Shall we play rock/paper/scissor game")
if(playgame){
    while(playgame){
        const userchoice=prompt("Enter ur choice:")
        const player=userchoice.trim().toLowerCase()
        if(player==='rock' || player==='paper' || player==='scissor'){
            const choices=['rock','paper','scissor'];
            let computerchoice=Math.floor(Math.random()*3);
            let computer=choices[computerchoice];
            console.log(computer)
            
            const result=  player===computer? `Your choice: ${player}\nComputer choice: ${computer} \ntie`
            :player==='rock' && computer ==='paper'?  `Your choice: ${player}\nComputer choice: ${computer} \nComputer win`
            :player==='scissor' && computer==='rock'? `Your choice: ${player}\nComputer choice: ${computer} \nComputer win`
            :player==='paper' && computer==='scissor'? `Your choice: ${player}\nComputer choice: ${computer} \nComputer win`:`Your choice: ${player}\nComputer choice: ${computer} \nYou win`
            alert(result)
            playgame = confirm("Play Again")
            if(!playgame) {
                alert('ok thanks for playing')
            }
            else{
                continue;
            }
    }
        else{
            alert('You enterd a wrong choice')   
            continue;
        }
    }
}
else{
    alert('Maybe next time')
}