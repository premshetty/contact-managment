"use client"
import Table from '../components/Table'
import CovidDataChart from '@/components/WWData'
import CaseWithDate from '@/components/CaseWithDate'
import CWData from '@/components/CWData'
export default function Home() {
  return (<div className="p-3">
    <h1 className="text-2xl font-bold tracking-tight  mb-5 text-gray-200 whitespace-nowrap ">
      Your Contacts
    </h1>
    <Table />
    <h1 className="text-2xl font-bold mt-5 tracking-tight  mb-5 text-gray-200 whitespace-nowrap ">
      Graphs and Charts
    </h1>
    <div className="p-3 md:grid flex flex-col max-w-[100%] overflow-scroll md:grid-cols-2 gap-3">
      <CovidDataChart />
      <CaseWithDate />
      <div className='col-span-2'>

        <CWData />
      </div>
    </div>

  </div>

  )
}