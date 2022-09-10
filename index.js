// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button




let inputBtn = document.getElementById("input-btn")
//"click" is a event write it in ""
inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener!")
})
