'use client'
import { BiDollar } from 'react-icons/bi'
import Label from '@/app/components/Label'
import { FaUser } from 'react-icons/fa'
import TipButton from './components/TipButton'
import Saldo from './components/Saldo'
import { useState } from 'react'

export default function Home() {
  const profit = [5, 10, 15, 25, 50]
  const [aum, setAum] = useState(0)
  const [profitPercentage, setProfitPercentage] = useState(0)
  const [salaries, setSalaries] = useState(0)
  const [anualSalary, setAnualSalary] = useState(0)
  const companyProfit = aum * (profitPercentage * 0.01) || 0
  const salariesSum = anualSalary * salaries || 0
  const remaining = companyProfit - salariesSum || 0
  const resetValues = () => {
    setAum(0)
    setProfitPercentage(0)
    setSalaries(0)
    setAnualSalary(0)
  }

  return (
    <div className="min-h-screen w-full bg-[hsl(185,41%,84%)] flex flex-col items-center justify-center gap-10 p-2">
      <h1 className="text-very-dark-cyan text-4xl">Profit Taker</h1>
      {/*Main Section */}
      <main className="flex flex-col md:flex-row bg-white p-4 rounded-2xl gap-6 w-full max-w-[700px]">
        {/*Left Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/*Bill */}
          <section className="flex flex-col gap-2">
            <Label>AUM</Label>
            <div className="relative flex items-center">
              <BiDollar className="absolute left-1.5 text-light-grayish-cyan" />
              <input
                onChange={(e) => setAum(e.target.valueAsNumber)}
                className="text-right bg-[hsl(189,41%,97%)] w-full h-[32px] px-2 outline-strong-cyan rounded font-bold text-very-dark-cyan"
                type="number"
                value={aum}
                placeholder="0"
              />
            </div>
          </section>
          {/*Select Tip */}
          <section className="flex flex-col gap-2">
            <Label>Select APY Profit Level %</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {profit.map((data, index) => (
                <TipButton
                  onClick={() => setProfitPercentage(data)}
                  key={index}
                >
                  {data}%
                </TipButton>
              ))}
              <input
                onChange={(e) => setProfitPercentage(e.target.valueAsNumber)}
                type="number"
                placeholder="Custom"
                value={profitPercentage === 0 ? '' : profitPercentage}
                className="text-center bg-[hsl(189,41%,97%)] py-2 px-2 outline-strong-cyan rounded font-bold text-very-dark-cyan"
              />
            </div>
          </section>
          {/*Salarie Amount */}
          <section className="flex flex-col gap-2">
            <Label>Anual Salary</Label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-2 top-2.5 text-light-grayish-cyan text-xs" />
              <input
                onChange={(e) => setAnualSalary(e.target.valueAsNumber)}
                className="text-right bg-[hsl(189,41%,97%)] w-full h-[32px] px-2  outline-strong-cyan rounded font-bold text-very-dark-cyan"
                type="number"
                placeholder="0"
                value={anualSalary}
              />
            </div>
          </section>
          {/*Number of salaries */}
          <section className="flex flex-col gap-2">
            <Label>Number Of Salaries</Label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-2 top-2.5 text-light-grayish-cyan text-xs" />
              <input
                onChange={(e) => setSalaries(e.target.valueAsNumber)}
                className="text-right bg-[hsl(189,41%,97%)] w-full h-[32px] px-2  outline-strong-cyan rounded font-bold text-very-dark-cyan"
                type="number"
                placeholder="0"
                value={salaries}
              />
            </div>
          </section>
          {/*Tip */}
          <section></section>
        </div>
        {/*Right Section */}
        <div className="bg-very-dark-cyan md:w-1/2 rounded-lg flex flex-col justify-between px-8 pt-8 pb-12">
          {/*Top Items */}
          <section>
            {/*Profit */}
            <Saldo
              title="Profit"
              type="before salaries"
              amount={companyProfit}
            />
            {/*All Salaries */}
            <Saldo
              title={'Salaries'}
              type={'altogether'}
              amount={salariesSum}
            />
            {/*Remaining */}
            <Saldo title={'Remaining'} type={'saldo'} amount={remaining} />
          </section>
          {/*Button */}
          <button
            onClick={resetValues}
            className="bg-strong-cyan w-full hover:bg-light-grayish-cyan text-very-dark-cyan rounded-sm font-bold h-[38px]"
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  )
}
