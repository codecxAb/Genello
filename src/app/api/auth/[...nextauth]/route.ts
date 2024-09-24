import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Replace this with your actual authentication logic (e.g., a database check)
        if (credentials?.email === 'test@example.com' && credentials?.password === 'password123') {
          return { id: '1', email: credentials.email };
        }
        return null; // Return null if authentication fails
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Optional: specify a custom sign-in page
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };