import { Component } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  isCircle: boolean = false;
  itemArray: String[] = new Array(9).fill("empty");
  winner: string = '';
  user: boolean=true;
  computer: boolean=false;

  handleTargetClick=(index)=>
  {
    if(!this.winner)
    {
     
        if(this.itemArray[index]=="empty")
        {
          this.itemArray[index]=this.isCircle?"cross":"circle";
          this.isCircle=!this.isCircle;
          this.checkWinning();
          
        }
        
        if(this.isCircle)
        {
         
          this.playComputer();
        }
          
          
       
        
      
      
    }
  }
  // 0    1    2
       
  // 3    4    5

  // 6    7    8
  checkWinning=()=>
  {
    if(this.itemArray[0]!="empty" && this.itemArray[0]==this.itemArray[1] && this.itemArray[1]==this.itemArray[2])
    {
        if(this.itemArray[0]=='circle')
        {
          this.winner="You won the Game";
        }
        else
        {
          this.winner="Bot won the Game"
        }
    }
    else if(this.itemArray[3]!="empty" && this.itemArray[3]==this.itemArray[4] && this.itemArray[4]==this.itemArray[5])
    {
        if(this.itemArray[3]=='circle')
        {
          this.winner="You won the Game";
        }
        else
        {
          this.winner="Bot won the Game"
        }
    }
    else if(this.itemArray[6]!="empty" && this.itemArray[6]==this.itemArray[7] && this.itemArray[7]==this.itemArray[8])
    {
      if(this.itemArray[6]=='circle')
      {
        this.winner="You won the Game";
      }
      else
      {
        this.winner="Bot won the Game"
      }
    }
    else if(this.itemArray[0]!="empty" &&  this.itemArray[0]==this.itemArray[3] && this.itemArray[3]==this.itemArray[6])
    {
      if(this.itemArray[3]=='circle')
      {
        this.winner="You won the Game";
      }
      else
      {
        this.winner="Bot won the Game"
      }
    }
    else if(this.itemArray[1]!="empty" &&  this.itemArray[1]==this.itemArray[4] && this.itemArray[4]==this.itemArray[7])
    {
      if(this.itemArray[1]=='circle')
      {
        this.winner="You won the Game";
      }
      else
      {
        this.winner="Bot won the Game"
      }
    }
    else if(this.itemArray[2]!="empty" && this.itemArray[2]==this.itemArray[5] && this.itemArray[5]==this.itemArray[8])
    {
      if(this.itemArray[2]=='circle')
      {
        this.winner="You won the Game";
      }
      else
      {
        this.winner="Bot won the Game"
      }
    }
    else if(this.itemArray[0]!="empty" && this.itemArray[0]==this.itemArray[4] && this.itemArray[4]==this.itemArray[8])
    {
      if(this.itemArray[0]=='circle')
      {
        this.winner="You won the Game";
      }
      else
      {
        this.winner="Bot won the Game"
      }
    }
    else if(this.itemArray[2]!="empty" && this.itemArray[2]==this.itemArray[4] && this.itemArray[4]==this.itemArray[6])
    {
      if(this.itemArray[2]=='circle')
      {
        this.winner="You won the Game";
      }
      else
      {
        this.winner="Bot won the Game"
      }
    }
    else if(!this.itemArray.includes('empty'))
    {
        this.winner= "Ohh... It Happens";
    }
  }

   playComputer=()=>
  {
    let indArray: number[] =[];
    const circleArray: number[]=[];
    const crossArray: number[]=[];
    let cross_count: number =0;
    this.itemArray.forEach((element,index) => {
      if(element=='empty')
      {
        indArray.push(index);
      }
      else if(element=='cross')
      {
        cross_count++;
        crossArray.push(index);
      }
      else
      {
        circleArray.push(index);
      }
    });

    if(indArray.length==0)
    {
      this.checkWinning();
      this.winner="Ohh... It Happens";
      return;
    }

    const possibleOuts: number[][]=
    [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  let resultOut: number[][]=possibleOuts;
  let processingTrue: boolean;
  let firstOpsIndex: number;
  if(cross_count==0)
  {
      firstOpsIndex=this.itemArray.indexOf('circle');

          if([0,1,2].includes(firstOpsIndex))
           {
              this.handleTargetClick(firstOpsIndex+6);
           }
           else if([3,4,5].includes(firstOpsIndex))
           {
              this.handleTargetClick(firstOpsIndex+3);
           }
           else
           {
             this.handleTargetClick(firstOpsIndex-6);
           }
  }
  else if(cross_count==1)
  {
      circleArray.forEach(item=>
        {
          resultOut=resultOut.filter(val=>val.includes(item));
        })
        
        if(resultOut.length!=0 && crossArray.filter(val=>resultOut[0].includes(val)).length==0)
        {
          if(resultOut[0].length==3)
          {
              resultOut[0].forEach(val=>
              {
                if(!circleArray.includes(val))
                {
                  this.handleTargetClick(val);
                }
              })
          }
          
           
        }
        else
          {
            indArray=[];
            this.itemArray.forEach((element,index) => {
              if(element=='empty')
              {
                indArray.push(index);
              }
            });
            this.handleTargetClick(indArray[Math.floor(Math.random()*(indArray.length-1))]);
          }
          
  }
    
  else if(cross_count==2 || cross_count==3)
  {
      let atSecondInd: number =-1;
      possibleOuts.forEach(comb=>
        {
            if([this.itemArray[comb[0]],this.itemArray[comb[1]],this.itemArray[comb[2]]].includes('empty') && ![this.itemArray[comb[0]],this.itemArray[comb[1]],this.itemArray[comb[2]]].includes('circle') && [this.itemArray[comb[0]],this.itemArray[comb[1]],this.itemArray[comb[2]]].filter(val=>val=='cross').length==2)
            {
              comb.forEach(e=>
                {
                  if(this.itemArray[e]=='empty')
                  {
                    atSecondInd=e;
                  }
                })
            }
        })

        if(atSecondInd!=-1)
        {
          this.handleTargetClick(atSecondInd);
        }
        else
        {
          let setOne: number[], setTwo: number[],setThree: number[];
      resultOut=possibleOuts;
      [circleArray[0],circleArray[1]].forEach(item=>
        {
          resultOut=resultOut.filter(val=>val.includes(item));
        })
       
          setOne=resultOut[0];
       
      

      resultOut=possibleOuts;
      [circleArray[1],circleArray[2]].forEach(item=>
        {
          resultOut=resultOut.filter(val=>val.includes(item));
        })
      
          setTwo=resultOut[0];
       
    
            resultOut=possibleOuts;
          [circleArray[0],circleArray[2]].forEach(item=>
            {
              resultOut=resultOut.filter(val=>val.includes(item));
            })
            
                setThree=resultOut[0];
            
     
      if(setThree==undefined)
      {
        setThree=[];
      }
      if(setTwo==undefined)
      {
        setTwo=[];
      }
      if(setOne==undefined)
      {
        setOne=[];
      }

      


      let secondInd: number=-1;
      [setOne,setTwo,setThree].forEach(val=>
        
        {
          indArray.forEach(ind=>
            {
              if(val.includes(ind))
              {
                secondInd=ind;
              }
            })
        })
      
        if(secondInd!=-1)
        {
          this.handleTargetClick(secondInd);
        }
        else
        {
          this.handleTargetClick(indArray[Math.floor(Math.random()*(indArray.length-1))]);
        }
       
      
       
        
          
           
        }
  }
  else
  {
    this.handleTargetClick(indArray[Math.floor(Math.random()*(indArray.length-1))]);
  }
    
  }

  replay=()=>
  {
    this.winner='';
    this.isCircle=false;
    this.itemArray=new Array(9).fill('empty');
  }

  

}
