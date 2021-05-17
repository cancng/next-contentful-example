import { Box, Text } from '@fower/react';
import { GetServerSideProps } from 'next';
import { BsCalendar, BsClock } from 'react-icons/bs';
import dayjs from 'dayjs';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  GetPostQueryResult,
  GetPostQueryVariables,
} from '../../generated/graphql';
import { initializeApollo } from '../../lib/apollo';
import { GET_POST } from '../../lib/gql/post';
import getReadingTime from '../../lib/getReadingTime';

type Props = {
  post: GetPostQueryResult['data']['postCollection']['items'][0];
};

const BlogPost = ({ post }: Props) => {
  return (
    <>
      <Text text5XL mb3>
        {post.title}
      </Text>
      <Box flex mt1 mb6 spaceX4>
        <Text
          bgGray300
          gray600
          px2
          py1
          rounded
          flex
          alignItems='center'
          justifyContent='center'
        >
          <BsCalendar style={{ marginRight: 4 }} /> Created at{' '}
          {dayjs(post.sys.publishedAt).format('DD/MM/YYYY')}
        </Text>
        <Text
          bgGray300
          gray600
          px2
          py1
          rounded
          flex
          alignItems='center'
          justifyContent='center'
        >
          <BsClock style={{ marginRight: 4 }} />{' '}
          {getReadingTime(
            documentToReactComponents(post.content.json).toString()
          )}{' '}
          min reading time
        </Text>
      </Box>
      <Text>{documentToReactComponents(post.content.json)}</Text>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apollo = initializeApollo();

  const res = await apollo.query<
    GetPostQueryResult['data'],
    GetPostQueryVariables
  >({
    query: GET_POST,
    variables: { slug: ctx.params.slug as string },
  });

  return {
    props: {
      post: res.data.postCollection.items[0],
    },
  };
};

export default BlogPost;
