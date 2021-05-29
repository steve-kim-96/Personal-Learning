import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  let body = null;
  // data is loaeding
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <Flex w="7%" justifyContent="space-between" alignItems="center">
        <NextLink href="/login">
          <a>Login</a>
        </NextLink>
        <NextLink href="/register">
          <a>Register</a>
        </NextLink>
      </Flex>
    );
    // user is logged in
  } else {
    body = (
      <Flex w="20%" justifyContent="space-evenly" alignItems="center">
        <NextLink href="/create-post">
          <Button colorScheme="blue" as={Link}>
            create post
          </Button>
        </NextLink>
        <Box>{data.me.username}</Box>
        <Button
          onClick={async () => {
            await logout();
            router.reload();
          }}
          variant="link"
          isLoading={logoutFetching}
        >
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Box
      position="sticky"
      zIndex={1}
      top={0}
      bg="tan"
      p={4}
      display="flex"
      justifyContent="space-between"
    >
      <NextLink href="/">
        <Link>
          <Heading>LiReddit</Heading>
        </Link>
      </NextLink>
      {body}
    </Box>
  );
};

export default NavBar;
