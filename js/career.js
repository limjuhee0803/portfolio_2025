//뒤로가기 버튼
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("back");
  
    if (backButton) {
      backButton.addEventListener("click", function () {
        window.history.back(); // 이전 페이지로 이동
      });
    }
  });