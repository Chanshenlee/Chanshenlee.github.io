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
        preConfirm: (inputPassword) => {
            const passwordObfuscated = (() => {
                const parts = ["bG91", "aXM2", "NjY="]; 
                return atob(parts.join(""));
            })();

            if (inputPassword === passwordObfuscated) {
                Swal.fire('密碼正確', '進入功能！', 'success').then(() => {
                    window.location.href = window.location.origin + "/judy/";
                });
            } else {
                Swal.fire('密碼錯誤', '請重試', 'error');
            }
        }
    });
}