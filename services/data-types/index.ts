export interface MovieTypes{
    poster: string,
    downloadLink: string,
    id: string,
    options: {
        image: string,
        name: string,
        dateCreated: string,
        datePublished: string,
        genre: string,
        director:[{
            name: string
        }],
    },
    categories: string,
    rating: string,
    quality: string,
    
}