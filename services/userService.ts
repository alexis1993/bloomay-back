import { baseAT } from '../app'
import { IUser } from '../interfaces/userInterface';

export const getUsers = async() => {
    const missions : Array<IUser> = []
    try{
        const records = await baseAT('bloomers').select().all()
        records.forEach((record:any)=> {
            record.fields.freelance = JSON.parse(record.fields.freelance)
            missions.push(record.fields)
        })
    }
    catch(e){
        console.log(e)
    }
    return missions
}

  