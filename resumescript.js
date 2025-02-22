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
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    });
}
