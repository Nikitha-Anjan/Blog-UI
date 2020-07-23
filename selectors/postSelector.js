export const findPost =(posts,id) => {
    return posts.find(post => post.id == id)
}