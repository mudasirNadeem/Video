function next(stepToShowId,stepsToHideIds){
var stepToShowElement= document.getElementById(stepToShowId);
stepToShowElement.classList.remove("d-none");
for(var i = 0; i < stepsToHideIds.length; i++){
    var stepToHide = document.getElementById(stepsToHideIds[i]);
    stepToHide.classList.add("d-none");

}

}

// var video = document.querySelector('my-video');

//  var videoUrl=window.URL.createObjectURL("blob:https://bbhome-dev.azurewebsites.net/baf321eb-bfee-4f0f-9254-ba2a8b4cef39");// blob.data gives actual data

//  video.src = videoUrl;