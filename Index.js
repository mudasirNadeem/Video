function next(stepToShowId,stepsToHideIds){
var stepToShowElement= document.getElementById(stepToShowId);
stepToShowElement.classList.remove("d-none");
for(var i = 0; i < stepsToHideIds.length; i++){
    var stepToHide = document.getElementById(stepsToHideIds[i]);
    stepToHide.classList.add("d-none");

}
}