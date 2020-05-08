var express = require('express');

var User = require('../models').User
var router = express.Router();

/*
    시퀄라이즈는 프로미스를 기본적으로 지원하므로 then과 catch를 사용해서 각각
    조회 성공 시와 실패 시의 정보를 얻을 수 있다. 
*/
router.get('/', (req, res, next) => {
  // User.findAll 메서드로 모든 사용자를 찾은 후, sequelize.pug를 렌더링할 때 결괏값인 users를 넣어준다. 
  User.findAll()
    .then((users) => {
      res.render('sequelize', { users })
    })
    .catch((err) => {
      console.error(err)
      next(err)
    })
})
/*
async/await 문법으로 표현

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.render('sequelize', { users })
  } catch (err) {
    console.error(err)
    next(err)
  }
})
*/
module.exports = router;
