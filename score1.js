
function pagechange() {
    const w = document.getElementById('wicket').value;
    const o=document.getElementById('over').value;
    localStorage.setItem('w', w); 
    localStorage.setItem('o', o);
    window.location.href = "score1.html";

}


const wic=document.getElementById("vinayw");
const ove=document.getElementById("vinayo");
const wifallen=document.getElementById("vinayw1");
const vitar=document.getElementById("vinayt")
const display=document.getElementById("display");
const display2=document.getElementById("display2");
const wi = localStorage.getItem('w');  
const ov = localStorage.getItem('o');

wic.innerHTML=("Total wickets:"+wi);
ove.innerHTML=("Total overs:"+ov);
let score=0;
let balls=0;
let s="";
let x=0;
let Flag=true;
let tar=0;
let r=true;
let temp;
let flag1=false;
let wickets=0;
ove.value=tar;
let rt;

wifallen.innerHTML=("wickets:"+wickets);
vitar.innerHTML=("Target:"+tar);



function appendtodisplay0(){
       if(r){
            temp=0;
            score+=0;
            balls+=1;
            if(balls == 6){
                x+=1;
                balls=0;

            }

            if(x == ov && tar==0){
                s+="0|-|";
                rem=4;
                Target();
                display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
            }


            else if(x == ov && tar !=0 && score==tar-1){
                display.innerHTML=("Match tied");
                r=false;
            }
            else if(x == ov && tar !=0 && score<tar){
                display.innerHTML=("1st batting team won");
                r=false;

            }
            else if(score>=tar && tar !=0 ){
                display.innerHTML=("2nd batting team won");
                r=false;
            }
            else{
                display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
                if(balls==0){
                    s+="0";
                    s+="||";
                    rem=3;
                }
                else{
                    s+="0,";
                    rem=2;
                }
                display2.value=(s);
            }
       }
}

function appendtodisplay1(){
    if(r){
         temp=1;
         score+=1;
         balls+=1;
         if(balls == 6){
             x+=1;
             balls=0;

         }

         if(x == ov && tar==0){
             s+="1|-|";
             rem=4;
             Target();
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
         }


         else if(x == ov && tar !=0 && score==tar-1){
             display.innerHTML=("Match tied");
             r=false;
         }
         else if(x == ov && tar !=0 && score<tar){
             display.innerHTML=("1st batting team won");
             r=false;

         }
         else if(score>=tar && tar !=0 ){
             display.innerHTML=("2nd batting team won");
             r=false;
         }
         else{
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
             if(balls==0){
                 s+="1";
                 s+="||";
                 rem=3;
             }
             else{
                 s+="1,";
                 rem=2;
             }
             display2.value=(s);
         }
    }
}

function appendtodisplay2(){
    if(r){
         temp=2;
         score+=2;
         balls+=1;
         if(balls == 6){
             x+=1;
             balls=0;

         }

         if(x == ov && tar==0){
             s+="2|-|";
             rem=4;
             Target();
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
         }


         else if(x == ov && tar !=0 && score==tar-1){
             display.innerHTML=("Match tied");
             r=false;
         }
         else if(x == ov && tar !=0 && score<tar){
             display.innerHTML=("1st batting team won");
             r=false;

         }
         else if(score>=tar && tar !=0 ){
             display.innerHTML=("2nd batting team won");
             r=false;
         }
         else{
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
             if(balls==0){
                 s+="2";
                 s+="||";
                 rem=3;
             }
             else{
                 s+="2,";
                 rem=2;
             }
             display2.value=(s);
         }
    }
}

function appendtodisplay3(){
    if(r){
         temp=3;
         score+=3;
         balls+=1;
         if(balls == 6){
             x+=1;
             balls=0;

         }

         if(x == ov && tar==0){
             s+="3|-|";
             rem=4;
             Target();
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
         }


         else if(x == ov && tar !=0 && score==tar-1){
             display.innerHTML=("Match tied");
             r=false;
         }
         else if(x == ov && tar !=0 && score<tar){
             display.innerHTML=("1st batting team won");
             r=false;

         }
         else if(score>=tar && tar !=0 ){
             display.innerHTML=("2nd batting team won");
             r=false;
         }
         else{
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
             if(balls==0){
                 s+="3";
                 s+="||";
                 rem=3;
             }
             else{
                 s+="3,";
                 rem=2;
             }
             display2.value=(s);
         }
    }
}

function appendtodisplay4(){
    if(r){
         temp=4;
         score+=4;
         balls+=1;
         if(balls == 6){
             x+=1;
             balls=0;

         }

         if(x == ov && tar==0){
             s+="4|-|";
             rem=4;
             Target();
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
         }


         else if(x == ov && tar !=0 && score==tar-1){
             display.innerHTML=("Match tied");
             r=false;
         }
         else if(x == ov && tar !=0 && score<tar){
             display.innerHTML=("1st batting team won");
             r=false;

         }
         else if(score>=tar && tar !=0 ){
             display.innerHTML=("2nd batting team won");
             r=false;
         }
         else{
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
             if(balls==0){
                 s+="4";
                 s+="||";
                 rem=3;
             }
             else{
                 s+="4,";
                 rem=2;
             }
             display2.value=(s);
         }
    }
}

function appendtodisplay6(){
    if(r){
         temp=6;
         score+=6;
         balls+=1;
         if(balls == 6){
             x+=1;
             balls=0;

         }

         if(x == ov && tar==0){
             s+="6|-|";
             rem=4;
             Target();
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
         }


         else if(x == ov && tar !=0 && score==tar-1){
             display.innerHTML=("Match tied");
             r=false;
         }
         else if(x == ov && tar !=0 && score<tar){
             display.innerHTML=("1st batting team won");
             r=false;

         }
         else if(score>=tar && tar !=0 ){
             display.innerHTML=("2nd batting team won");
             r=false;
         }
         else{
             display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
             if(balls==0){
                 s+="6";
                 s+="||";
                 rem=3;
             }
             else{
                 s+="6,";
                 rem=2;
             }
             display2.value=(s);
         }
    }
}


function appendtodisplaywicket(){
  if(r){
        wickets+=1;
        temp=432;
        balls+=1;
        if(balls == 6){
                x+=1;
                balls=0;
                s+="w||";
                rem=3;

        }
        else{
            s+="w,";
            rem=2;
        }
        display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        wifallen.innerHTML=("wickets:"+wickets);
        display2.value=(s);

        if(wickets == wi && tar ==0){
            wifallen.innerHTML=("wickets:"+wickets);
            s+="|-|";
            Target();       
        }
        else if(wickets == wi && tar !=0 && score == tar-1){
                display.innerHTML=("Match tied");
                r=false;
        }
        else if(wickets == wi && tar != 0 && tar > score){
               display.innerHTML=("1st batting team won");
               r=false;
        }
        
  }
}



function prev(){
    if(r){
        if(rt==12345){
            score-=temp;
            wickets-=1;
        }
        else if(rt==1234){
            score-=temp;
        }
        else if(rt==123){
            score-=temp;
            wickets-=1;
            if(balls==0){
                if(x==0){
                    x=0;
                }
                else{
                    x-=1;
                }
                balls=5;
            }
            else{
                balls-=1;
                
            }
        }

        else if(temp==432){
            wickets-=1;
            if(balls==0){
                if(x==0){
                    x=0;
                }
                else{
                    x-=1;
                }
                balls=5;
            }
            else{
                balls-=1;
                
            }
        } 

        else if(temp==12345){
            score-=1;
        }

        else if(temp==0 || temp==1 || temp==2 || temp==3 || temp==4 || temp==6){
              score-=temp;
              if(balls==0){
                  if(x==0){
                    x=0;
                    
                  }
                  else{
                    x-=1;
                  }
                  balls=5;
              }
              else{
                balls-=1;
              }
        }
        s=s.slice(0,-rem);
        display2.value=s;
        
        display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        wifallen.innerHTML=("wickets:"+wickets);
    }
}


function Target(){
    wickets=0;
    tar=score+1;
    x=0;
    balls=0;
    score=0;
    display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
    display2.value=(s);
    vitar.innerHTML=("Target:"+tar);

}


function appendtodisplayWide(){
    if(r){
        temp=12345;
        score+=1;
        s+="wd,";
        rem=3;
        display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        display2.value=(s);
        
    }
}

function cleardisplay(){
    window.location.href=("firstpage.html");
}

function runout(){
    if(r){
         balls+=1;
         if(balls == 6){
             x+=1;
             balls=0;

         }
        
        rt=123;
        let rnro=prompt("how many runs scored in runout?");
        if(rnro=="" || rnro==null){
            rnro="0";
        }
        wickets+=1;
        score+=Number(rnro);
        temp=Number(rnro);
        s+="w+"+rnro+",";
        rem=4;
        wifallen.innerHTML=("wickets:"+wickets);
        display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        display2.value=(s);


        if(wickets == wi && tar ==0){
            wifallen.innerHTML=("wickets:"+wickets);
            s+="|-|";
            Target();       
        }
        else if(wickets == wi && tar !=0 && score == tar-1){
                display.innerHTML=("Match tied");
                r=false;
        }
        else if(wickets == wi && tar != 0 && tar > score){
               display.innerHTML=("1st batting team won");
               r=false;
        }
        else if(x == ov && tar==0){
            Target();
            display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        }


        else if(x == ov && tar !=0 && score==tar-1){
            display.innerHTML=("Match tied");
            r=false;
        }
        else if(x == ov && tar !=0 && score<tar){
            display.innerHTML=("1st batting team won");
            r=false;

        }
        else if(score>=tar && tar !=0 ){
            display.innerHTML=("2nd batting team won");
            r=false;
        }
    }   
}



function NB(){

    if(r){

        rt=1234;
        let rnnb=prompt("how many runs scored in nb?");
        if(rnnb=="" || rnnb==null){
            rnnb="0";
        }
        let nbw=prompt("how any wickets fallen?if yes press 1 else press 0");
        if(nbw=="" || nbw==null){
            nbw="0";
        }
        score+=1;
        temp=Number(rnnb);
        temp+=1;
        score+=Number(rnnb);

        if(Number(nbw)){
            rt=12345;
            wickets+=1;
            s+="Nb+w+"+rnnb+",";
            rem=7;
        }
        else{
            s+="Nb+"+rnnb+",";
            rem=5;
        }
        wifallen.innerHTML=("wickets:"+wickets);
        display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        display2.value=(s);

        if(wickets == wi && tar ==0){
            wifallen.innerHTML=("wickets:"+wickets);
            s+="|-|";
            Target();       
        }
        else if(wickets == wi && tar !=0 && score == tar-1){
                display.innerHTML=("Match tied");
                r=false;
        }
        else if(wickets == wi && tar != 0 && tar > score){
               display.innerHTML=("1st batting team won");
               r=false;
        }
        else if(x == ov && tar==0){
            s+="|-|";
            Target();
            display.innerHTML=("score:"+score+" "+"overs:"+x+"."+balls);
        }


        else if(x == ov && tar !=0 && score==tar-1){
            display.innerHTML=("Match tied");
            r=false;
        }
        else if(x == ov && tar !=0 && score<tar){
            display.innerHTML=("1st batting team won");
            r=false;

        }
        else if(score>=tar && tar !=0 ){
            display.innerHTML=("2nd batting team won");
            r=false;
        }
        else if(score>=tar && tar !=0 ){
            display.innerHTML=("2nd batting team won");
            r=false;
        }
        else if(wickets == wi && tar != 0 && tar > score){
            display.innerHTML=("1st batting team won");
            r=false;
        }
        
    }

}
