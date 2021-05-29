import { Stack } from "@chakra-ui/layout";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useState } from "react";
import EditDeletePostButtons from "../components/EditDeletePostButtons";
import { Layout } from "../components/Layout";
import UpdootSection from "../components/UpdootSection";
import { useMeQuery, usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

// Setting up Urql provider

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, error, fetching }] = usePostsQuery({
    variables,
  });

  if (!fetching && !data) {
    return <div>{error?.message}</div>;
  }

  return (
    <Layout>
      {fetching && !data ? (
        <div>Loading...</div>
      ) : (
        <Stack>
          {data!.posts.posts.map((post) => {
            return post !== undefined ? (
              <Flex key={post.id} p={5} shadow="md" borderWidth="1px">
                <UpdootSection post={post} />
                <Box w="100%">
                  <NextLink href="/post/[id]" as={`/post/${post.id}`}>
                    <Link>
                      <Heading fontSize="xl">{post.title}</Heading>
                    </Link>
                  </NextLink>
                  <Text> Posted by {post.creator.username}</Text>
                  <Flex w="100%" justifyContent="space-between">
                    <Text mt={4}>{post.textSnippet}</Text>
                    <EditDeletePostButtons
                      id={post.id}
                      creatorId={post.creator.id}
                    />
                  </Flex>
                </Box>
              </Flex>
            ) : null;
          })}
        </Stack>
      )}
      {/* {data && data.posts.hasMore ? (
        <Button
          my={4}
          onClick={() => {
            setVariables({
              limit: variables.limit,
              cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
            });
          }}
        >
          Load more
        </Button>
      ) : null} */}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
