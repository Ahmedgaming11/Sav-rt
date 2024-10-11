document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contentDiv = document.getElementById('fileContent');
            contentDiv.innerText = e.target.result; // عرض المحتوى
            contentDiv.style.display = 'block';
            document.getElementById('editContent').value = e.target.result;
            document.getElementById('downloadButton').style.display = 'block';
        }
        reader.readAsText(file);
    } else {
        alert('يرجى اختيار ملف.');
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const content = document.getElementById('editContent').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modified_file.sav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});