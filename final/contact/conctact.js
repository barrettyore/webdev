const titleElement = document.getElementById('title');
titleElement.addEventListener('click', function() {
    window.location.href = '../home.html';
});

// i left the commits in here because i copied this from the web and wasnt sure how it exactly worked for the presintation
function copyToClipboard(text) {
    // Create a temporary input element
    var tempInput = document.createElement('input');
    tempInput.value = text;

    // Append the input element to the body
    document.body.appendChild(tempInput);

    // Select the input's text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Add a shaking animation to the button
    var copyButton = document.querySelector('#copyButton');
    copyButton.classList.add('shake');

    // Remove the shaking class after a short delay
    setTimeout(() => {
        copyButton.classList.remove('shake');
    }, 500);
}

