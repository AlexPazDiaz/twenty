var oscorep = 0
var oscorec = 0
alert("Welcome to BOOTLEG BLACKJACK! The point of the game is to see who gets closer to 20 - you or computer. Have fun! We'll start with the computer:")

do {
    var scorep = 0
    var scorec = 0
    do {
        var num1 = Math.floor(Math.random() * 10) + 1
        scorec = scorec + num1
        alert(`${num1} is the new number, ${scorec} is the computer's score.`)
    } while (scorec < 16)
    alert(`The computer has reached ${scorec} and will no longer draw.`)
    if (scorec > 20) {
        alert("The computer has gone over 20; you win automatically!")
        oscorep = oscorep + 1
        alert(`Overall score is YOU: ${oscorep} COMPUTER: ${oscorec}.`)
        var play = prompt("Would you like to play again? y/n")
        if (play == "n") {
            alert(`Final scores! YOU: ${oscorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
            break            
        }       
    }
    do {
        var num2 = Math.floor(Math.random() * 10) + 1
        scorep = scorep + num2
        alert(`You drew an ${num2}, your number is now ${scorep}`)
        var draw = prompt(`Would you like to draw? y/n`)
    } while ((draw == "y") && (scorep < 20))
    if (scorep > 20) {
        alert(`You have gone over 20 with ${scorep} - you lose. `)
        oscorec = oscorec + 1
        alert(`Overall score is YOU: ${oscorep} COMPUTER: ${oscorec}.`)
        var play = prompt("Would you like to play again? y/n")
        if (play == "n") {
            alert(`Final scores! YOU: ${oscorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
            break
        }
    } else {
        alert("You and the computer are both under 20.")
        if (scorep > scorec) {
            alert(`You win with ${scorep}! Computer loses with ${scorec}`)
            oscorep = oscorep + 1
            alert(`Overall score is YOU: ${oscorep} COMPUTER: ${oscorec}.`)
            var play = prompt("Would you like to play again? y/n")
            if (play == "n") {
                alert(`Final scores! YOU: ${oscorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
                break 
            }
        } else if (scorep < scorec) {
            alert(`You lose with ${scorep}. Computer wins with ${scorec}!`)
            oscorec = oscorec + 1
            alert(`Overall score is YOU: ${oscorep} COMPUTER: ${oscorec}.`)
            var play = prompt("Would you like to play again? y/n")
            if (play == "n") {
                alert(`Final scores! YOU: ${oscorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
                break   
            }
        } else {
            alert(`You are tied. No points given.`)
            alert(`Overall score is YOU: ${oscorep} COMPUTER: ${oscorec}.`)
            var play = prompt("Would you like to play again? y/n")
            if (play == "n") {
                alert(`Final scores! YOU: ${oscorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
                break   
            }
        }
    }
} while (play == "y")