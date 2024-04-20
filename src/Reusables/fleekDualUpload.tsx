import { ApplicationAccessTokenService, FleekSdk } from '@fleekxyz/sdk';
const applicationService = new ApplicationAccessTokenService({
  clientId: process.env.NEXT_PUBLIC_FLEEK_APPLICATION_ID || '',
});
const fleek = new FleekSdk({ accessTokenService: applicationService });

const uploadFunction = async (file, metadata) => {
  const uploadPath = (metadata.name + '-' + metadata.file.name).replace(/\s+/g, '');
  console.log('🚀 uploading file to IPFS with file & token:', uploadPath);
  const uploadResponse = await fleek
    .ipfs()
    .add({
      path: uploadPath,
      content: formData.file,
    })
    .catch((err: any) => {
      setLoading(false);
      setFormError('Error uploading file');
      console.error(err);
      throw 'IPFS error uploading image';
    });

  console.log(`🚀 uploaded file to IPFS: ${uploadResponse?.cid.toString()}`);
  const uploadHash = uploadResponse?.cid.toString();
  const imageHash = formData.file.type.includes('pdf') ? defaultPDFHash : uploadHash;
  const _metadata = {
    name: formData.name,
    description: formData.description,
    image: NftBaseURI + imageHash,
    attributes: groupByKeyValue(formData, [
      formData.file.type.includes('pdf') ? { trait_type: 'PDF', value: NftBaseURI + uploadHash } : null,
      formData.createToken === 'on' ? { trait_type: linkedTokenKey, value: deployedTokenAddress } : null,
      formData.createLP === 'on' ? { trait_type: linkedPoolKey, value: liquidityPoolAddress } : null,
    ]),
  };

  // upload metadata to IPFS
  console.log('🚀 uploading metadata to IPFS:', _metadata);
  const metadataResponse = await fleek
    .ipfs()
    .add({
      path: uploadPath + '-metadata',
      content: JSON.stringify(_metadata),
    })
    .catch(() => {
      setFormError('Error minting your token, check all your inputs for errors and try again');
      setLoading(false);
      setFormError('Error uploading your metadata, check for errors and try again');
      throw 'IPFS error uploading metadata';
    });

  const metadataHash = metadataResponse?.cid.toString();
  console.log(`🚀 uploaded metadata to IPFS: ${metadataHash}`);
  return metadataHash
}

export default uploadFunction