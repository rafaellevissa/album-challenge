exports.up = function(knex) {
    return knex.schema.createTable('Users', function(table) {
     table.increments('id').primary();
     table.varchar('name', 255).notNullable().unique();
     table.varchar('email',255).notNullable().unique();
     table.varchar('password',255).notNullable();
   })
 };
 
 exports.down = function(knex) {
    return knex.schema.dropTable('Users');
 };