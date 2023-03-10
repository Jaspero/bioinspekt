import {Storage} from '@google-cloud/storage';
import {SHARED_CONFIG} from 'definitions';
import {firestore} from 'firebase-admin';
import * as functions from 'firebase-functions';
import {ObjectMetadata} from 'firebase-functions/v1/storage';
import {basename, dirname, join} from 'path';
import {unpackGenerateImageString} from '../utils/unpack-generate-image-string';

export const fileDeleted = functions
  .region(SHARED_CONFIG.cloudRegion)
  .storage
  .object()
  .onDelete(async (data: ObjectMetadata) => {
    const fileName = basename(data.name);
    const dirName = dirname(data.name);

    /**
     * Storage
     */
    const storageDocumentRef = await firestore()
      .collection('storage')
      .where('name', '==', fileName)
      .where('path', '==', dirName).get().then(snapshot => {
        if (snapshot.empty) {
          return null;
        }

        return snapshot.docs[0].ref;
      });

    if (storageDocumentRef) {
      await storageDocumentRef.delete();
    }

    /**
     * Delete thumbnails for an image
     * Skip if the file is already a thumb
     */
    if (
      data.contentType.startsWith('image/') &&
      data.metadata['generate_1'] &&
      (data.metadata.skipDelete ? data.metadata.skipDelete !== 'true' : true)
    ) {
      const storage = new Storage().bucket(data.bucket);
      const lookUpName = (entry?: string) =>
        join(dirName, 'generated', (entry || '') + fileName);
      const webpLookUp = (entry?: string) =>
        lookUpName(entry).replace(/(.jpg|.png|.jpeg)/, '.webp');

      for (const key in data.metadata) {
        if (key.includes('generate_')) {
          const {
            filePrefix,
            webpVersion,
            height,
            width
          } = unpackGenerateImageString(data.metadata[key]);

          if (filePrefix || width || height) {
            try {
              await storage.file(lookUpName(filePrefix)).delete();
            } catch (e) {}
          }

          if (webpVersion) {
            try {
              await storage.file(webpLookUp(filePrefix)).delete();
            } catch (e) {}
          }
        }
      }
    }
  });
