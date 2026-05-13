import Card from "@/shared/ui/Card"

const cards = [
  {
    title: "Total Employees",
    value: "240",
  },
  {
    title: "Present Today",
    value: "210",
  },
  {
    title: "On Leave",
    value: "18",
  },
  {
    title: "Pending Requests",
    value: "12",
  },
]
export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {cards.map((card) => (
        <Card key={card.title}>

          <p className="text-gray-500 text-sm mb-2">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            {card.value}
          </h2>

        </Card>
      ))}

    </div>
  )
}