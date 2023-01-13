import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    session: {
        strategy: 'jwt',
    },

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
                        image: user.token,
                    };

                    return Promise.resolve(response);
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],

    // our response from the server send user and token
    callbacks: {
        // set uer to session
        session: async (session, user) => {
            session.user = user;
            return Promise.resolve(session);
        },
    },
};

export default NextAuth(authOptions);
