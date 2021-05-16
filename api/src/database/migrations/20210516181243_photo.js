exports.up = function(knex) {
    return knex.schema.createTable('Photos', function(table) {
        table.increments('id').primary();
        table.varchar('title',255).notNullable()
        table.varchar('description',255).notNullable();
        table.date('creation_date').notNullable();
        table.varchar('size',30).notNullable();
        table.varchar('color',50).notNullable();
        table.integer('album_id').notNullable();
        table.foreign('album_id').references('id').inTable('Albums').onDelete('CASCADE').onUpdate('CASCADE');
   })
 };
 
 exports.down = function(knex) {
    return knex.schema.dropTable('Photos');
 };