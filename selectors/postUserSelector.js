export const filterPostUser =(posts,id) => {
    return posts.filter(post => post.userId == id)
}