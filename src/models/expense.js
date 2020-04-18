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

  return Expense;
};

export default expense;
