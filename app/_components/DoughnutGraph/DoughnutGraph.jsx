import { PieChart, Pie, Cell, Tooltip } from "recharts";

const PieChartComponent = ({ mainAccords }) => {
  const COLORS = mainAccords?.map((accord) => accord.color);

  const data = mainAccords?.map((accord) => ({
    name: accord.name,
    value: accord.percentage,
  }));

  return (
    <>
      <PieChart
        className="!size-[15rem] md:!size-[20rem] overflow-visible"
        width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
        >
          {data?.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="flex flex-wrap justify-center gap-3 max-w-sm items-center">
        {mainAccords?.map((el) => {
          return (
            <div
              key={el._id}
              style={{
                backgroundColor: `${el?.color}`,
              }}
              className="bg-pink-500 px-3 py-1 text-center rounded-sm text-white min-w-[6rem]"
            >
              {el?.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PieChartComponent;
