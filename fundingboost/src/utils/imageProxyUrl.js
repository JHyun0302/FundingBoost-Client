const IMAGE_PROXY_PATH = process.env.REACT_APP_IMAGE_PROXY_PATH || "/img-proxy";
const HTTP_URL_PATTERN = /^https?:\/\//i;
const PROTOCOL_RELATIVE_PATTERN = /^\/\//;
const DATA_OR_BLOB_PATTERN = /^(data:|blob:)/i;

export const toImageProxyUrl = (value) => {
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
        const proxyParam = encodeURI(url)
            .replace(/#/g, "%23")
            .replace(/&/g, "%26")
            .replace(/;/g, "%3B");
        return `${IMAGE_PROXY_PATH}?url=${proxyParam}`;
    }

    if (PROTOCOL_RELATIVE_PATTERN.test(url)) {
        const normalized = `https:${url}`;
        const proxyParam = encodeURI(normalized)
            .replace(/#/g, "%23")
            .replace(/&/g, "%26")
            .replace(/;/g, "%3B");
        return `${IMAGE_PROXY_PATH}?url=${proxyParam}`;
    }

    if (url.startsWith("/")) {
        return url;
    }

    return `/${url}`;
};
