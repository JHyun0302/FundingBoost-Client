const IMAGE_PROXY_PATH = process.env.REACT_APP_IMAGE_PROXY_PATH || "/img-proxy";
const HTTP_URL_PATTERN = /^https?:\/\//i;
const PROTOCOL_RELATIVE_PATTERN = /^\/\//;
const DATA_OR_BLOB_PATTERN = /^(data:|blob:)/i;
const KAKAO_CDN_HOST_PATTERN = /(^|\.)kakaocdn\.net$/i;
const KAKAO_THUMB_ORIGIN = process.env.REACT_APP_KAKAO_THUMB_ORIGIN || "https://img1.kakaocdn.net";
const DEFAULT_THUMB_WIDTH = 320;
const DEFAULT_THUMB_HEIGHT = 320;
const DEFAULT_THUMB_SCALE = 2;
const DEFAULT_THUMB_QUALITY = 82;
const DEFAULT_THUMB_FORMAT = "fwebp";

const encodeProxyParam = (targetUrl) =>
    encodeURI(targetUrl)
        .replace(/#/g, "%23")
        .replace(/&/g, "%26")
        .replace(/;/g, "%3B");

const toPositiveInt = (value, fallback) => {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return fallback;
    }
    return Math.floor(parsed);
};

const toKakaoThumbFormat = (value) => {
    if (typeof value !== "string" || !value.trim()) {
        return DEFAULT_THUMB_FORMAT;
    }
    const normalized = value.trim().toLowerCase();
    return normalized.startsWith("f") ? normalized : `f${normalized}`;
};

const shouldTransformKakaoThumb = (urlObj) => {
    if (!KAKAO_CDN_HOST_PATTERN.test(urlObj.hostname)) {
        return false;
    }
    if (urlObj.hostname.toLowerCase() === "img1.kakaocdn.net" && urlObj.pathname.startsWith("/thumb/")) {
        return false;
    }
    return true;
};

const buildKakaoThumbUrl = (originUrl, options = {}) => {
    const width = toPositiveInt(options.width, DEFAULT_THUMB_WIDTH);
    const height = toPositiveInt(options.height, DEFAULT_THUMB_HEIGHT);
    const scale = toPositiveInt(options.scale, DEFAULT_THUMB_SCALE);
    const quality = toPositiveInt(options.quality, DEFAULT_THUMB_QUALITY);
    const format = toKakaoThumbFormat(options.format);
    const encodedOrigin = encodeURIComponent(originUrl);

    return `${KAKAO_THUMB_ORIGIN}/thumb/C${width}x${height}@${scale}x.${format}.q${quality}/?fname=${encodedOrigin}`;
};

export const toImageProxyUrl = (value, options = {}) => {
    if (typeof value !== "string") {
        return value;
    }

    const url = value.trim();
    if (!url) {
        return url;
    }

    if (DATA_OR_BLOB_PATTERN.test(url)) {
        return url;
    }

    if (url.startsWith(IMAGE_PROXY_PATH)) {
        return url;
    }

    if (HTTP_URL_PATTERN.test(url)) {
        try {
            const parsed = new URL(url);
            const target = shouldTransformKakaoThumb(parsed)
                ? buildKakaoThumbUrl(url, options)
                : url;
            return `${IMAGE_PROXY_PATH}?url=${encodeProxyParam(target)}`;
        } catch (error) {
            return `${IMAGE_PROXY_PATH}?url=${encodeProxyParam(url)}`;
        }
    }

    if (PROTOCOL_RELATIVE_PATTERN.test(url)) {
        const normalized = `https:${url}`;
        try {
            const parsed = new URL(normalized);
            const target = shouldTransformKakaoThumb(parsed)
                ? buildKakaoThumbUrl(normalized, options)
                : normalized;
            return `${IMAGE_PROXY_PATH}?url=${encodeProxyParam(target)}`;
        } catch (error) {
            return `${IMAGE_PROXY_PATH}?url=${encodeProxyParam(normalized)}`;
        }
    }

    if (url.startsWith("/")) {
        return url;
    }

    return `/${url}`;
};
