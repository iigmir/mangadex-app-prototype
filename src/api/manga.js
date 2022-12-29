const baseUrl = "https://api.mangadex.org";

/**
 * @see <https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-search-manga>
 * @param {FormData} params
 * @returns Response
 */
export const manga = async (params = FormData) => {
    const qs = new URLSearchParams(params).toString();
    const url = `${baseUrl}/manga?${qs}`;
    const response = await fetch( url ).then( r => r.json() );
    return response;
};

/**
 * @see <https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-manga-tag>
 * @returns Response
 */
export const tag = async () => {
    const url = `${baseUrl}/tag`;
    const response = await fetch( url ).then( r => r.json() );
    return response;
};
