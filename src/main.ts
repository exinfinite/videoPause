/**
 * 暫停未在view中的影片
 */
import view_obsrv from "./viewObserver";
export class vidPause {
    private obsrv: view_obsrv;
    init(cfg: IntersectionObserverInit = {}) {
        this.obsrv = new view_obsrv(cfg);
        this.html5();
        this.yt();
        return this;
    }
    /**
     * html5影片
     */
    html5() {
        this.obsrv.observe(Array.from(document.querySelectorAll("video")), entry => {
            let vid = <HTMLVideoElement>entry.target;
            if (!entry.isIntersecting) {
                return vid.readyState == 4 ? vid.pause() : '';
            }
            if (!!vid.autoplay) {
                vid.readyState == 4 ? vid.play() : '';
            }
        });
    }
    /**
     * youtube影片
     */
    yt() {
        let videos = (() => {
            let els: HTMLIFrameElement[] = Array.from(document.querySelectorAll("iframe"));
            return els.filter(el => {
                let [src, data_src] = [el.src, el.dataset.src];
                return src.concat(data_src).includes("youtube.com/embed");
            });
        })();
        this.obsrv.observe(videos, entry => {
            let vid = (<HTMLIFrameElement>entry.target).contentWindow;
            if (!entry.isIntersecting) {
                vid.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });
    }
}
export const vid_pause = new vidPause();