var tab=[];
    for(i=0;i<300;i++){
        tab.push({id:i, x:Math.floor((Math.random() * 800)),y:Math.floor((Math.random() * 800)),z:Math.floor((Math.random() * 30))});
    }

function dwa(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, 800, 800);
    for(i=0;i<tab.length;i++){
        ctx.beginPath();
        ctx.arc(tab[i].x,tab[i].y,tab[i].z,0,2*Math.PI);
        ctx.stroke();
    }
    var p=Math.floor((Math.random() * 3)+2);
    for(i=0;i<300;i++){
        if(tab[i].y<-30)tab[i].y=830;
        if(tab[i].x<-30)tab[i].x=830;
        if(tab[i].x>830)tab[i].x=-30;
        tab[i].y-=Math.floor((Math.random() * 3));

        //if(tab[i].z>1){tab[i].z+=Math.floor((Math.random() * 3)-1);}

        tab[i].x+=Math.floor((Math.random() * p)-1);
    }
    setTimeout(dwa, 10);
}