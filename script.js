// 可以在這裡加入表單驗證或其他互動功能
document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // 停止表單的默認提交行為
    alert('表單已提交！');
};
