class Seeds {
     static async isSeedExist(knex, seedFileName){
          return (await knex.table("seeds").where({ name: seedFileName })).length > 0;
     }
}

export default Seeds;