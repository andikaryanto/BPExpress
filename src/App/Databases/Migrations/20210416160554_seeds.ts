// Do not remove this file. it's default

exports.up = function(knex: any) {
    return knex.schema
        .createTable('seeds', function(table: any) {
            table.increments('id').primary();
            table.string('name', 100).nullable();
            table.datetime('time', 6).nullable();
        });
};

exports.down = function(knex: any) {

};
