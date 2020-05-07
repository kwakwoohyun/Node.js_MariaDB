module.exports = (sequelize, DataTypes) => {
    // sequelize.define('객체이름',스키마정의,테이블 설정)
    return sequelize.define('comment', {
        comment: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    }, {
        // timestamps는 테이블 옵션으로, sequelize.define()의 3번째 인자이다.
        // timestamps를 true로 주게되면 createdAt, updatedAt 컬럼이 추가된다.
        timestamps: false,
    })
}