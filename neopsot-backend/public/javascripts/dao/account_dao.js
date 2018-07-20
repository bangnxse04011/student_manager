const Students = require('../create_database/db_table_students');
const common = require('../common/helper');

module.exports = {

    /**
     * Method create new account
     */
    // insert_account: (fullName, email, id_user, user_name, pass_word, phone_number, role) => {
    //     return db_tabale_account.create({
    //         fullName: fullName,
    //         email: email,
    //         id_user: id_user,
    //         user_name: user_name,
    //         pass_word: pass_word,
    //         phone_number: phone_number,
    //         role: role
    //     });
    // },
    /**
     * Method delete account by user id
     */
    // delete_account: (id_user) => {
    //     return db_tabale_account.destroy({
    //         where: {
    //             id_user: id_user
    //         }
    //     });
    // },
    /**
     * Method find all account
     */
    find_all_students: () => {
        return Students.findAll();
    },

    /**
     * Method find one student by id
     * return student
     */
    find_Student_By_ID: (id) => {
        try {
            return new Promise((resolve, reject) => {
                Students.findOne({
                    where: {
                        student_id: id
                    }
                });
            }).then(student => {
                resolve(student);
            })
        } catch (error) {
            reject(err);
        }
    }
}

