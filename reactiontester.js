function getrandomClour(){
            var letters='0123456789ABCDEF';
            var color='#';
            for(var i=0;i<6;i++){
                color+=letters[Math.floor(Math.random()*16)];
            }
            return color;
            console.log(color)
        }
var clicktime= new Date().getTime();
        function Move(){        
var left;
var top;
var heightwidth;
left=Math.random() *150;//random number between 1 to 150
console.log(left)
top=Math.random() *150;
heightwidth=((Math.random() *300) +100);// random number between 100 to 300  where +100 means starting from min heightwidth 100
            document.getElementById("shape").style.left=left+ "px";
            document.getElementById("shape").style.top=top+ "px";
            document.getElementById("shape").style.height=heightwidth+ "px";
            document.getElementById("shape").style.width=heightwidth+ "px";
            document.getElementById("shape").style.display="block";
            document.getElementById("shape").style.backgroundColor=getrandomClour();

            clicktime= new Date().getTime();
        }

        Move();
        document.getElementById("shape").onclick=function(){
            document.getElementById("shape").style.display="none";
            var clickendtime=new Date().getTime();
            console.log(clickendtime);
            var timetaken=(clickendtime-clicktime)/1000;
            console.log(timetaken)
            alert(timetaken);
            Move();
        }