/**
 * Interagit avec une API JSON
 * @param {string} url
 * @param {RequestInit & {json?: object}} options
 */
export async function fetchJSON(url, options = {}) {
    const headers = {Accept: 'application/json',  ...options}
    const r = await fetch(url, {...options, headers})
    if (!r.ok) {
        throw new Error("Erreur serveur", {cause: r})
    }
    return await r.json()
}