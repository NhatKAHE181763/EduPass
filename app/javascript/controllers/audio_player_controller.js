import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    static targets = ["audio", "playIcon", "pauseIcon", "volumeIcon", "currentTime", "duration", "progressBar", "volumeSlider"]

    connect() {
        this.isPlaying = false;
        this.previousVolume = 1;
        const savedVolume = localStorage.getItem("edupass_audio_volume")
        if (savedVolume !== null) {
            this.audioTarget.volume = parseFloat(savedVolume)
            this.volumeSliderTarget.value = savedVolume
            this.updateVolumeIcon(parseFloat(savedVolume))
        }

        if (this.hasAudioTarget) {
            const updateMetadata = () => {
                if (!isNaN(this.audioTarget.duration) && this.audioTarget.duration !== Infinity) {
                    this.durationTarget.textContent = this.formatTime(this.audioTarget.duration);
                    this.progressBarTarget.max = this.audioTarget.duration;
                }
            }
            if (this.audioTarget.readyState >= 1) {
                updateMetadata();
            }
            this.audioTarget.addEventListener("loadedmetadata", updateMetadata);
            this.audioTarget.addEventListener("timeupdate", () => {
                this.currentTimeTarget.textContent = this.formatTime(this.audioTarget.currentTime);
                this.progressBarTarget.value = this.audioTarget.currentTime;
                this.updateProgressVisuals();
            });
            this.audioTarget.addEventListener("ended", () => {
                this.pause();
            })
        }
    }

    disconnect() {
        this.audioTarget.pause();
    }

    togglePlay() {
        if (this.audioTarget.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    play() {
        this.audioTarget.play();
        this.playIconTarget.classList.add("d-none");
        this.pauseIconTarget.classList.remove("d-none");
    }

    pause() {
        this.audioTarget.pause();
        this.playIconTarget.classList.remove("d-none");
        this.pauseIconTarget.classList.add("d-none");
    }

    seek(event) {
        const time = parseFloat(event.target.value)
        this.audioTarget.currentTime = time;
        this.currentTimeTarget.textContent = this.formatTime(time);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return "00:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    updateProgressVisuals() {
        const audio = this.audioTarget
        if (!audio.duration) return
        const playedPercent = (audio.currentTime / audio.duration) * 100
        let bufferedPercent = 0
        if (audio.buffered.length > 0) {
            const bufferedEnd = audio.buffered.end(audio.buffered.length - 1)
            bufferedPercent = (bufferedEnd / audio.duration) * 100
        }
        this.progressBarTarget.style.background = `linear-gradient(to right, 
      #0d6efd ${playedPercent}%, 
      #cfe2ff ${playedPercent}%, #cfe2ff ${bufferedPercent}%, 
      #e9ecef ${bufferedPercent}%)`
    }

    changeVolume(event) {
        const vol = parseFloat(event.target.value)
        this.audioTarget.volume = vol
        this.updateVolumeIcon(vol)
        // Lưu lựa chọn vào localStorage
        localStorage.setItem("edupass_audio_volume", vol)
    }

    toggleMute() {
        if (this.audioTarget.volume > 0) {
            // Đang có tiếng -> Tắt tiếng (Mute)
            this.previousVolume = this.audioTarget.volume
            this.audioTarget.volume = 0
            this.volumeSliderTarget.value = 0
        } else {
            // Đang tắt tiếng -> Bật lại
            const restoreVol = this.previousVolume > 0 ? this.previousVolume : 1
            this.audioTarget.volume = restoreVol
            this.volumeSliderTarget.value = restoreVol
        }

        this.updateVolumeIcon(this.audioTarget.volume)
        localStorage.setItem("edupass_audio_volume", this.audioTarget.volume)
    }

    updateVolumeIcon(vol) {
        const icon = this.volumeIconTarget
        icon.className = ""
        if (vol === 0) {
            icon.className = "bi bi-volume-mute-fill fs-5 text-danger"
        } else if (vol < 0.5) {
            icon.className = "bi bi-volume-down-fill fs-5 text-secondary"
        } else {
            icon.className = "bi bi-volume-up-fill fs-5 text-secondary"
        }
    }

    skipForward() {
        let newTime = this.audioTarget.currentTime + 5;
        if (newTime > this.audioTarget.duration) newTime = this.audioTarget.duration;
        this.audioTarget.currentTime = newTime;
    }

    skipBackward() {
        let newTime = this.audioTarget.currentTime - 5;
        if (newTime < 0) newTime = 0;
        this.audioTarget.currentTime = newTime;
    }

    setPlaybackRate(event) {
        const rate = parseFloat(event.target.value);
        this.audioTarget.playbackRate = rate;
    }
}   