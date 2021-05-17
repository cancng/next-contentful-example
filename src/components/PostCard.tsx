import { Box, Text } from '@fower/react';
import Link from 'next/link';
import NextImage from 'next/image';
import { styled } from '@fower/styled';
import { GetPostQueryResult } from '../generated/graphql';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
  post: GetPostQueryResult['data']['postCollection']['items'][0];
};
const NImage = styled(NextImage);

export default function PostCard({ post }: Props) {
  console.log(post);
  return (
    <Link href={`/post/${post.slug}`}>
      <Box
        display='flex'
        column
        spaceY2
        as='a'
        p3
        cursorPointer
        rounded-1
        shadowMD--hover
      >
        <Box>
          <NImage
            src={
              post.thumbnail
                ? post.thumbnail.url
                : 'https://images.ctfassets.net/87usdf6bhufs/6bCdHdDulT8nfi5ZA0EQ38/35b488b23bc35f508761810abdcfe879/no-thumbnail.png'
            }
            rounded
            maxW='100%'
            width={post.thumbnail ? post.thumbnail.width : 640}
            height={post.thumbnail ? post.thumbnail.height : 480}
          />
        </Box>
        <Text gray500>May 13, 2021</Text>
        <Text fontBold text2XL>
          {post.title}
        </Text>
      </Box>
    </Link>
  );
}
