/**
 * 暫停未在view中的影片
 */
import view_obsrv from "./viewObserver";
class vidPause {
    private obsrv: view_obsrv;
    init({ html5 = true, yt = true, options = <IntersectionObserverInit>{} }) {
        this.obsrv = new view_obsrv(options);
        html5 ? this.html5() : '';
        yt ? this.yt() : '';
        return { ...this };
    }
    /**
     * html5影片
     */
    html5() {
        const state = {
            HAVE_NOTHING: 0,
            HAVE_METADATA: 1,
            HAVE_CURRENT_DATA: 2,
            HAVE_FUTURE_DATA: 3,
            HAVE_ENOUGH_DATA: 4
        };
        this.obsrv.observe(Array.from(document.querySelectorAll("video")), entry => {
            let vid = <HTMLVideoElement>entry.target;
            if (!entry.isIntersecting) {
                return vid.readyState == state.HAVE_ENOUGH_DATA ? vid.pause() : '';
            }
            if (!!vid.autoplay) {
                return vid.readyState == state.HAVE_ENOUGH_DATA ? vid.play() : '';
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