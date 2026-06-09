$(document).ready(function() {

    // ===== 产品详情页：咨询按钮弹窗 =====
    $('#consultBtn').on('click', function() {
        alert('感谢您的关注！我们的客服会尽快与您联系。');
    });

    // ===== 关于我们页：查看核心团队弹窗 =====
    $('#teamBtn').on('click', function() {
        alert('核心团队：n金四乐（前盛山画室学生）\n 韩雨桐（小红书:"五毒老獅"中之人）\n覃丽叶（前盛山画室学生）');
    });

    // ===== 咨询表单提交 + 本地存储 =====
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        var feedback = $('#formFeedback');

        if (!name || !email || !message) {
            feedback.html('<div class="alert alert-warning">所有字段都必须填写！</div>');
            return;        }
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            feedback.html('<div class="alert alert-warning">请输入有效的邮箱地址！</div>');
            return;
        }

        var newMessage = {
            id: Date.now(),
            name: name,
            email: email,
            message: message,
            time: new Date().toLocaleString()
        };

        var messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        messages.unshift(newMessage);
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        feedback.html('<div class="alert alert-success">提交成功！我们会尽快回复您。</div>');
        $('#contactForm')[0].reset();

        setTimeout(function() {
            feedback.empty();
        }, 3000);
    });
});
