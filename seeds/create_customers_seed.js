exports.seed = async function(knex) {
  await knex('customer_notes').del()
  await knex('customers').del()

  await knex('customers').insert([
    { id: 'cus_1', fullName: 'Abhishek Lamis', email: 'abhishek.lamis@email.com', phone: '021123456', status: 'prospective' },
    { id: 'cus_2', fullName: 'Carina Jadvyga', email: 'carina.jadvyga@email.com', phone: '021321654', status: 'prospective' },
    { id: 'cus_3', fullName: 'Lakisha Ilija', email: 'lakisha.ilija@email.com', phone: '027987765', status: 'current' },
    { id: 'cus_4', fullName: 'Pascaline Riny', email: 'pascaline.riny@email.com', phone: '027847262', status: 'current' },
    { id: 'cus_5', fullName: 'Salomon Isa', email: 'salomon.isa@email.com', phone: '021567234', status: 'non-active' },
    { id: 'cus_6', fullName: 'Vinzent Dayton', email: 'vinzent.dayton@email.com', phone: '021840104', status: 'non-active' },
  ])

  await knex('customer_notes').insert([
    { id: 'not_1', customerId: 'cus_1', content: 'This is a great customer!' },
    { id: 'not_2', customerId: 'cus_1', content: 'Can\'t say it enough, great customer!' },
    { id: 'not_3', customerId: 'cus_4', content: 'This customer has lost their bag... has anyone seen it?' },
  ])
}
