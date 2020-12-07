/**
 * 設定偵測範圍及偵測對象
 */
export default class viewObserver {
    /**
     * 參數參考
     * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_concepts_and_usage
     */
    constructor(private cfg: IntersectionObserverInit = {}) { }
    private obInit(
        cb: (entry: IntersectionObserverEntry) => void
    ): IntersectionObserver {
        return new IntersectionObserver(entries => {
            entries.forEach(entry => cb.call(null, entry));
        }, this.cfg);
    }
    observe(
        $els: Element[],
        cb: (entry: IntersectionObserverEntry) => void
    ): void {
        const observer = this.obInit(cb);
        $els.forEach(vid => observer.observe(vid));
    }
}
