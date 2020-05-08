
var aTags=document.getElementsByTagName("a");
// var animationDone=false;

var skillBars=document.getElementsByClassName("skill-progress1");
var animationDone=Array(skillBars.length).fill(false);
initSkillBars();
function initSkillBars()
{  
    for(let bar of skillBars)
    {
        bar.style.width=0+'%';
    }
}

function fillBar()
{  
    var percent=[65,85,95,70,80,90];
    var i=0;
    for(let bar of skillBars)
    {   
        let prcnt=bar.getAttribute("data-value");
        let prcntcur=0;
        let itId=setInterval(function(){
              prcntcur++;
              bar.style.width=(prcntcur+'%');
              if(prcntcur>prcnt)
              {
                  clearInterval(itId);
              }
              prcntcur++;
        },10);
        i++;
    }
}
function initSingleSkillBar(bar)
{  
    bar.style.width=0+'%';
}
function fillSingleBar(bar)
{  
    var curPrcnt=0;
    var prcnt=bar.getAttribute("data-value");
    let intervalId=setInterval(function()
    {
        bar.style.width=(curPrcnt+'%');
        if(curPrcnt>prcnt)
        {
            clearInterval(intervalId);
            return ;
        }
        curPrcnt++;
    },10);
}
window.addEventListener('scroll',skillListner);
function skillListner()
{
    
    for(let b of animationDone)
    {
        console.log(b);
        
    }
    console.log("done");
    var i=0;
    for(let bar of skillBars)
    {
        let topOfCurBar=bar.getBoundingClientRect().top;
        if(!animationDone[i] && topOfCurBar<window.innerHeight)
        {
            fillSingleBar(bar);
            animationDone[i]=true; 
            console.log(bar);  
        }else if(topOfCurBar>window.innerHeight)
        {
            animationDone[i]=false;
            initSingleSkillBar(bar);
        }
        i++;
    }
}
function slideBar(percnt,el)
{
    el.style.height=percnt+'%';
}
for(let i=0;i<aTags.length;i++)
{
    aTags[i].addEventListener('click',function(events){
          events.preventDefault();
          var trgSectionId=this.textContent.trim().toLowerCase();
          console.log(trgSectionId);
          var trgSection=document.getElementById(trgSectionId);
          var iId=setInterval(function(){
              
                if(trgSection.getBoundingClientRect().top<=0)
                {
                    clearInterval(iId);
                    console.log(trgSection.getBoundingClientRect().top);
                    return ;
                }
                window.scrollBy(0,30);
          },5);
          
    });

}

