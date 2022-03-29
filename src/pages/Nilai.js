import { useEffect, useState } from "react";

export default function Nilai(props) {
    let [nilaii, setNilaii] = useState([]);
    useEffect(() => {
        /**inizialize state books */
        let arrNilaii = [
            { id: 1, name: `Aira Johnson`, math: 80, english: 90, chemistry: 70 },
            { id: 2, name: `Scarlette Mahatam`, math: 40, english: 70, chemistry: 79 },
            { id: 3, name: `Michael Oka Wahyu`, math: 50, english: 87, chemistry: 60 },
            { id: 4, name: `Mama Zila`, math: 70, english: 78, chemistry: 80 },
            { id: 5, name: `Essa Adilla Rahmandito`, math: 80, english: 90, chemistry: 56 },

        ];
        setNilaii(arrNilaii);
    }, [])

    let hitung = (math, english, chemistry)=>{
        let hasil = (math+english+chemistry)/3;
        return hasil
    }

    let status = (rataRata) =>{
        if (rataRata >= 75){
            return(
                <h6>
                    <span className="badge rounded-pill bg-success">Lulus</span>
                </h6>
            )
        }else if(rataRata <= 74){
            return(
                <h6>
                    <span className="badge rounded-pill bg-danger">Tidak Lulus</span>
                </h6>
            )
        }
    }

    return (
        <div>
            <h4 align= "center" class="bg-dark text-white">Daftar Nilai Siswa XI RPL 4</h4>
            <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Math</th>
                    <th scope="col">English</th>
                    <th scope="col">Chemistry</th>
                    <th scope="col">Rata-rata</th>
                    <th scope="col">Keterangan</th>
                </tr>
            </thead>
            <tbody>
                {nilaii.map((item) => (
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.math}</td>
                        <td>{item.english}</td>
                        <td>{item.chemistry}</td>
                        <td>{hitung (item.math, item.english, item.chemistry).toFixed()}</td>
                        <td>{status (hitung(item.math, item.english, item.chemistry))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}