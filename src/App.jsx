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
    </>
  )
}

export default App
