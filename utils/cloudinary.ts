import {
  v2 as cloudinary,
  UploadApiOptions,
  UploadApiResponse,
} from 'cloudinary';

const options: UploadApiOptions = {
  use_filename: true,
  unique_filename: true,
  overwrite: true,
};

cloudinary.config({
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

const cloudinaryUploader = async (
  path: string
): Promise<UploadApiResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(path, options, (err, res) => {
      if (err) reject(err);

      resolve(res);
    });
  });
};

export default cloudinaryUploader;
