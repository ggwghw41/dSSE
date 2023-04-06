const form = document.querySelector('form');
const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', function(e) {
  e.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // Kiểm tra tên đăng nhập và mật khẩu có hợp lệ hay không
  if (username === 'admin' && password === 'admin') {
    // Nếu hợp lệ, chuyển hướng đến trang khác
    window.location.href = 'http://127.0.0.1:5500/wed.html#';
  } else {
    // Nếu không hợp lệ, thông báo lỗi
    alert('Tên đăng nhập hoặc mật khẩu không đúng');
  }
});
