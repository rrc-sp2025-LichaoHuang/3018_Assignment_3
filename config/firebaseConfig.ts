import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../key.json";

initializeApp({
  credential: cert(serviceAccount as any),
});

const db = getFirestore();

export { db };