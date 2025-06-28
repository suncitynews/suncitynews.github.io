// 随机生成的变量名
const dateForm = document.querySelector('.dateForm');
const dateInput = document.querySelector('.dateInput');
const bgGrid = document.querySelector('.bgGrid');

// 模拟日期到文件的映射（需根据实际情况填充）
const dateMap = {
    '2023-09-15': 'abc123.html',
    '2023-09-16': 'def456.html'
};

// 处理日期输入
dateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const date = dateInput.value;
    
    if (dateMap[date]) {
        window.location.href = `news/${dateMap[date]}`;
    } else {
        alert('未找到相关日期的新闻');
    }
});

// 网格背景交互
document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth) * 100 - 50;
    const y = (e.clientY / window.innerHeight) * 100 - 50;
    bgGrid.style.transform = `translate(${x/5}px, ${y/5}px)`;
});

// 禁用滚动
window.addEventListener('wheel', function(e) {
    e.preventDefault();
}, { passive: false });

// 阻止触摸设备的滚动
window.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
