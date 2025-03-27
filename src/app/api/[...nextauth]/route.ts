import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiRequest } from "@/app/utils/api";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await apiRequest('/auth/login', 'POST', {
            email: credentials?.email,
            password: credentials?.password
          });

          if (response.token && response.user) {
            return {
              id: response.user._id,
              name: response.user.fullName,
              email: response.user.email,
              avatarUrl: response.user.avatarUrl,
              role: response.user.role,
              token: response.token,
            };
          }
          return null;
        } catch (error) {
          console.error("Login Error:", error);
          return null;
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.avatarUrl = user.avatarUrl;
        token.role = user.role;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.avatarUrl = token.avatarUrl;
        session.user.role = token.role;
        session.accessToken = token.accessToken;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
