import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Channel = {
  __typename?: 'Channel';
  channelId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  inviteUrl: Scalars['String'];
  name: Scalars['String'];
  serverReferenceId: Scalars['String'];
};

export type CreateChannelInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  serverReferenceId: Scalars['String'];
};

export type CreateServerInput = {
  name: Scalars['String'];
};

export type GlobalUser = {
  __typename?: 'GlobalUser';
  connectedServerId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  globalUserId: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  onlineStatus: Scalars['String'];
  profileURL: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  connectToChannel: Channel;
  connectToServer: Server;
  createChannel: Channel;
  createServer: Server;
  deleteServer: Scalars['Boolean'];
  joinServer: Scalars['Boolean'];
  leaveServer: Scalars['Boolean'];
  login: GlobalUser;
  logout: Scalars['Boolean'];
  register: GlobalUser;
  setOnlineStatus: Scalars['String'];
};


export type MutationConnectToChannelArgs = {
  channelId: Scalars['String'];
};


export type MutationConnectToServerArgs = {
  serverReferenceId: Scalars['String'];
};


export type MutationCreateChannelArgs = {
  options: CreateChannelInput;
};


export type MutationCreateServerArgs = {
  options: CreateServerInput;
};


export type MutationDeleteServerArgs = {
  serverReferenceId: Scalars['String'];
};


export type MutationJoinServerArgs = {
  serverReferenceId: Scalars['String'];
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationSetOnlineStatusArgs = {
  onlineStatus: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  channel: Channel;
  channels: Array<Channel>;
  getOnlineStatus: Scalars['String'];
  hello: Scalars['String'];
  server: Server;
  servers: Array<Server>;
};


export type QueryChannelArgs = {
  channelId: Scalars['String'];
};


export type QueryChannelsArgs = {
  serverReferenceId: Scalars['String'];
};


export type QueryServerArgs = {
  serverReferenceId: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Server = {
  __typename?: 'Server';
  id: Scalars['ID'];
  name: Scalars['String'];
  serverReferenceId: Scalars['String'];
};

export type ConnectToChannelMutationVariables = Exact<{
  channelId: Scalars['String'];
}>;


export type ConnectToChannelMutation = { __typename?: 'Mutation', connectToChannel: { __typename?: 'Channel', id: string, channelId: string, serverReferenceId: string, name: string, description: string, inviteUrl: string } };

export type ConnectToServerMutationVariables = Exact<{
  serverReferenceId: Scalars['String'];
}>;


export type ConnectToServerMutation = { __typename?: 'Mutation', connectToServer: { __typename?: 'Server', name: string, id: string, serverReferenceId: string } };

export type CreateChannelMutationVariables = Exact<{
  options: CreateChannelInput;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'Channel', id: string, channelId: string, serverReferenceId: string, name: string, description: string, inviteUrl: string } };

export type CreateServerMutationVariables = Exact<{
  options: CreateServerInput;
}>;


export type CreateServerMutation = { __typename?: 'Mutation', createServer: { __typename?: 'Server', name: string, id: string, serverReferenceId: string } };

export type JoinServerMutationVariables = Exact<{
  serverReferenceId: Scalars['String'];
}>;


export type JoinServerMutation = { __typename?: 'Mutation', joinServer: boolean };

export type LeaveServerMutationVariables = Exact<{ [key: string]: never; }>;


export type LeaveServerMutation = { __typename?: 'Mutation', leaveServer: boolean };

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'GlobalUser', email: string, firstName: string, lastName: string, globalUserId: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'GlobalUser', email: string, firstName: string, lastName: string, profileURL: string, globalUserId: string } };

export type SetOnlineStatusMutationVariables = Exact<{
  onlineStatus: Scalars['String'];
}>;


export type SetOnlineStatusMutation = { __typename?: 'Mutation', setOnlineStatus: string };

export type ChannelQueryVariables = Exact<{
  channelId: Scalars['String'];
}>;


export type ChannelQuery = { __typename?: 'Query', channel: { __typename?: 'Channel', id: string, serverReferenceId: string, channelId: string, name: string, description: string } };

export type ChannelsQueryVariables = Exact<{
  serverReferenceId: Scalars['String'];
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename?: 'Channel', name: string, id: string, channelId: string, description: string, serverReferenceId: string, inviteUrl: string }> };

export type OnlineStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineStatusQuery = { __typename?: 'Query', getOnlineStatus: string };

export type ServerQueryVariables = Exact<{
  serverReferenceId: Scalars['String'];
}>;


export type ServerQuery = { __typename?: 'Query', server: { __typename?: 'Server', name: string, id: string, serverReferenceId: string } };

export type ServersQueryVariables = Exact<{ [key: string]: never; }>;


export type ServersQuery = { __typename?: 'Query', servers: Array<{ __typename?: 'Server', name: string, id: string, serverReferenceId: string }> };


export const ConnectToChannelDocument = gql`
    mutation ConnectToChannel($channelId: String!) {
  connectToChannel(channelId: $channelId) {
    id
    channelId
    serverReferenceId
    name
    description
    inviteUrl
  }
}
    `;
export type ConnectToChannelMutationFn = Apollo.MutationFunction<ConnectToChannelMutation, ConnectToChannelMutationVariables>;

/**
 * __useConnectToChannelMutation__
 *
 * To run a mutation, you first call `useConnectToChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectToChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectToChannelMutation, { data, loading, error }] = useConnectToChannelMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useConnectToChannelMutation(baseOptions?: Apollo.MutationHookOptions<ConnectToChannelMutation, ConnectToChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConnectToChannelMutation, ConnectToChannelMutationVariables>(ConnectToChannelDocument, options);
      }
export type ConnectToChannelMutationHookResult = ReturnType<typeof useConnectToChannelMutation>;
export type ConnectToChannelMutationResult = Apollo.MutationResult<ConnectToChannelMutation>;
export type ConnectToChannelMutationOptions = Apollo.BaseMutationOptions<ConnectToChannelMutation, ConnectToChannelMutationVariables>;
export const ConnectToServerDocument = gql`
    mutation ConnectToServer($serverReferenceId: String!) {
  connectToServer(serverReferenceId: $serverReferenceId) {
    name
    id
    serverReferenceId
  }
}
    `;
export type ConnectToServerMutationFn = Apollo.MutationFunction<ConnectToServerMutation, ConnectToServerMutationVariables>;

/**
 * __useConnectToServerMutation__
 *
 * To run a mutation, you first call `useConnectToServerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectToServerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectToServerMutation, { data, loading, error }] = useConnectToServerMutation({
 *   variables: {
 *      serverReferenceId: // value for 'serverReferenceId'
 *   },
 * });
 */
export function useConnectToServerMutation(baseOptions?: Apollo.MutationHookOptions<ConnectToServerMutation, ConnectToServerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConnectToServerMutation, ConnectToServerMutationVariables>(ConnectToServerDocument, options);
      }
export type ConnectToServerMutationHookResult = ReturnType<typeof useConnectToServerMutation>;
export type ConnectToServerMutationResult = Apollo.MutationResult<ConnectToServerMutation>;
export type ConnectToServerMutationOptions = Apollo.BaseMutationOptions<ConnectToServerMutation, ConnectToServerMutationVariables>;
export const CreateChannelDocument = gql`
    mutation CreateChannel($options: CreateChannelInput!) {
  createChannel(options: $options) {
    id
    channelId
    serverReferenceId
    name
    description
    inviteUrl
  }
}
    `;
export type CreateChannelMutationFn = Apollo.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, options);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = Apollo.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = Apollo.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;
export const CreateServerDocument = gql`
    mutation CreateServer($options: CreateServerInput!) {
  createServer(options: $options) {
    name
    id
    serverReferenceId
  }
}
    `;
export type CreateServerMutationFn = Apollo.MutationFunction<CreateServerMutation, CreateServerMutationVariables>;

/**
 * __useCreateServerMutation__
 *
 * To run a mutation, you first call `useCreateServerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServerMutation, { data, loading, error }] = useCreateServerMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateServerMutation(baseOptions?: Apollo.MutationHookOptions<CreateServerMutation, CreateServerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateServerMutation, CreateServerMutationVariables>(CreateServerDocument, options);
      }
export type CreateServerMutationHookResult = ReturnType<typeof useCreateServerMutation>;
export type CreateServerMutationResult = Apollo.MutationResult<CreateServerMutation>;
export type CreateServerMutationOptions = Apollo.BaseMutationOptions<CreateServerMutation, CreateServerMutationVariables>;
export const JoinServerDocument = gql`
    mutation JoinServer($serverReferenceId: String!) {
  joinServer(serverReferenceId: $serverReferenceId)
}
    `;
export type JoinServerMutationFn = Apollo.MutationFunction<JoinServerMutation, JoinServerMutationVariables>;

/**
 * __useJoinServerMutation__
 *
 * To run a mutation, you first call `useJoinServerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinServerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinServerMutation, { data, loading, error }] = useJoinServerMutation({
 *   variables: {
 *      serverReferenceId: // value for 'serverReferenceId'
 *   },
 * });
 */
export function useJoinServerMutation(baseOptions?: Apollo.MutationHookOptions<JoinServerMutation, JoinServerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinServerMutation, JoinServerMutationVariables>(JoinServerDocument, options);
      }
export type JoinServerMutationHookResult = ReturnType<typeof useJoinServerMutation>;
export type JoinServerMutationResult = Apollo.MutationResult<JoinServerMutation>;
export type JoinServerMutationOptions = Apollo.BaseMutationOptions<JoinServerMutation, JoinServerMutationVariables>;
export const LeaveServerDocument = gql`
    mutation LeaveServer {
  leaveServer
}
    `;
export type LeaveServerMutationFn = Apollo.MutationFunction<LeaveServerMutation, LeaveServerMutationVariables>;

/**
 * __useLeaveServerMutation__
 *
 * To run a mutation, you first call `useLeaveServerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveServerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveServerMutation, { data, loading, error }] = useLeaveServerMutation({
 *   variables: {
 *   },
 * });
 */
export function useLeaveServerMutation(baseOptions?: Apollo.MutationHookOptions<LeaveServerMutation, LeaveServerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveServerMutation, LeaveServerMutationVariables>(LeaveServerDocument, options);
      }
export type LeaveServerMutationHookResult = ReturnType<typeof useLeaveServerMutation>;
export type LeaveServerMutationResult = Apollo.MutationResult<LeaveServerMutation>;
export type LeaveServerMutationOptions = Apollo.BaseMutationOptions<LeaveServerMutation, LeaveServerMutationVariables>;
export const LoginDocument = gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    email
    firstName
    lastName
    globalUserId
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: RegisterInput!) {
  register(options: $options) {
    email
    firstName
    lastName
    profileURL
    globalUserId
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SetOnlineStatusDocument = gql`
    mutation SetOnlineStatus($onlineStatus: String!) {
  setOnlineStatus(onlineStatus: $onlineStatus)
}
    `;
export type SetOnlineStatusMutationFn = Apollo.MutationFunction<SetOnlineStatusMutation, SetOnlineStatusMutationVariables>;

/**
 * __useSetOnlineStatusMutation__
 *
 * To run a mutation, you first call `useSetOnlineStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetOnlineStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setOnlineStatusMutation, { data, loading, error }] = useSetOnlineStatusMutation({
 *   variables: {
 *      onlineStatus: // value for 'onlineStatus'
 *   },
 * });
 */
export function useSetOnlineStatusMutation(baseOptions?: Apollo.MutationHookOptions<SetOnlineStatusMutation, SetOnlineStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetOnlineStatusMutation, SetOnlineStatusMutationVariables>(SetOnlineStatusDocument, options);
      }
export type SetOnlineStatusMutationHookResult = ReturnType<typeof useSetOnlineStatusMutation>;
export type SetOnlineStatusMutationResult = Apollo.MutationResult<SetOnlineStatusMutation>;
export type SetOnlineStatusMutationOptions = Apollo.BaseMutationOptions<SetOnlineStatusMutation, SetOnlineStatusMutationVariables>;
export const ChannelDocument = gql`
    query Channel($channelId: String!) {
  channel(channelId: $channelId) {
    id
    serverReferenceId
    channelId
    name
    description
  }
}
    `;

/**
 * __useChannelQuery__
 *
 * To run a query within a React component, call `useChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useChannelQuery(baseOptions: Apollo.QueryHookOptions<ChannelQuery, ChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelQuery, ChannelQueryVariables>(ChannelDocument, options);
      }
export function useChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelQuery, ChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelQuery, ChannelQueryVariables>(ChannelDocument, options);
        }
export type ChannelQueryHookResult = ReturnType<typeof useChannelQuery>;
export type ChannelLazyQueryHookResult = ReturnType<typeof useChannelLazyQuery>;
export type ChannelQueryResult = Apollo.QueryResult<ChannelQuery, ChannelQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($serverReferenceId: String!) {
  channels(serverReferenceId: $serverReferenceId) {
    name
    id
    channelId
    description
    serverReferenceId
    inviteUrl
  }
}
    `;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *      serverReferenceId: // value for 'serverReferenceId'
 *   },
 * });
 */
export function useChannelsQuery(baseOptions: Apollo.QueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
      }
export function useChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsQueryResult = Apollo.QueryResult<ChannelsQuery, ChannelsQueryVariables>;
export const OnlineStatusDocument = gql`
    query OnlineStatus {
  getOnlineStatus
}
    `;

/**
 * __useOnlineStatusQuery__
 *
 * To run a query within a React component, call `useOnlineStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlineStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlineStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlineStatusQuery(baseOptions?: Apollo.QueryHookOptions<OnlineStatusQuery, OnlineStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlineStatusQuery, OnlineStatusQueryVariables>(OnlineStatusDocument, options);
      }
export function useOnlineStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlineStatusQuery, OnlineStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlineStatusQuery, OnlineStatusQueryVariables>(OnlineStatusDocument, options);
        }
export type OnlineStatusQueryHookResult = ReturnType<typeof useOnlineStatusQuery>;
export type OnlineStatusLazyQueryHookResult = ReturnType<typeof useOnlineStatusLazyQuery>;
export type OnlineStatusQueryResult = Apollo.QueryResult<OnlineStatusQuery, OnlineStatusQueryVariables>;
export const ServerDocument = gql`
    query Server($serverReferenceId: String!) {
  server(serverReferenceId: $serverReferenceId) {
    name
    id
    serverReferenceId
  }
}
    `;

/**
 * __useServerQuery__
 *
 * To run a query within a React component, call `useServerQuery` and pass it any options that fit your needs.
 * When your component renders, `useServerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServerQuery({
 *   variables: {
 *      serverReferenceId: // value for 'serverReferenceId'
 *   },
 * });
 */
export function useServerQuery(baseOptions: Apollo.QueryHookOptions<ServerQuery, ServerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServerQuery, ServerQueryVariables>(ServerDocument, options);
      }
export function useServerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServerQuery, ServerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServerQuery, ServerQueryVariables>(ServerDocument, options);
        }
export type ServerQueryHookResult = ReturnType<typeof useServerQuery>;
export type ServerLazyQueryHookResult = ReturnType<typeof useServerLazyQuery>;
export type ServerQueryResult = Apollo.QueryResult<ServerQuery, ServerQueryVariables>;
export const ServersDocument = gql`
    query Servers {
  servers {
    name
    id
    serverReferenceId
  }
}
    `;

/**
 * __useServersQuery__
 *
 * To run a query within a React component, call `useServersQuery` and pass it any options that fit your needs.
 * When your component renders, `useServersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServersQuery({
 *   variables: {
 *   },
 * });
 */
export function useServersQuery(baseOptions?: Apollo.QueryHookOptions<ServersQuery, ServersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServersQuery, ServersQueryVariables>(ServersDocument, options);
      }
export function useServersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServersQuery, ServersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServersQuery, ServersQueryVariables>(ServersDocument, options);
        }
export type ServersQueryHookResult = ReturnType<typeof useServersQuery>;
export type ServersLazyQueryHookResult = ReturnType<typeof useServersLazyQuery>;
export type ServersQueryResult = Apollo.QueryResult<ServersQuery, ServersQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    