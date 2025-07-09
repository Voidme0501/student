window.printExamResult = function () {
    var printContents = document.querySelector('.print-result-modal').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = '<div class="print-result-modal">' + printContents + '</div>';
    window.print();
    document.body.innerHTML = originalContents;
    // location.reload(); // Removed to prevent page reload after printing
}; 