import Panel from "./components/Panel";
import KartuMenu from "./components/KartuMenu";

function App() {
  const nama = "Radit";
  const jam = 9;
  const styleJudul = {
    color: "red",
    fontStyle: "italic",
    fontSize: "3em"
  }

  return (
    <>
      <h1 className="judul" style={styleJudul}>Kantin {nama}</h1>
      <p>Selamat {jam < 12 ? "Pagi" : "Siang"}</p>
      <p>Saldo awal kartu kantin: Rp {7 * 1000}</p>
      <button disabled>Bayar</button>

      <Panel judul="Menu Hari Ini">
        <KartuMenu nama="Paket Ayam Geprek Bajek" harga={10000 + (7 * 100)} />
        <KartuMenu nama="Es Teh Bohay" harga={3000} kategori="Minuman" />
        <KartuMenu nama="Batagor MSU" harga={10000} />
      </Panel>
    </>
  )
}

export default App
