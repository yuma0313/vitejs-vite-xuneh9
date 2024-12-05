export interface GetImagesResponse {
    page: number;
    per_page: number;
    photos: Photo[];
    next_page: string;
}
export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: PhotoSrc;
    liked: boolean;
    alt: string;
}
export interface PhotoSrc {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}
export interface GetVideosResponse {
    page: number;
    per_page: number;
    total_results: number;
    url: string;
    videos: Video[];
}
export interface Video {
    id: number;
    width: number;
    height: number;
    url: string;
    image: string;
    duration: number;
    user: {
        id: number;
        name: string;
        url: string;
    };
    video_files: VideoFile[];
    video_pictures: VideoPicture[];
}
export interface VideoFile {
    id: number;
    quality: string;
    file_type: string;
    width?: number;
    height?: number;
    link: string;
}
export interface VideoPicture {
    id: number;
    picture: string;
    nr: number;
}
