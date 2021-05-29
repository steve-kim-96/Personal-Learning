import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import EditDeletePostButtons from "../../../components/EditDeletePostButtons";
import { Inputfield } from "../../../components/Inputfield";
import { Layout } from "../../../components/Layout";
import { Wrapper } from "../../../components/Wrapper";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { useGetIntId } from "../../../utils/useGetIntId";

const EditPost = ({}) => {
  const router = useRouter();
  const intId = useGetIntId();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
  const [, updatePost] = useUpdatePostMutation();
  if (fetching) {
    <Layout>
      <div>Loading...</div>
    </Layout>;

    if (!data?.post) {
      return (
        <Layout>
          <div>Could not find post</div>
        </Layout>
      );
    }
  }
  return (
    <Layout>
      <Wrapper variant="small">
        <Formik
          initialValues={{
            title: data!.post!.title,
            text: data!.post!.textSnippet,
          }}
          onSubmit={async (values) => {
            await updatePost({ id: intId, ...values });
            router.back();
          }}
          //     const { error } = await createPost({ input: values });
          //     if (!error) {
          //       router.push("/");
          //     }
          //   }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Inputfield name="title" placeholder="title" label="Title" />
              <Box mt={4}>
                <Inputfield
                  textarea
                  name="text"
                  placeholder="text..."
                  label="Body"
                />
              </Box>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
              >
                Update post
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(EditPost);
