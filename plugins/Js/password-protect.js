function checkPassword() {
    Swal.fire({
        title: '請輸入密碼',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        preConfirm: (password) => {
            if (password === "890112") {
                Swal.fire('密碼正確', '進入功能！', 'success');
                window.location.href = window.location.origin + "/judy/";
            } else {
                Swal.fire('密碼錯誤', '請重試', 'error');
            }
        }
    });
}