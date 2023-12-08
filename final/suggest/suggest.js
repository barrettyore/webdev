const titleElement = document.getElementById('title');
titleElement.addEventListener('click', function() {
    window.location.href = '../home.html'})

function GO() {
    event.preventDefault()
    alert("THANK YOU FOR YOUR SUBMISSION:)")

    setTimeout(function() {
        location.reload(true)
    }, 10000);
    
}