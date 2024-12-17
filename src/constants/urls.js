const urls = {
    search: (page, query, count) => `/search/photos?page=${page}&query=${query}&per_page=${count}`,
    collections: (page, query, count) => `/search/collections?page=${page}&query=${query}&per_page=${count}`,
}

export {
    urls
}