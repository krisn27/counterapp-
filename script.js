const endDate=new Date("27 dec,2024 22:28:00").getTime();
const startDate=new Date().getTime();

let x=setInterval(function updatetimer(){
    const now=new Date().getTime();

    const distancecovered=now-startDate;
    const distancepending=endDate-now;

    //calculate days,min,hrs,secs;
    //1 day=24*60*60*1000 ms
    const onedayinmillisec=(24*60*60*1000);
    const onehourinmillisec=(60*60*1000);
    const oneminuteinmillisec=(60*1000);
    const onesecondinmillisec=(1000);



    const days = Math.floor( distancepending/(onedayinmillisec));

    const hrs=Math.floor((distancepending%(onedayinmillisec)/
    (onehourinmillisec)));
    
    const min=Math.floor((distancepending%(onehourinmillisec)/
    (oneminuteinmillisec)));

    const sec=Math.floor((distancepending%(oneminuteinmillisec)/
    (onesecondinmillisec)));

    //populate in ui

    document.getElementById("days").innerHTML=days;
    document.getElementById("hrs").innerHTML=hrs;
    document.getElementById("minute").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;


    //calculate width percentage for progressbar

    const totaldistance=endDate-startDate;

    const percentagedistance=(distancecovered/totaldistance)*100;

    //set width for progressbar

    document.getElementById("progress-bar").style.width=percentagedistance+"%";

    if(distancepending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="expired";
        
        document.getElementById("progress-bar").style.width="100%";
    }

    },1000);
