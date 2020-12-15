# Video Pause & Play by IntersectionObserver

![GitHub package.json version](https://img.shields.io/github/package-json/v/exinfinite/videoPause)
![GitHub file size in bytes](https://img.shields.io/github/size/exinfinite/videoPause/dist/video-pause.prod.js)
![GitHub](https://img.shields.io/github/license/exinfinite/videoPause)
![GitHub all releases](https://img.shields.io/github/downloads/exinfinite/videoPause/total)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9a17e564-c8ed-45f1-aeb7-70e05db45502/deploy-status)](https://app.netlify.com/sites/video-pause/deploys)

## 範例及代碼

[線上範例](https://video-pause.netlify.app/)

[Sample code](https://github.com/exinfinite/videoPause/tree/main/example)

[Production](https://github.com/exinfinite/videoPause/blob/main/dist/video-pause.prod.js)

```javascript
vid_pause.init({
    html5: true,//default
    yt: true,//default
    options: { threshold: 0.5 }
});
//options 參考 https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_concepts_and_usage
```

## Development with webpack-dev-server

```javascript
npm run start
```

## Build

```javascript
npm run build
```
