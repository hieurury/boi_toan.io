const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const   app             = $('.app'),
        main            = $('.main'),
        inputName       = $('#input-name'),
        inputContent    = $('#input-content'),
        appBtn          = $('.app-btn'),
        errorMessage    = $('.error--message'),
        infoMessage     = $('.info--message'),
        successMessage  = $('.success--message'),
        listInput       = $$('.input')
        console.log(errorMessage);
// ==============================================
const messages = [
    `Quá tuyệt vời! <br><span class="big-size">2đ</span><br>trong tay`,
    `Chưa đủ đô! <br><span class="big-size">6đ</span><br>và hạ 1 bậc hạnh kiểm`,
    `Chuyên tâm học bài! <br><span class="big-size">1đ</span><br>tới quài`,
    `Chiến thần! <br><span class="big-size">10đ</span><br>chỉ có thể là ảo ảnh`,
    `Đối thủ Nobita! <br><span class="big-size">0đ</span><br>chắc là chấm về việc học dở thoi`,
    `Không tranh với đời! <br><span class="big-size">5đ</span><br>dễ quá trời`,
    `Không phụ cha, mẹ! <br><span class="big-size">9đ</span><br>phụ bạn cùng bàn`,
    `Không phụ bạn bè! <br><span class="big-size">2đ</span><br>phụ hồ`,
    `Nước tới chân ư? <br><span class="big-size">7đ</span><br>tôi chỉ thấy nước rút thôi`,
    `Nữa bước xuống mương! <br><span class="big-size">4đ</span><br>ông bà có vẻ không giỏi môn này`,
    `Con số Tesla? <br><span class="big-size">3đ</span><br>dù là thiên tài cũng sẽ rớt môn`,


    
]
// ==============================================
listInput.forEach(input => {
    input.onfocus = function() {
        errorMessage.classList.add('d-none');
    }
});
getMessage = function() {
    let index       = Math.floor(Math.random() * messages.length);
    let message     = messages[index];
    return message;
}
appBtn.addEventListener('click', () => {
    let currentName         = inputName.value;
    let currentContent      = inputContent.value;

    if(currentName != '' && currentContent != '') {
        app.classList.add('d-none');
        main.classList.remove('d-none');
        infoMessage.textContent         = `${currentName} đã gáy rằng "${currentContent}"`
        let message                     = getMessage();
        successMessage.innerHTML        = message;
    } else {
        errorMessage.classList.remove('d-none');
        console.log(false);
    }
})
