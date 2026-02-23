import type { Timestamp, FieldValue, DocumentReference, GeoPoint, QueryDocumentSnapshot, DocumentData } from "firebase-admin/firestore";

export type FirestoreDataTypes =
  | string
  | number
  | boolean
  | null
  | Timestamp
  | FieldValue
  | DocumentReference
  | GeoPoint
  | QueryDocumentSnapshot
  | DocumentData
  | Record<string, unknown>;