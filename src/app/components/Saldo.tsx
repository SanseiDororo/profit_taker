type SaldoData = {
  title: string
  type: string
  amount: number
}

function Saldo(props: SaldoData) {
  return (
    <div className="flex justify-between items-center mb-6">
      {/*Left */}
      <div>
        <p className="text-white text-lg">{props.title}</p>
        <p className="text-grayish-cyan text-sm">/ {props.type}</p>
        {/*Right */}
      </div>
      <p className="font-bold text-strong-cyan text-2xl">${props.amount}</p>
    </div>
  )
}
export default Saldo
