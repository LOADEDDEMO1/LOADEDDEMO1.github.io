window.onload = function() {
    document.getElementById("previewButton").addEventListener("click", previewHonorIcon);
};

function previewHonorIcon() {
    var employeeName = document.getElementById("employeeName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var selectedOption = document.getElementById("reason").value; // Corrected dropdown id
    var reason = document.getElementById("reason").options[document.getElementById("reason").selectedIndex].text; // Get text of selected option
    
    // Create the result text with newline characters
    var resultText = "Honor Icon goes to: \nEmployee Name: " + employeeName + "\nEmail Address: " + emailAddress + "\nReason for Honor Icon: " + selectedOption;
    
    // Set the result text in the textarea
    document.getElementById("result").value = resultText;
}

function clearFields() {
    document.getElementById("employeeName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("reason").value = ""; // Corrected dropdown id
    document.getElementById("result").value = "";
} 

function saveRecognition() {
    alert("Recognition saved");
}

function sendRecognition() {
    alert("Recognition sent");
}

function cancelRecognition() {
    alert("Recognition cancelled");
}
