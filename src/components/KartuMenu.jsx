import { useState } from "react";
import LabelHarga from "./LabelHarga"

function KartuMenu({nama, harga, kategori = "Makanan"}) {
    const [jumlah, setJumlah] = useState(0);
    const [catatan, setCatatan] = useState("");

    function tambah() {
        setJumlah(prev => prev + 1);
    }

    return(
        <div className='kartu'>
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga} />

            <div className="kontrol">
                <button 
                    onClick={() => (
                        setJumlah(prev => prev -1)
                    )}
                    disabled={jumlah == 0 ? true : false}
                >-</button>
                <p>{jumlah}</p>
                <button onClick={tambah}>+</button>
            </div>

            <p>{jumlah == 0 ? "Belum Pesan" : "Subtotal: Rp" + (harga * jumlah)}</p>
            {jumlah >= 5 && <p className="badge">Pesanan banyak</p>}

            <div className="kontrol">
                <p>Catatan pesanan</p>
                <input type="text" value={catatan} onChange={e => setCatatan(e.target.value)} />
            </div>

            {catatan && <p>Catatan: {catatan}</p>}
        </div>
    )
}

export default KartuMenu;