
function addBookmark(type) {
    const listId = type + '-list';
    const list = document.getElementById(listId);
    const newBookmark = prompt(`请输入新的${type === 'url' ? '网址' : type === 'live' ? '直播地址' : type === 'tvbox' ? 'TVBox 配置' : '代理订阅'}`);
    if (newBookmark) {
        const li = document.createElement('li');
        li.textContent = newBookmark;
        list.appendChild(li);
    }
}

// 添加网络图片
function addImageFromURL() {
    const imageUrl = prompt('请输入图片 URL');
    if (imageUrl) {
        const gallery = document.querySelector('.gallery-grid');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = '用户上传的图片';
        img.style.width = '100%';
        img.style.borderRadius = '10px';
        gallery.appendChild(img);
    } else {
        alert('请输入有效的图片 URL');
    }
}

// 上传本地图片
function addImageFromFile(event) {
    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const gallery = document.querySelector('.gallery-grid');
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = '用户上传的图片';
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        alert('请选择图片文件');
    }
}

function uploadFiles() {
    const files = document.getElementById('file-upload').files;
    if (files.length > 0) {
        alert(`已上传 ${files.length} 个文件`);
    } else {
        alert('请先选择文件！');
    }
}
