import { Box, Text, Textarea, Divider, AbsoluteCenter, Flex } from "@chakra-ui/react"
import { createRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

export const AttestForm = () => {
    const dropZoneRef: React.LegacyRef<HTMLDivElement> | undefined = createRef();
    const onDrop = useCallback(async (event: any) => {
        console.log('onDrop')
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return <Box mt={4}>
        <Text mb='8px'>Freeform Attestation:</Text>
        <Textarea
            rows={8}
            backgroundColor={'white'}
            placeholder="An explination of what this token stands for, what it represents and/or any other important information you'd like to attach"
        />
        <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter px='4'>
                or
            </AbsoluteCenter>
        </Box>
        <input
            style={{ display: "none" }}
            {...getInputProps()}
            type="file"
            accept="*"
        />
        <Flex
            {...getRootProps()}
            w="full"
            cursor="pointer"
            ref={dropZoneRef}
            p="0"
            backdropFilter="blur(20px)"
            border="2px dashed #000"
            rounded="45px"
            minH={{ base: "20vh" }}
            bg="rgba(255, 255, 255, 0.09)"
            direction="column"
            transitionDuration="300ms"
            alignItems="center"
            _hover={{ background: "blackAlpha.100" }}
            justify="center"
            // py="10"
            mb="10"
        >
            <FaCloudUploadAlt size="60px" />
            <Text fontWeight="normal" mt="2">
                Legal Contract PDF
            </Text>
        </Flex>
    </Box>

}