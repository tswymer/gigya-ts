import { MyGigya } from './my-gigya';

type MyDSPhotoAlbumSchema = {
    albumName: string;
    albumDescription?: string;
    albumPhotos?: {
        photoName: string;
        photoDescription?: string;
        photoURL: string;
    }[];
};

export async function dsSearchPhotoAlbumsExample(gigya: MyGigya, albumName: string) {
    // Execute the "ds.search" API method
    const dsSearchResponse = await gigya.ds.search<MyDSPhotoAlbumSchema>({
        query: `SELECT * FROM myPhotoAlbums WHERE albumName CONTAINS "${albumName}"`,
    });

    // Check for a successful response
    // prettier-ignore
    if (dsSearchResponse.errorCode !== 0) throw new Error([
        `Failed to ds.search: ${dsSearchResponse.errorMessage}`,
        `Error Code: ${dsSearchResponse.errorCode}`,
        `Error Details: ${dsSearchResponse.errorDetails}`,
    ].join('\n'));

    // Type-safe responses including your custom schemas
    console.log(dsSearchResponse.results?.[0]?.data?.albumName);

    // Since we checked for a successful response, we can safely assume that "results" is not undefined
    return dsSearchResponse.results!;
}
