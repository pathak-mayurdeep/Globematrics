function show_home_panel(){
    var main_container = document.getElementById("main_container");
    var load_patient_form = document.getElementById("load_patient_form");
    var new_patient_form = document.getElementById("new_patient_form");
    var main_streamlit_iframe = document.getElementById("main_streamlit_iframe");

    main_streamlit_iframe.style.display="none";
    main_container.style.display="block";
    load_patient_form.style.display="none";
    new_patient_form.style.display="none";

}


function NewPatientForm(){

    var main_container = document.getElementById("main_container");
    var load_patient_form = document.getElementById("load_patient_form");
    var new_patient_form = document.getElementById("new_patient_form");
    var main_streamlit_iframe = document.getElementById("main_streamlit_iframe");

    main_streamlit_iframe.style.display="none";
    main_container.style.display="block";
    load_patient_form.style.display="none";
    new_patient_form.style.display="block";
}



function LoadPatientForm(){
    var main_container = document.getElementById("main_container");
    var new_patient_form = document.getElementById("new_patient_form");
    var load_patient_form = document.getElementById("load_patient_form");
    var main_streamlit_iframe = document.getElementById("main_streamlit_iframe");

    main_streamlit_iframe.style.display="none";
    main_container.style.display="block";
    new_patient_form.style.display="none";
    load_patient_form.style.display="block";

}



function bodyFullscreen() {
    var body = document.body;
    if (document.fullscreenElement) {
        // If the document is already in fullscreen mode, exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    } else {
        // If the document is not in fullscreen mode, enter fullscreen
        if (body.requestFullscreen) {
            body.requestFullscreen();
        }
    }
}



function openIframeFullscreen(src) {
    // Create an iframe element
    var iframe = document.createElement("iframe");
    // Set the source URL for the iframe
    iframe.src = src;
    iframe.id = "canvas_iframe"
    // Set the height and width of the iframe
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    // Get the div where the iframe will be displayed
    var container = document.getElementById("target-iframe-container");
    // Remove any existing content from the div
    container.innerHTML = "";
    // Append the iframe to the div
    container.appendChild(iframe);

    // Check if the browser supports the requestFullscreen method
    if (container.requestFullscreen) {
        container.requestFullscreen();
        container.style.display = "block";
      } 

    setTimeout(function() {
        sendDataToIframe("This is a message from mail.html :)")
        console.log("sent")
    }, 2000);

}

function openCanvasIframe(src) {
    // Create an iframe element
    var iframe = document.createElement("iframe");
    // Set the source URL for the iframe
    iframe.src = src;
    iframe.id = "canvas_iframe"
    // Set the height and width of the iframe
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    // Get the div where the iframe will be displayed
    var container = document.getElementById("target-iframe-container");
    // Remove any existing content from the div
    container.innerHTML = "";
    // Append the iframe to the div
    container.appendChild(iframe);


}



function openIframeUploadVideo(){
    var main_container = document.getElementById("main_container");
    var main_streamlit_iframe = document.getElementById("main_streamlit_iframe");

    main_container.style.display = "none";
    main_streamlit_iframe.style.display = "block";

    var iframe = document.createElement("iframe");
    iframe.src = "http://172.16.5.233:57470";
    iframe.id = "streamlit_upload_vid_iframe"

    iframe.style.height = "1200px";
    iframe.style.width = "100%";

    main_streamlit_iframe.innerHTML = "";
    main_streamlit_iframe.appendChild(iframe);
}


function openIframeSyncWithTargets(){
    var main_container = document.getElementById("main_container");
    var main_streamlit_iframe = document.getElementById("main_streamlit_iframe");

    main_container.style.display = "none";
    main_streamlit_iframe.style.display = "block";

    var iframe = document.createElement("iframe");
    iframe.src = "http://172.16.5.233:57471";
    iframe.id = "streamlit_sync_with_targets_iframe"

    iframe.style.height = "1200px";
    iframe.style.width = "100%";

    main_streamlit_iframe.innerHTML = "";
    main_streamlit_iframe.appendChild(iframe);
}


// Add an event listener for the fullscreenchange event
document.addEventListener('fullscreenchange', function(event) {
if (!document.fullscreenElement) {
    // User has exited fullscreen mode, so make iframe-container display none
    var container = document.getElementById("target-iframe-container");
    container.style.display = "none";
}
});



function sendDataToIframe(data) {
    var iframe = document.getElementById("canvas_iframe");
    iframe.contentWindow.postMessage(data, "*");
}




