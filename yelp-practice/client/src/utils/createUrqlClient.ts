import { Cache, cacheExchange } from "@urql/exchange-graphcache";
import Router from "next/router";
import {
  dedupExchange,
  Exchange,
  fetchExchange,
  // stringifyVariables,
} from "urql";
import { pipe, tap } from "wonka";
import {
  DeleteMutationVariables,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
  VoteMutationVariables,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { gql } from "@urql/core";
import { isServer } from "./isServer";

const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        if (error?.message.includes("not authenticated")) {
          Router.replace("/login");
        }
      })
    );
  };

// export const cursorPagination = (): Resolver => {
//   return (_parent, fieldArgs, cache, info) => {
//     const { parentKey: entityKey, fieldName } = info;
//     const allFields = cache.inspectFields(entityKey);
//     const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
//     const size = fieldInfos.length;
//     if (size === 0) {
//       return undefined;
//     }
//     const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
//     const isItInTheCache = cache.resolve(entityKey, fieldKey);
//     info.partial = !isItInTheCache;
//     const results: string[] = [];
//     fieldInfos.forEach((fi) => {
//       const key = cache.resolve(entityKey, fi.fieldKey) as string[];
//       const data = cache.resolve(key, 'posts')
//       console.log("data", data);
//       results.push(...data);
//     });
//     return {
//       hasMore: true,
//       posts: results,
//     };
//   };
// };

function invalidateAllPosts(cache: Cache) {
  const allFields = cache.inspectFields("Query");
  const fieldInfos = allFields.filter((info) => info.fieldName === "posts");
  fieldInfos.forEach((fieldInfo) => {
    cache.invalidate("Query", "posts", fieldInfo.arguments || {});
  });
}

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = "";
  if (isServer()) {
    cookie = ctx?.req.headers.cookie;
  }
  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include" as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        // resolvers: {
        //   Query: {
        //     posts: cursorPagination(),
        //   },
        // },
        updates: {
          Mutation: {
            deletePost: (_result, args, cache) => {
              cache.invalidate({
                __typename: "Post",
                id: (args as DeleteMutationVariables).id,
              });
            },
            vote: (_result, args, cache) => {
              const { postId, value } = args as VoteMutationVariables;
              const data = cache.readFragment(
                gql`
                  fragment _ on Post {
                    id
                    points
                  }
                `,
                { id: postId }
              );
              if (data) {
                const newPoints = data.points + value;
                cache.writeFragment(
                  gql`
                    fragment _ on Post {
                      points
                    }
                  `,
                  { id: postId, points: newPoints }
                );
              }
            },
            createPost: (_result, _, cache) => {
              invalidateAllPosts(cache);
            },
            logout: (_result, _, cache) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                () => ({ me: null })
              );
            },
            login: (_result, _, cache) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    return {
                      me: result.login.user,
                    };
                  }
                }
              );
              invalidateAllPosts(cache);
            },

            register: (_result, _, cache) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query;
                  } else {
                    return {
                      me: result.register.user,
                    };
                  }
                }
              );
            },
          },
        },
      }),
      ssrExchange,
      errorExchange,
      fetchExchange,
    ],
  };
};
