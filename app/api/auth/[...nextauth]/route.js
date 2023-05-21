import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@/utils/database'
import User from '@/models/user'
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      })

      session.user.id = sessionUser._id.toString()

      return session
      try {
        await connectToDB()

        //Check if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        })
        //if not, create aa new user

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
          })
        }

        return true
      } catch (error) {}
      console.log(error)
      return false
    },
    async signIn({ profile }) {},
  },
})

export { handler as GET, handler as POST }
