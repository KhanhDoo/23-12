import db from '~/utils/db'

export default defineEventHandler(async (event)  => { 
    return null
    // const category = await db.category.findUnique({
    //     where: {
    //         id: event.context.params?.categoryId
    //     }
    // })
    // return category;
})