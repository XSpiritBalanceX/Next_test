import NextAuth, {AuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from '@services/db'
import bcrypt from "bcrypt";


const handler=NextAuth({
    //session:{strategy:"jwt"},
    adapter:PrismaAdapter(db) as AuthOptions['adapter'],
    providers: [GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID??'',
        clientSecret: process.env.GITHUB_CLIENT_SECRET??'',
    }),
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'text' },
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const user = await db.user.findUnique({where:{email:credentials!.email}})

                if (user) {
                    const comparePassword=bcrypt.compareSync(credentials!.password, user?.password!);
                    if(comparePassword){
                        return user
                    }else {
                        return null
                    }
                } else {
                    return null
                }
            }
        })],
    pages:{
        signIn:'/auth/signin',
    },

})


export {handler as GET, handler as POST}
