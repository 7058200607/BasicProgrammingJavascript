function FlipACoin()
{
    let head = 0;
    let tails = 0;
    const prompt =require('prompt-sync')();
    let input =parseInt(prompt("Enter The number of times to Flip Coin :"));

    for (let i = 0; i < input; i++)
    {
        let random =Math.random();
         
        if (random < 0.5)
        {
            head++;
            console.log("Heads")
        }
        else
        { 
            tails++;
            console.log("Tails")
        
        }
    }
    let HeadsPercent=(head/input)*100;
    let TailsPercent=(tails/input)*100;
    console.log("Heads:"+ HeadsPercent+"%");
    console.log("Tails:"+TailsPercent+"%");
}
                
FlipACoin();