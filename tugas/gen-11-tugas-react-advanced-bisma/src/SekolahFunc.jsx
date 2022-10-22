import React, { useState } from 'react'
import { useEffect } from 'react'

export default function SekolahFunc(props) {
    // Inisiate Array list sekolah beserta tahun dibangun dan pemimpin sekarang
    const listSekolah = ["SMP 5 Cirebon", "SMP 2 Cirebon", "SMP 3 Arjawinangun", "SMP 7 Sumedang", "SMP 9 Kuningan"]
    const listTahun = [2005, 2003, 2004, 2008, 2007]
    const listKepalaSekolah = ["Tatang Suratman", "Suaeb", "Sutarno", "Samsudin", "Tukiyem"]

    // Buat state
    const [nama, setNama] = useState('') // Nama Sekolah
    const [tahun, setTahun] = useState(0) // Tahun didirikan
    const [kepalaSekolah, setKepalaSekolah] = useState('') // Pemimpin saat ini
    const [deskripsi, setDeskripsi] = useState('') // Tentang sekolah
    const [showDesk, setShowDesk] = useState(false) // Tampilkan deskripsi sekolah atau tidak
    const [hasChanged, setHasChanged] = useState(false) // Terdapat perubahan atau tidak

    // Tampil sekolah
    function showSchool() {
        setNama(listSekolah[props.index])
        setTahun(listTahun[props.index])
        setKepalaSekolah(listKepalaSekolah[props.index])
    }

    useEffect(() => {
        // Ketika sekolah ditampilkan
        showSchool()
        alert('Show School')

        // Ketika sekolah dihidden
        return () => {
            alert('School Hidden')
        }
    }, [])

    // Ketika yang ditampilkan berubah
    useEffect(() => {
        setDeskripsi(`${nama} adalah sekolah yang didirikan pada tahun ${tahun}. Saat ini dipimpin oleh ${kepalaSekolah}`)
    }, [nama])

    // Ketika index berubah
    useEffect(() => {
        setHasChanged(true)
    }, [props.index])

    return <div>
        <p>{nama}</p>
        <p>{tahun}</p>
        <p>{kepalaSekolah}</p>

        {/* Ganti tampilan sekolah ketika mengalami perubahan index */}
        {hasChanged ?
            <button onClick={() => {
                showSchool();
                setHasChanged(false)
            }}>
                Show current school
            </button> :
            null}

        {/* Tampil/sembunyi deskripsi sekolah */}
        <button onClick={() => {
            showDesk ? setShowDesk(false) : setShowDesk(true)
        }}>
            Click to show/hide description
        </button>

        {/* Bagian deskripsi */}
        {showDesk ?
            <p>
                {deskripsi}
            </p> :
            null}
    </div>
}