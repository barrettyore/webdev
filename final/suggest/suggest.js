const titleElement = document.getElementById('title');
titleElement.addEventListener('click', function() {
    window.location.href = '../home.html'})

function GO() {
    alert("THANK YOU FOR YOUR SUBMISSION:)")

    setTimeout(function() {
        location.reload(true)
    }, 1000);
    
}
