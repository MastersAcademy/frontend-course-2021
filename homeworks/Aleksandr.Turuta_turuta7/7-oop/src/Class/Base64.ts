export class Base64 {
    public getBase64(image: File) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onloadend = () => {
                resolve(reader.result.toString());
            }
        })
    }
}
