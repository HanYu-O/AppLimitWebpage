// 点击邮箱链接时:照常尝试打开邮件应用,同时把邮箱复制到剪贴板并给出提示。
// 解决设备没有配置默认邮件应用时点击 mailto 链接"没反应"的问题。
(function () {
    var link = document.querySelector('.copy-email');
    var tip = document.querySelector('.copy-tip');
    if (!link || !tip) return;

    link.addEventListener('click', function () {
        var email = link.getAttribute('data-email');
        var message = link.getAttribute('data-copied') || 'Copied';

        function show() {
            tip.textContent = message;
            setTimeout(function () { tip.textContent = ''; }, 2500);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(show, function () {});
        }
    });
})();
