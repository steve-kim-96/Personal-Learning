import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [, vote] = useVoteMutation();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginRight="5"
      >
        <IconButton
          aria-label="Up Vote"
          colorScheme={post.voteStatus === 1 ? "green" : undefined}
          icon={<ChevronUpIcon />}
          onClick={async () => {
            await vote({
              postId: post.id,
              value: 1,
            });
          }}
        />
        {post.points}
        <IconButton
          aria-label="Down Vote"
          colorScheme={post.voteStatus === -1 ? "red" : undefined}
          icon={<ChevronDownIcon />}
          onClick={async () => {
            await vote({
              postId: post.id,
              value: -1,
            });
          }}
        />
      </Box>
    </>
  );
};

export default UpdootSection;
