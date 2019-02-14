module.exports = function services(pool) {
    //define a method to get all customers inside the database.
    let getCustomers = async () => {
        //define a variable to store a query that will get all customers
        let getAll = await pool.query('SELECT * FROM customers');
        return getAll.rows;
    }

    //Define a method to get Single customer
    let getSingleCustomer = async (id) => {

        let getCustomer = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
        return getCustomer.rows;
    }

    //define a method to add customers into database
    let add = async (customer) => {

        let data = [
            customer.first_name,
            customer.last_name,
            customer.phone,
            customer.email,
            customer.addresses,
            customer.city
        ]
        //define a variable to store SQL
        return await pool.query(`INSERT INTO customers(first_name, last_name, phone, email, addresses, city) VALUES($1, $2, $3, $4, $5, $6)`, data);
    }
    //define a method to update a specific customer
    let updates = async (customer) => {
        let data = [
            customer.first_name,
            customer.last_name,
            customer.phone,
            customer.email,
            customer.address,
            customer.city,
            customer.id
        ]
        //define a variable to store SQL
        let updateQuery = `UPDATE customers SET first_name = $1, last_name = $2, phone = $3, email = $4, addresses = $5, city = $6 where id = &7`;
        return await pool.query(updateQuery, data)
    }

    //define  method to delete seingle customer
    let deleteById = async (id) => {
        return await pool.query(`DELETE FROM customers WHERE id = $1`, [id]);
    }

    return {
        getCustomers,
        getSingleCustomer,
        add,
        updates,
        deleteById
    }

}