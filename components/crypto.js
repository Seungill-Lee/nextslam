import CryptoJS from "crypto-js";

// 암호화 메서드
export const cipher = (password) => {
    try {
        const secret_key = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY;
        if (!secret_key) {
            console.log("No Secret Key.");
            return null;
        }
        const encrypted = CryptoJS.AES.encrypt(password, secret_key).toString();
        return encrypted;
    } catch (e) {
        console.log("Encryption error occur : ", e);
        return null;
    }
}

// 복호화 메서드
export const decipher = (password) => {
    try {
        const secret_key = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY;
        if (!secret_key) {
            console.log("No Secret Key.");
            return null;
        }
        const decrypted_bytes = CryptoJS.AES.decrypt(password, secret_key);
        const decrypted = decrypted_bytes.toString(CryptoJS.enc.Utf8);
        return decrypted;
    } catch (e) {
        console.log("Decryption error occur : ", e);
        return null;
    }
}
