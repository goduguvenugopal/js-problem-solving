const fs = require("fs/promises");

async function fetchExpenses() {
  try {
    const text = await fs.readFile("./project_expenses.json", "utf-8");

    const data = JSON.parse(text);

    return data;
  } catch (error) {
    console.error(error);
  }
}

const sumEachExpenses = async () => {
  const res = await fetchExpenses();

  const sumex = res.reduce((acc, item) => {
    acc[item.project_code] =
      (acc[item.project_code] || 0) + Number(item.amount);

    return acc;
  }, {});

  return sumex;
};

async function main() {
  const result = await sumEachExpenses();

  console.log(result);
}

main();