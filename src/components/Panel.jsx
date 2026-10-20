function Panel({children, judul}) {
    return(
        <>
            <h2>{judul}</h2>
            {children}
        </>
    )
}

export default Panel