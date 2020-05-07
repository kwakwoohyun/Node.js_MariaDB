const path = require('path')
const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.Sequelize = Sequelize

// models/index.js 와 model들은 연결
// db객체를 require하여 User와 Comment를 접근할 수 있다.
db.User = require('./user')(sequelize, Sequelize)
db.Comment = require('./comment')(sequelize, Sequelize)

// db관계 설정
db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' })
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' })

module.exports = db