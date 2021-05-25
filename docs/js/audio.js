$(document).ready(function () {
    let audio = $('#audioTrack')[0]
    $playBtn = $('#audio-play')
    $pauseBtn = $('#audio-pause')
    $audioCntr = $('[data-type="audio-control"]')
    audio.play()

    initAudioPlayer()

    // $pauseBtn.parent().show()

    function initAudioPlayer() {
        $playBtn.parent().show()
        audio.loop = true
        $audioCntr.click(function () {
            if (audio.paused) {
                audio.play()
                $playBtn.parent().hide()
                $pauseBtn.parent().show()
            } else {
                audio.pause()
                $playBtn.parent().show()
                $pauseBtn.parent().hide()

            }
        })
    }

});
