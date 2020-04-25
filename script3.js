

let pet={
    name:'simba',
    hunger: 50,
    happiness: 10,

    
        
      

    status:function(){
        document.getElementById("data").innerHTML=` <p>hunger:${this.hunger}</p>
        <p> happiness: ${this.happiness}</p>`;
    },



    
    
    feed:function(){
        //feed the pet
        //decrease hunger
        this.hunger -=10
            if(this.hunger < 0){
                this.hunger=0
            }
            //increase happiness
        this.happiness +=5
            if(this.happiness > 100){
                this.happiness=100
            }

        
        //call status function to update the value in html
        console.log("feeding")
        pet.status()
    }
}






