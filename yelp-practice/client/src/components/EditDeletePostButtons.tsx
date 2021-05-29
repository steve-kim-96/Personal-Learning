import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useDeleteMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}
const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const [, deletePost] = useDeleteMutation();
  const [{ data: meData }] = useMeQuery();

  if (meData?.me?.id !== creatorId) {
    return null;
  }
  return (
    <Flex w="12%" justifyContent="space-between">
      <IconButton
        alignSelf="flex-end"
        aria-label="Delete post"
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({ id });
        }}
      />
      <NextLink href="/post/edit/[id]" as={`post/edit/${id}`}>
        <IconButton
          as={Link}
          alignSelf="flex-end"
          aria-label="Edit post"
          icon={<EditIcon />}
        />
      </NextLink>
    </Flex>
  );
};

export default EditDeletePostButtons;
