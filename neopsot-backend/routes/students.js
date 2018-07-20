var express = require('express');
var Student = require('../public/javascripts/dao/account_dao')
var valid = require('../public/javascripts/common/helper')
var Student_Table = require('../public/javascripts/create_database/db_table_students')
var router = express.Router();

/**
 * Method get all student
 */
router.get('/', function (req, res, next) {
  Student.find_all_students().then(student => {
    res.end(JSON.stringify(student));
  });
});

/**
 * Method get all student history
 */
router.get('/', function (req, res, next) {
  Student.find_all_students().then(student => {
    res.end(JSON.stringify(student));
  });
});

/**
 * Method find one student by ID
 */
router.get('/:id', function (req, res, next) {
  let stu_id = req.params['id'];
  let check_stu_id = valid.valid_input(stu_id);
  if (check_stu_id == false) {
    return;
  }
  // Find data using student id
  Student_Table.findOne({
    where: {
      student_id: stu_id
    }
  }).then(stu => {
    res.end(JSON.stringify(stu));
  }).catch(function (err) {
    res.end(err);
  });
});

/**
 * Method delete one student by ID
 */

router.delete('/:id', function (req, res, next) {
  let stu_id = req.params['id'];
  let check_stu_id = valid.valid_input(stu_id);
  if (check_stu_id == false) {
    return;
  }
  // Find data using student id
  Student_Table.findOne({
    where: {
      student_id: stu_id
    }
  }).then(stu => {
    if (stu && stu != null) {
      // Student_Table.destroy({
      //   where: {
      //     student_id: stu_id,
      //   }
      // }).then((result) => { return result });
      stu.updateAttributes({
        isDelete: true
      })
    } else {
      res.end('Not Found')
    }
    res.json("DELELE student successfull");
  }).catch(function (err) {
    res.end(err);
  });
});

/**
 * Method delete one student by ID
 */

router.post('/', function (req, res, next) {
  try {
    let student;
    if (req.body && req.body != null) {
      student = req.body;
    }
    Student_Table.create({
      address: student.address,
      email: student.email,
      fullName: student.fullName,
      phone_number: student.phone_number,
      student_id: student.student_id
    });
    res.end("create successfull");
  } catch (error) {
    console.log(error);
  }
});

/**
 * Method delete one student by ID
 */

router.put('/', function (req, res, next) {
  try {
    let student;
    if (req.body && req.body != null) {
      student = req.body;
    }
    // Find data using student id
    Student_Table.findOne({
      where: {
        student_id: student.student_id
      }
    }).then(stu => {
      if (stu && stu != null) {
        console.log("----------------------------------------");
        // Student_Table.destroy({
        //   where: {
        //     student_id: stu_id,
        //   }
        // }).then((result) => { return result });
        Student_Table.update({
          address: student.address,
          email: student.email,
          fullName: student.fullName,
          phone_number: student.phone_number
        }, {
            where: {
              student_id: student.student_id
            }
          }).then(function () { })
      } else {
        res.end('Not Found')
      }
      res.end("update successfull");
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
