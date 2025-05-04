$("#messageState").on("change", (x) => {
	const music = document.getElementById("bgMusic");

	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
		console.log("Abrindo");

		// PHÁT NHẠC
		if (music) {
			music.play().catch(err => console.error("Không phát được nhạc:", err));
		}



	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");

		// DỪNG NHẠC
		if (music) {
			music.pause();
			music.currentTime = 0;
		}

		// DỪNG STICKER
		clearInterval(stickerInterval);
		stickerInterval = null;
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});


const checkbox = document.getElementById('messageState');
const container = document.getElementById('sticker-container');

let stickerInterval = null;

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        // Bắt đầu tạo sticker
        stickerInterval = setInterval(() => {
            createSticker();
        }, 150); // Sticker rơi mỗi 300ms
    } else {
        // Dừng và xóa tất cả sticker còn lại
        clearInterval(stickerInterval);
        stickerInterval = null;
    }
});
function getRandomSticker() {
    const emojis = ['😁', '💖', '✨', '😍', '💌', '🎉', '😻', '💐', '🎉','😱','🥺','⭐','💥','🔥','💘','👫','👬','👭','🧑‍🤝‍🧑','🌺','☀️','✨','🎀','🎂','🎈' ];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function createSticker() {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    sticker.textContent = getRandomSticker(); // Emoji ở đây
    sticker.style.left = Math.random() * 100 + 'vw';
    sticker.style.top = '-50px';
    sticker.style.fontSize = '20px'; // Kích thước emoji
    sticker.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(sticker);

  
}
