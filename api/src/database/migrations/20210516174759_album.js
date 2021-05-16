exports.up = function(knex) {
    return knex.schema.createTable('Albums', function(table) {
        table.increments('id').primary();
        table.varchar('title',255).notNullable()
        table.varchar('description',255).notNullable();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('Users').onDelete('CASCADE').onUpdate('CASCADE');
   })
 };
 
 exports.down = function(knex) {
    return knex.schema.dropTable('Albums');
 };