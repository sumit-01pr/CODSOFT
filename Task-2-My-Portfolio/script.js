document.getElementById('downloadButton').addEventListener('click', function() {
    var cvFile = 'Sumit-updated-Resume.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = cvFile;

    downloadLink.download = 'Sumit-updated-Resume';

    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
});
