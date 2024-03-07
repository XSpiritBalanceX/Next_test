import {PrismaClient} from "@prisma/client";

const prisma=new PrismaClient()

async function main(){
    await prisma.catalog.upsert({
        where:{name:'Rick and Morty'},
        update:{},
        create:{
            name:'Rick and Morty',
            description:'The plot centers on a schoolboy named Morty and his grandfather Rick. Morty is an ordinary boy who is no different from his peers. But his grandfather is engaged in unusual scientific research and is often completely inadequate. He can grab his grandson at any time of the day or night and go with him on crazy adventures with the help of a flying saucer built from various rubbish, which is capable of moving through an interdimensional tunnel. Every time this couple finds themselves in the most unexpected places and the most ridiculous situations.',
            photo:'https://www.kino-teatr.ru/movie/posters/big/1/124331.jpg'
        }
    })
    await prisma.catalog.upsert({
        where:{name:'House of the Dragon'},
        update:{},
        create:{
            name:'House of the Dragon',
            description:'The series tells about events on the fictional continent of Westeros, which took place approximately 200 years before the events of Game of Thrones. The plot centers on the Dance of the Dragons, a civil war (129–131 years after Aegon I\'s Conquest) caused by the struggle between two branches of House Targaryen. The Dance began after the painful death of King Viserys I, when Princess Rhaenyra, supported by the Black Party, and Prince Aegon Targaryen, supported by the Green Party, simultaneously declared their rights to the Iron Throne.',
            photo:'https://i.ibb.co/68RW2L4/dom.jpg'
        }
    })

}

main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})