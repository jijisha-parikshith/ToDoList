var disDiv=new Array();
var changeCntnt="";
var Jout;
    var check=new Array();
   
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
      if(this.readyState == 4 && this.status==200){
         Jout=JSON.parse(this.responseText);
    
        for(var i=0;i<13;i++){
        check.push(Jout[i].title);
          
        disDiv.push( `<li class="list-group-item list-group-item-primary" >${Jout[i].title}   &nbsp; &nbsp;     &nbsp;<button type="button" class="btn btn-outline-info" style="font-weight:bold;" onclick="addToComplete(${i});">Mark as Completed</button> </li>`);
    
            changeCntnt += disDiv[i];
            document.getElementById("containNav").innerHTML=changeCntnt;
       
           
    }
      }
    };
    
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();





var counter=new Array(); 

function addToComplete(i){
counter.push(i);

var arrLength=counter.length;
//disDiv.slice(i,1,`<li class="list-group-item list-group-item-warning" >hi jj${check[i]}<button type="button" class="btn btn-outline-info" style="font-weight:bold;" >delete</button> </li>`);
disDiv[i]=`<li class="list-group-item list-group-item-warning" >${check[i]}  &nbsp; &nbsp; &nbsp;  <button type="button" class="btn btn-outline-info" style="font-weight:bold;" onclick="del(${i})" >Delete</button> </li>`;
var newCntnt="";
for(var j=0;j<13;j++){
  newCntnt += disDiv[j];
}


document.getElementById("containNav").innerHTML=newCntnt;
if(arrLength==5){alert("Congrats. 5 Tasks have been Successfully Completed");
// arr.splice(0, arr.length)
counter.splice(0,counter.length);//to empty the existing array
}
}


function del(i){
  var newCntnt="";

  disDiv[i]="";
  for(var j=0;j<13;j++){
    newCntnt += disDiv[j];
  }
  document.getElementById("containNav").innerHTML=newCntnt;
}



  

