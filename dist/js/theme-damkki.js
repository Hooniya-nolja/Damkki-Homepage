
function changeArrow() {
    let navbarServiceRow = document.getElementById('navbarServiceRow');
    let arrow = document.getElementById('arrow');
    if (navbarServiceRow.className.indexOf('show') < 0) {   // 판단 시점은 클릭하기 전 단계.
      arrow.className = "ai-chevron-up d-lg-none ms-1 mb-1";
    } else {
      arrow.className = "ai-chevron-down d-lg-none ms-1 mb-1";
    }
}