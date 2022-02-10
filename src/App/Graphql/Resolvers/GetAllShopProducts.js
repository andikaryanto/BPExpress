import M_users from "../../Models/M_users";
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} from 'graphql';
import UserType from "../Types/UserType";
import { parserConfiguration } from "yargs";
import MuserCollection from "../../ViewModel/Musers/MuserCollection";
import ShopProductType from "../Types/ShopProductType";
import M_shopproducts from "../../Models/M_shopproducts";
import MshopproductCollection from "../../ViewModel/Mshopproduct/MshopproductCollection";


class GetAllShopProducts {

    static execute(){
        return {
            type : new GraphQLList(ShopProductType),
            args : {
                ShopId : { 
                    type : GraphQLInt,
                }
            },
            resolve : async function(parent, args, context){
                var request = context.request;
                if(request.graphqlError != undefined)
                    throw request.graphqlError;

                var search = {}
                if(args.ShopId != undefined){
                    if(args.ShopId != null && args.ShopId != ''){
                        search = {
                            where : {
                                M_Shop_Id : args.ShopId
                            }
                        }
                    }
                }

                var shopProducts =  await M_shopproducts.collect(search);
                return (new MshopproductCollection(shopProducts)).proceedAndGetData();
            }
        }
    }
}

export default GetAllShopProducts;