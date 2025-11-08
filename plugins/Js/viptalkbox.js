// 初始化 EmailJS
emailjs.init("K3ZuJ4teuOSxQI2s2");

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_9ork82m", "template_q6g4y6d", this)
    .then(function () {
      Swal.fire({
        icon: 'success',
        title: '已成功送出',
        text: '我們已收到您的意見，謝謝！',
        confirmButtonText: '關閉'
      });
    }, function (error) {
      Swal.fire({
        icon: 'error',
        title: '傳送失敗',
        text: '請稍後再試，或檢查網路連線。',
        confirmButtonText: '關閉'
      });
    });
});

document.getElementById("contactForm").reset();

