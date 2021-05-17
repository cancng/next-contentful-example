import { Box, Text, Image } from '@fower/react';
import { styled } from '@fower/styled';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import PostCard from '../components/PostCard';
import { GetPostsQueryResult } from '../generated/graphql';
import { initializeApollo } from '../lib/apollo';
import { GET_POSTS } from '../lib/gql/posts';

const HTMLink = styled('a');

type Props = {
  data: GetPostsQueryResult['data'];
};

export default function Home({ data }: Props) {
  return (
    <>
      <Text text6XL mb3 block>
        The Blog
      </Text>
      <Box flex spaceX4 mb4>
        <Box w='50%'>
          <Image
            src='https://picsum.photos/800/350'
            rounded
            maxW='100%'
            h='100%'
            css={{ objectFit: 'cover' }}
          />
        </Box>
        <Box p4 flex column spaceY6 w='50%'>
          <Text text4XL>WELCOME</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            distinctio quo, natus culpa, vero odit quod et, ex vel quae amet
            esse quisquam veniam animi. Deserunt minus neque corrupti, iste
            beatae praesentium sunt facere unde quidem corporis magnam
            exercitationem. Tenetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Et facere alias, debitis ratione laborum corporis
            fuga quasi dignissimos est quidem.
          </Text>
          <Link href='/'>
            <HTMLink
              bgRed400
              alignSelf='flex-end'
              px3
              py2
              white
              rounded
              cursorPointer
            >
              ABOUT US
            </HTMLink>
          </Link>
        </Box>
      </Box>
      <Box>
        <Text text3XL mb4 block>
          Latest Posts
        </Text>
        <Box grid gridTemplateColumns-3--md gridTemplateColumns-1--sm gap-40>
          {data.postCollection.items.map((item) => (
            <PostCard key={item.sys.id} post={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const res = await apollo.query<GetPostsQueryResult['data']>({
    query: GET_POSTS,
  });

  return {
    props: {
      data: res.data,
    },
  };
};
