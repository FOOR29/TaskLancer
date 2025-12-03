import NextAuth from "next-auth"
import authConfig from "./auth.config";



// Create the NextAuth instance with the Prisma adapter and custom configuration
export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(db),

  // Spread in the custom auth configuration
  ...authConfig,

  // Use JWT strategy for session management
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.email = user.email
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.email = token.email
      }
      return session;
    },
  },

}) 