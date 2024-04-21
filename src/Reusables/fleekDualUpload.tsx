import { ApplicationAccessTokenService, FleekSdk } from '@fleekxyz/sdk';
const applicationService = new ApplicationAccessTokenService({
  clientId: process.env.NEXT_PUBLIC_FLEEK_APPLICATION_ID || '',
});
const fleek = new FleekSdk({ accessTokenService: applicationService });

// move this to file upload area to set initial PDF image for while minting
const NftBaseURI = 'https://ipfs-gateway.legt.co/ipfs/'

const uploadFunction = async (file, metadata, onError) => {
  console.log('🚀 uploading file to IPFS with file & metadata:', file, metadata);
  const uploadPath = (metadata.name + '-' + file.name).replace(/\s+/g, '');
  const uploadResponse = await fleek
    .ipfs()
    .add({
      path: uploadPath,
      content: file,
    })
    .catch((err: any) => {
      onError('Error uploading file');
      console.error(err);
      throw 'IPFS error uploading image';
    });

  console.log(`🚀 uploaded file to IPFS: ${uploadResponse?.cid.toString()}`);
  const uploadHash = uploadResponse?.cid.toString();
  const isPdf = file.type.includes('pdf')
  if (isPdf) {
    metadata.attributes.push({ 'trait_type': 'PDF', value: NftBaseURI + uploadHash })
  } else {
    metadata.imageUrl = NftBaseURI + uploadHash
  }

  // upload metadata to IPFS
  console.log('🚀 uploading metadata:', metadata);
  const metadataResponse = await fleek
    .ipfs()
    .add({
      path: uploadPath + '-metadata',
      content: JSON.stringify(metadata),
    })
    .catch(() => {
      onError('Error uploading your metadata, check for errors and try again');
      throw 'IPFS error uploading metadata';
    });

  const metadataHash = metadataResponse?.cid.toString();
  console.log(`🚀 uploaded metadata to IPFS: ${metadataHash}`);
  return metadataHash
}

export default uploadFunction