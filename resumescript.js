function printVersion()
{
    const originalTitle = document.title;
    document.title = "Jeffrey_Guandique_Resume.pdf";

    window.print();
    document.title = originalTitle;
}

function downloadPDF() {
    const element = document.querySelector(".resumeCanvas");

    html2pdf(element, {
        margin: 0,
        filename: "Jeffrey_Guandique_Resume.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        enableLinks: true
    });
}

function copyEmail(email) {
    navigator.clipboard.writeText(email)
        .then(() => {
            // Create a temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied to clipboard!';
            tooltip.style.position = 'fixed';
            tooltip.style.left = '50%';
            tooltip.style.top = '20px';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.backgroundColor = '#333';
            tooltip.style.color = 'white';
            tooltip.style.padding = '10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.zIndex = '1000';
            
            document.body.appendChild(tooltip);
            
            // Remove tooltip after 2 seconds
            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 2000);
        })
        .catch(err => {
            console.error('Could not copy email: ', err);
            alert('Failed to copy email to clipboard');
        });
}
