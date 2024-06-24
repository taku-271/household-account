import type { Expense } from "@prisma/client";
import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  async expenses(_args, _, _ctx) {
    const expensesByUserId = await _ctx.prisma.expense.findMany({
      where: {
        user_id: _args.id,
      },
    });

    return expensesByUserId.map((expense) => convertExpense(expense));
  },
};

const convertExpense = (expenses: Expense) => ({
  id: expenses.id,
  title: expenses.title,
  amount: expenses.amount,
  createdAt: expenses.created_at,
  updatedAt: expenses.updated_at,
});
