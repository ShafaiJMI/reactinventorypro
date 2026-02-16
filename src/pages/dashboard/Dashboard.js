import React from 'react';
import { EllipsisIcon } from 'lucide-react';
import StatsCard from "./components/StatsCard";
import Banner from "./components/Banner";
import TopProduct from "./components/TopProduct";
import Aside from "./components/Aside";

function Dashboard(){
    return(
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
        <section className="col-span-2">
            <div className="sm:p-2">
               <Banner />
               <div className="mb-4 p-4 rounded-3xl bg-white">
                  <div className='flex justify-between'>
                     <h4>Sales</h4>
                     <EllipsisIcon />
                  </div>
               <div className="grid grid-cols-4 gap-1 mt-1">
                  <StatsCard title={"Impressions"} />
                  <StatsCard title={"Product Views"} />
                  <StatsCard title={"Add to Cart"} />
                  <StatsCard title={"Checkout"} />
               </div>
               </div>
               <TopProduct />

            </div>
        </section>
         <Aside />
        </main>
    );
}

export default Dashboard;