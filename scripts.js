var currentDialog = 1;

function startGame() {
    
    document.getElementById('scene1').style.display = 'none';
    document.getElementById('scene2').style.display = 'flex';
    
    document.body.classList.add('fade-out');
    setTimeout(function() {
        document.body.classList.remove('fade-out');
    }, 1000);
    
}

function goToScene(sceneId) {
    var scenes = document.getElementsByClassName('scene');
    for (var i = 0; i < scenes.length; i++) {
        scenes[i].style.display = 'none';
    }
    document.getElementById(sceneId).style.display = 'flex';
    
    if (sceneId === 'scene8' || sceneId === 'scene9' || sceneId === 'scene10'|| sceneId === 'scene11'|| sceneId === 'scene12'||
    sceneId === 'scene28' || sceneId === 'scene31'|| sceneId === 'scene60'|| sceneId === 'scene61'|| sceneId === 'scene62'|| 
    sceneId === 'scene63'|| sceneId === 'scene63_1_1'|| sceneId === 'scene65'|| sceneId === 'scene66'
    ) {
        targetScene.classList.add('scene-slide-in');
        setTimeout(function() {
            targetScene.classList.remove('scene-slide-in');
        }, 1000); 1
    }

    if (sceneId === 'scene7_1') {
        setTimeout(function() {
            goToScene('scene8');
        }, 3000); // 等待3秒切到8
    }
    if (sceneId === 'scene8') {
        document.getElementById(sceneId).classList.add('fade-in');
        setTimeout(function() {
            document.getElementById(sceneId).classList.remove('fade-in');
        }, 500);
    }

    if (sceneId === 'scene7_2') {
        setTimeout(function() {
            goToScene('scene14');
        }, 3000); // 等待3秒切到14
    }
    if (sceneId === 'scene28') {
        document.getElementById(sceneId).classList.add('fade-in');
        setTimeout(function() {
            document.getElementById(sceneId).classList.remove('fade-in');
        }, 500);
    }

    
    if (sceneId === 'scene6_1' || sceneId === 'scene5_2' || sceneId === 'scene13' ||sceneId === 'scene32'||
    sceneId === 'scene35_2'||sceneId === 'scene34_2' || sceneId === 'scene36'|| sceneId === 'scene37'||
     sceneId === 'scene38'|| sceneId === 'scene40'|| sceneId === 'scene42'|| sceneId === 'scene52_4') {
        document.body.classList.add('fade-out');
        setTimeout(function() {
            document.body.classList.remove('fade-out');
        }, 2000);
    }

    
    if (sceneId === 'scene29') {
        setTimeout(() => {
            document.getElementById('chat-msg-1-29').style.display = 'block'; // 1秒後顯示第一個訊息
        }, 1000); 
    
        setTimeout(() => {
            document.getElementById('chat-msg-2-29').style.display = 'block'; // 2秒後顯示第二個訊息
        }, 2000); 
    
        setTimeout(() => {
            document.getElementById('chat-re-29').style.display = 'block'; // 3秒後顯示第三個訊息
        }, 3000); 
    }
    if (sceneId === 'scene30') {
        setTimeout(() => {
            document.getElementById('chat-msg-1-30').style.display = 'block'; // 1秒後顯示第一個訊息
        }, 1000); 
    
        setTimeout(() => {
            document.getElementById('chat-msg-2-30').style.display = 'block'; // 2秒後顯示第二個訊息
        }, 2000); 
    
        setTimeout(() => {
            document.getElementById('chat-re-30').style.display = 'block'; // 3秒後顯示第三個訊息
        }, 3000); 
    }
    
    if (sceneId === 'scene36_4') {
        setTimeout(() => {
            document.getElementById('chat-re-36').style.display = 'block'; // 3秒後顯示第三個訊息
        }, 1000); 
        setTimeout(() => {
            document.getElementById('chat-re-36-2').style.display = 'block'; // 3秒後顯示第三個訊息
        }, 2000); 
    }
    
    if (sceneId === 'scene37_4') {
        setTimeout(() => {
            document.getElementById('chat-re-37').style.display = 'block'; // 3秒後顯示第三個訊息
        }, 1000); 
        setTimeout(() => {
            document.getElementById('chat-re-37-2').style.display = 'block'; // 3秒後顯示第三個訊息
        }, 2000); 
    }

    setTimeout(function() {
        document.body.classList.remove('fade-out');
        setTimeout(function() {
            document.querySelector('.dialog-text').style.display = 'inline-block';
        }, 1000); // 延遲1秒後顯示對話框
    }, 1000); // 延遲1秒後移除fade-out效果


}
window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Playback error:', error);
        // Optionally, handle the error, e.g., show a play button to the user
    });
});


document.addEventListener('mousedown', function(event) {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤'; 

    // 設置愛心位置
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';

    // 將愛心添加到文檔中
    document.body.appendChild(heart);

    // 3秒後移除愛心
    setTimeout(function() {
        heart.remove();
    }, 3000);
});




    