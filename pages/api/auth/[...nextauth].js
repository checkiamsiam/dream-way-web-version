import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    // providers: [
    //     CredentialsProvider({
    //         async authorize({ email, password }, req) {
    //             // Check if email and password entered are valid

    //             if (!email || !password) {
    //                 throw new Error('please enter email or password');
    //             }

    //             const res = await fetch(
    //                 'https://dreamwayapi.sajidurapp.xyz/api/user/signin',
    //                 {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                     body: JSON.stringify({
    //                         email,
    //                         password,
    //                     }),
    //                 }
    //             );

    //             const data = await res.json();

    //             if (data?.status === 0) {
    //                 throw new Error(data?.message);
    //             }

    //             const user = {
    //                 ...data.user,
    //                 token: data.token,
    //             };

    //             return user;
    //         },
    //     }),
    // ],

    providers: [
        CredentialsProvider({
            name: 'Credentials',

            async authorize({ email, password }, req) {
                // Check if email and password entered are valid

                if (!email || !password) {
                    throw new Error('please enter email or password');
                }

                const res = await fetch(
                    'https://dreamwayapi.sajidurapp.xyz/api/user/signin',
                    {
                        method: 'POST',
                        body: JSON.stringify({ email, password }),
                        headers: { 'Content-Type': 'application/json' },
                    }
                );

                const user = await res.json();

                // If no error and we have user data, return it
                if (res.ok && user) {
                    const response = {
                        ...user.user,
                        token: user.token,
                    };

                    return response;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],

    // our response from the server send user and token
    callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
            if (!user) {
                user = token.user;
            }

            return token;
        },

        async session({ session, token, user }) {
            // console.log(token.token.user);
            session.user = token.token.user;

            // if no user
            if (!user) {
                session.user = token.token.user;
                user = token.token.user;
            }
            // console.log(user);

            return session;
        },
    },

    session: {
        strategy: 'jwt',
    },
};

export default NextAuth(authOptions);
