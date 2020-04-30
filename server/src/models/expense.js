const expense = (sequelize, DataTypes) => {
  const Expense = sequelize.define("expense", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Expense.associate = (models) => {
    Expense.belongsTo(models.User);
  };

  return Expense;
};

export default expense;
