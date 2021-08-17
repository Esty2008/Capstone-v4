class Form
{

    constructor()
    {
        this.button1 = createButton('Level-1');
       this.button2 = createButton('Level-2');
        this.button3 = createButton('Level-3');
  
       
    }
   
    display()
    {
        fill('Red');

        var title = createElement('h2')
        title.html("Choose level");
        title.position(300, 100);

        this.button1.position(100,200);
        this.button1.style('background', 'yellow');

        this.button2.position(300,200);
        this.button2.style('background', 'orange');

        this.button3.position(500,200);
        this.button3.style('background', 'red');

        this.button2.mousePressed(()=>{
          title.hide();
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          game.update(1);
          game.updateLevel(2);
          game.getState();
        });
        this.button1.mousePressed(()=>{
          title.hide();
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          game.update(1);
          game.updateLevel(1);
          game.getState();
        });
        this.button3.mousePressed(()=>{
          title.hide();
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          game.update(1);
          game.updateLevel(3);
          game.getState();
        });
        
        
    }
}
