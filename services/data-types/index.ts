export interface PosterTypes{
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
export interface MovieTypes{
    adult: boolean,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number
}
export interface GenreTypes{
    id: number,
    name: string
}