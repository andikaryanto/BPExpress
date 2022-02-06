import M_users from "../../Models/M_users";
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import UserType from "../Types/UserType";
import { parserConfiguration } from "yargs";
import MuserCollection from "../../ViewModel/Musers/MuserCollection";


class GetAllUsers {

    static execute(){
        return {
            type : new GraphQLList(UserType),
            args : {
                Username : { type : GraphQLString}
            },
            resolve : async function(parent, args, context){
                var request = context.request;
                if(request.graphqlError != undefined)
                    throw request.graphqlError;

                var search = {}
                if(args.Username != undefined){
                    if(args.Username != null && args.Username != ''){
                        search = {
                            like : {
                                Username : args.Username
                            }
                        }
                    }
                }

                var userList =  await M_users.collect(search);
                return await (new MuserCollection(userList)).proceedAndGetData();
            }
        }
    }
}

export default GetAllUsers;