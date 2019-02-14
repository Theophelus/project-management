module.exports = (services) => {
    //Define an API to get all customers
    let getCustomers = async (req, res) => {
        try {
            let results = await services.getCustomers()
            res.json({
                status: 'success',
                data: results
            })

        } catch (error) {
            res.json({
                status: 'error',
                error: error.stack
            })
        }
    }

    //Define an API to single customers
    let getSingleCustomer = async (req, res) => {
        //define a variable to get single customers id
        let id = req.params.id
        console.log(id)
        try {
            let results = await services.getSingleCustomer(id)
            res.json({
                status: 'success',
                data: results
            })

        } catch (error) {
            res.json({
                status: 'error',
                error: error.stack
            })
        }
    }
    let add = async (req, res) => {
        // let added = req.body;
        // console.log(added);
        try {

            let results = await services.add(req.body);
            res.json({
                status: 'success',
                data: results
            })

        } catch (error) {
            res.json({
                status: 'error',
                error: error.stack
            })
        }
    }

    //define an api to update single customer
    let updates = async (req, res) => {
        let updated = req.body;
        try {

            let results = await services.updates(updated);
            res.json({
                // message: `${}`
                status: 'success',
                data: results
            })

        } catch (error) {
            res.json({
                status: 'error',
                error: error.stack
            })
        }
    }

    //Define an api to delete a single customer
    let deleteId = async (eq, res) => {

        let delId = req.params.id;

        try {
            let results = await services.deleteId(delId);
        res.json({
            status: `success`,
            data: results
        })
        } catch (error) {
            res.json({
                status: `error`,
                error: error.stack
            })
        }
    }
    return {
        getCustomers,
        getSingleCustomer,
        add,
        updates,
        deleteId
    }
}