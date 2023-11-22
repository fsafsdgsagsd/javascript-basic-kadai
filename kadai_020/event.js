const text =document.getElementById('text');
const botann =document.getElementById('btn');

botann.addEventListener('click', () => {
    if (text.textContent == 'ボタンをクリックしてください') {
        text.textContent ='ボタンをクリックしました';
    }else {
        text.textContent = 'ボタンをクリックしてください';
    }
})