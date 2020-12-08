# Video Pause & Play by IntersectionObserver

![GitHub package.json version](https://img.shields.io/github/package-json/v/exinfinite/videoPause)
![GitHub file size in bytes](https://img.shields.io/github/size/exinfinite/videoPause/dist/video-pause.js)
![GitHub](https://img.shields.io/github/license/exinfinite/videoPause)

## 範例及代碼

```javascript
vid_pause.init({
    html5: true,//default
    yt: true,//default
    options: { threshold: 0.5 }
});
//options 參考 https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_concepts_and_usage
```

[Example](https://github.com/exinfinite/videoPause/blob/main/example/index.html)

[Production](https://github.com/exinfinite/videoPause/blob/main/dist/video-pause.js)

## Development with webpack-dev-server

```javascript
npm run start
```

## Build

```javascript
npm run build
```