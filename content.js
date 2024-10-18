
var element = document.getElementsByClassName('site-name')[0];
if (element) {
    element.style.display = 'none';
}
var e2 = document.getElementById('ad')
if(e2){
    e2.style.display = 'none'
}
var element2 = document.getElementsByClassName('sidebar')[0];
if (element2) {
    element2.style.width = '14rem'
}

setInterval(() => {
   
// 确保DOM已经加载完成

var element3 = document.getElementsByClassName('page')[0];
if (element3) {
    element3.style.paddingLeft = '14rem'
}
var ele4 = document.getElementsByClassName('content__default')[0];
if(ele4){
    ele4.style.maxWidth = '22222px'
}

// 选择content__default类下的第一个h1标签
const h1 = document.querySelector('.content__default h1');

// 检查是否找到了元素
if (h1) {
    // 获取元素的文本内容
    let text = h1.textContent;

    // 检查文本中是否包含“面试官”并删除它
    text = text.replace(/面试官/g, '');
    text = text.replace(/：/g, '');
    text = text.replace(/:/g, '');
    text = text.replace(/你/g, '');
    text = text.replace(/#/g, '');

    // 设置修改后的文本回元素
    h1.textContent = text;
    document.title = text.trim();
}

}, 1000);

