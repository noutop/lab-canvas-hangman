class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord=secretWord
    this.wrongLetter = ""
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,800,1200)
    //this.context.fillRect(0,0,50,50)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    this.context.clearRect(0,0,800,1200)
    this.context.beginPath()
    let x=100;
    for(let i=0;i<this.secretWord.length;i++){
      console.log(this.secretWord)
      this.context.moveTo(x,400,50,50)
      this.context.lineTo(x+50,400,50,50) 
      x+=80
      this.context.stroke()
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    // this.context.fillText(secret.Wprds[i],0,0)
    let letter=this.secretWord[index]
    this.context.font="40px Arial"
    let offset=100+index*80
    this.context.fillText(letter,offset,400)

  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font="40px Arial"
    this.context.fillStyle="orange"
    let offset=errorsLeft*50
    this.context.fillText(letter,400+offset,200)
    // if(errorsLeft===0){
    //   alert("LOST")
    // }
   //this.wrongLetter = this.wrongLetter + letter
  //his.context.fillText(this.wrongLetter,100,200)
    //console.log(offset)
    
    // if(this.wrongLetter.length===2){
    //   alert("LOST")
    // }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    //this.context.clearRect(0,0,800,1200)
    this.context.beginPath()
    if(errorsLeft===9){
    this.context.moveTo(0,800)
    this.context.lineTo(100,700)
    this.context.lineTo(200,800)
    this.context.lineTo(0,800)
    this.context.stroke()
    }
    if(errorsLeft===8){
      this.context.moveTo(100,700)
      this.context.lineTo(100,100)
      this.context.stroke()
    }
    if(errorsLeft===7){
      this.context.moveTo(100,100)
      this.context.lineTo(400,100)
      this.context.stroke()
    }
    if(errorsLeft===6){
      this.context.moveTo(400,100)
      this.context.lineTo(400,200)
      this.context.stroke()
    }
    if(errorsLeft===5){
      this.context.arc(400,250,50,0,Math.PI*2)
      this.context.stroke()
    }
    if(errorsLeft===4){
      this.context.moveTo(400,300)
      this.context.lineTo(400,500)
      this.context.stroke()
    }
    if(errorsLeft===3){
      this.context.moveTo(400,500)
      this.context.lineTo(300,600)
      this.context.stroke()
    }
    if(errorsLeft===2){
      this.context.moveTo(400,500)
      this.context.lineTo(500,600)
      this.context.stroke() 
    }
    if(errorsLeft===1){
      this.context.moveTo(400,400)
      this.context.lineTo(300,300)
      this.context.stroke()
    }
    if(errorsLeft===0){
      this.context.moveTo(400,400)
      this.context.lineTo(500,300)
      this.context.stroke()
      //alert("Game Lost!")
    }
    
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
