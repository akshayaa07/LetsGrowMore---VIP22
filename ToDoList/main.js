function plusFunction(){
    var valueOfInputText = document.getElementById("taskbar").value; 
    var lengthOfInputText = valueOfInputText.length;
    if(lengthOfInputText == 0)
        document.getElementById("warningMessage").innerHTML = "Enter a value to the task box!!";
    else{
        document.getElementById("warningMessage").innerHTML = "";
        var divEle = document.createElement("div");
        divEle.className = "divClass";
        document.getElementById("itemBox").appendChild(divEle);
        var paraEle = document.createElement("p");
        divEle.appendChild(paraEle);
        paraEle.innerHTML = valueOfInputText;
        paraEle.className = "paraClass";
        var countOfpara = document.getElementsByClassName("paraClass");
        for(var i=0; i<countOfpara.length; i++){
            countOfpara[i].onclick = function(){
                var firstLevel = this.parentElement;
                var zerothChild = firstLevel.children[0];
                zerothChild.style.textDecoration = "line-through";
            }
        }
        var creButton = document.createElement("button");
        divEle.appendChild(creButton); 
        creButton.innerHTML= "X";
        creButton.classList = "delButton";
        var closeBtn = document.getElementsByClassName("delButton");
        for(var i=0;i<closeBtn.length;i++){
            closeBtn[i].onclick = function(){
                var parentLevel = this.parentElement;
                parentLevel.style.display = "none";
            }
        }
        
    }
}