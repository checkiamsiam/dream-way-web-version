import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
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

                    return {
                        token: response,
                    };
                }

                throw new Error(user?.message || 'Something went wrong');
            },
        }),
    ],

    // our response from the server send user and token
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user; // Setting token in session
            return session;
        },
    },
};

export default NextAuth(authOptions);
