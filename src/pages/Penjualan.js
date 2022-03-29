import { useEffect, useState } from "react";
import PenjualanList from "../components/PenjualanList";

export default function Penjualan(props) {
    let [tahu, setTahuu] = useState([]);

    useEffect(() => {
        /**inizialize state books */
        let arrTahu = [
          {
            tanggal: `01-03-2022`,
            stokAwal: 100,
            terjual: 85,
            rusak: 5,
            hargaDasar: 3000,
            hargaJual: 4500,
            progress: 90,
          },

          {
            tanggal: `04-03-2022`,
            stokAwal: 50,
            terjual: 40,
            rusak: 5,
            hargaDasar: 3500,
            hargaJual: 4500,
            progress: 60,
          },

          {
            tanggal: `10-03-2022`,
            stokAwal: 70,
            terjual: 60,
            rusak:10,
            hargaDasar: 4000,
            hargaJual: 5000,
            progress: 50,
          },
          
        ];
    
        setTahuu(arrTahu);
      },[])

      return (
        <div className="container-fluid">
          {tahu.map((item) => (
            <PenjualanList
            key={`key-${item.tanggal}`}
            tanggal={item.tanggal}
            stokAwal={item.stokAwal}
            terjual={item.terjual}
            rusak={item.rusak}
            hargaDasar={item.hargaDasar}
            hargaJual={item.hargaJual}
            keuntungan= {item.keuntungan}
            progress= {item.progress}>
            </PenjualanList>
          ))}
        </div>
      );
}
    