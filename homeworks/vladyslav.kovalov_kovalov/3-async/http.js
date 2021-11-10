export class HTTP {
    constructor(url) {
        this.url = url;
    }

    async getPosts() {
        const response = await fetch(`${this.url}?_start=0&_end=30`);
        const posts = await response.json();
        return posts;
    }

    async deletePost(postId) {
        const path = `${this.url}/${postId}`;
        const response = await fetch(path, {
            method: 'DELETE',
        });
        const posts = await response.json();
        return posts;
    }
}
