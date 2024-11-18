import { gigya as MyGigya } from '../my-gigya';

type MyDSPhotoAlbumSchema = {
    albumName: string;
    albumDescription?: string;
    albumPhotos?: {
        photoName: string;
        photoDescription?: string;
        photoURL: string;
    }[];
};

export async function dsSearchPhotoAlbumsExample(
    gigya: typeof MyGigya,
    albumName: string,
): Promise<Awaited<ReturnType<typeof gigya.ds.search<MyDSPhotoAlbumSchema>>>['results']> {
    // Execute the "ds.search" API method
    const dsSearchResponse = await gigya.ds.search<MyDSPhotoAlbumSchema>({
        query: `SELECT * FROM myPhotoAlbums WHERE albumName CONTAINS "${albumName}"`,
    });

    // Check for a successful response
    if (dsSearchResponse.errorCode !== 0) throw new Error(dsSearchResponse.errorMessage);

    // Since we checked for a successful response, we can safely assume that "results" is not undefined
    return dsSearchResponse.results!;
}
