'use client'
import CovidDataChart from '@/components/WWData'
import CaseWithDate from '@/components/CaseWithDate'
import CWData from '@/components/CWData'
export default function Home() {
  return (<div className="p-3 md:grid flex flex-col max-w-[100%] overflow-scroll md:grid-cols-2 gap-3">
    <CovidDataChart />
    <CaseWithDate />
    <div className='col-span-2'>

      <CWData />
    </div>
  </div>

  )
}