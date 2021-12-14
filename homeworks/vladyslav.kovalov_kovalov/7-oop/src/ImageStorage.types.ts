export interface IStorage {
    images: string[];
    save(image: string): number;
}
