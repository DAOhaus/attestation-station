import { ApplicationAccessTokenService, FleekSdk } from '@fleekxyz/sdk';
const applicationService = new ApplicationAccessTokenService({
  clientId: process.env.NEXT_PUBLIC_FLEEK_APPLICATION_ID || '',
});
const fleek = new FleekSdk({ accessTokenService: applicationService });

// move this to file upload area to set initial PDF image for while minting
const NftBaseURI = 'https://ipfs-gateway.legt.co/ipfs/'
export const singleUpload = async (file, path, onError?) => {
  return await fleek
    .ipfs()
    .add({
      path: path,
      content: file,
    })
    .catch((err: any) => {
      onError(`Error uploading ${file}, ${path}`);
      console.error(err);
      throw `error uploading ${file}, ${path} to IPFS`;
    });
}

export const doubleUpload = async (file, metadata, onError) => {
  console.log('🚀 uploading file to IPFS with file & metadata:', file, metadata);
  const uploadPath = (metadata.name + '-' + file.name).replace(/\s+/g, '');
  const uploadResponse = await singleUpload(file, uploadPath, onError)
  console.log(`🚀 uploaded file to IPFS: ${uploadResponse?.cid.toString()}`);
  const uploadHash = uploadResponse?.cid.toString();
  const isPdf = file.type.includes('pdf')
  if (isPdf) {
    metadata.attributes.push({ 'trait_type': 'PDF', value: NftBaseURI + uploadHash })
  } else {
    metadata.imageUrl = NftBaseURI + uploadHash
  }
  // upload metadata to IPFS
  console.log('🚀 uploading metadata', metadata)
  const metadataResponse = await singleUpload(JSON.stringify(metadata), uploadPath + '-metadata', onError)
  const metadataHash = metadataResponse?.cid.toString();
  console.log(`🚀 uploaded metadata to IPFS: ${metadataHash}`);
  return { metadataHash, fileHash: uploadHash }
}

export default doubleUpload 