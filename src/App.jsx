import Panel from "./components/Panel";
import KartuMenu from "./components/KartuMenu";
import { useState } from "react";

function App() {
  const nama = "Radit";
  const jam = 9;
  const styleJudul = {
    color: "red",
    fontStyle: "italic",
    fontSize: "3em"
  }

  const [menu, setMenu] = useState(
    [
      {id: 1, nama: "Paket Ayam Geprek Bajek", kategori: "Makanan", harga: 10000 + (7 * 100)},
      {id: 2, nama: "Es Teh Bohay", kategori: "Minuman", harga: 3000},
      {id: 3, nama: "Batagor MSU", kategori: "Snack", harga: 5000},
      {id: 4, nama: "Nasi Katsu Mayo", kategori: "Makanan", harga: 15000},
      {id: 5, nama: "Nasi Padang Sari Bundo", kategori: "Makanan", harga: 14000},
    ]
  )

  function hapus(id) {
    setMenu(menu.filter((menu) => menu.id !== id))
  }

  return (
    <>
      <h1 className="judul" style={styleJudul}>Kantin {nama}</h1>
      <p>Selamat {jam < 12 ? "Pagi" : "Siang"}</p>
      <p>Saldo awal kartu kantin: Rp {7 * 1000}</p>
      <button disabled>Bayar</button>

      <Panel judul="Menu Hari Ini">
        <button>Balik Urutan</button>
        {menu.length == 0 && <p>Semua menu habis terjual</p>}
        <div className="daftar">
          {menu.map((m, i) => (
            <KartuMenu key={m.id} nama={m.nama} kategori={m.kategori} harga={m.harga} onHapus={() => hapus(m.id)} />
          ))}
        </div>
      </Panel>
    </>
  )
}

export default App
