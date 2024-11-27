document.getElementById('addBookmark').addEventListener('click', () => {
    const title = prompt("输入网址标题：");
    const url = prompt("输入网址链接：");
    if (title && url) {
        const bookmarkGrid = document.querySelector('.bookmark-grid');
        const card = document.createElement('div');
        card.innerHTML = `<a href="${url}" target="_blank">${title}</a>`;
        bookmarkGrid.appendChild(card);
    }
});

document.getElementById('uploadImage').addEventListener('click', () => {
    alert("功能开发中...");
});
