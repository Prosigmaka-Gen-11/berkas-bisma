import React, { Component } from "react";

export default class Sekolah extends Component {
    // Inisiate Array list sekolah beserta tahun dibangun dan pemimpin sekarang
    listSekolah = ["SMP 5 Cirebon", "SMP 2 Cirebon", "SMP 3 Arjawinangun", "SMP 7 Sumedang", "SMP 9 Kuningan"]
    listTahun = [2005, 2003, 2004, 2008, 2007]
    listKepalaSekolah = ["Tatang Suratman", "Suaeb", "Sutarno", "Samsudin", "Tukiyem"]

    // Buat state
    constructor() {
        super()

        this.state = {
            nama: '', // Nama Sekolah
            tahun: 0, // Tahun didirikan
            kepalaSekolah: '', // Pemimpin saat ini
            deskripsi: '', // Tentang sekolah
            showDesk: false, // Tampilkan deskripsi sekolah atau tidak
            hasChanged: false // Terdapat perubahan atau tidak
        }
    }

    // Tampil sekolah
    showSchool() {
        this.setState({
            nama: this.listSekolah[this.props.index],
            tahun: this.listTahun[this.props.index],
            kepalaSekolah: this.listKepalaSekolah[this.props.index],
        })
    }
    // Ketika sekolah ditampilkan
    componentDidMount() {
        this.showSchool()
        alert('This is Class Lifecycle')
    }

    componentDidUpdate(propsBefore, stateBefore) {
        // Ketika index berubah
        if (propsBefore.index !== this.props.index) {
            this.setState({
                hasChanged: true
            })
        }

        // Ketika yang ditampilkan berubah
        if (stateBefore.nama !== this.state.nama) {
            this.setState({
                deskripsi: `${this.state.nama} adalah sekolah yang didirikan pada tahun ${this.state.tahun}. Saat ini dipimpin oleh ${this.state.kepalaSekolah}`
            })
        }
    }

    // Ketika sekolah dihidden
    componentWillUnmount() {
        alert('Change format')
    }

    render() {
        return <div>
            <p>{this.state.nama}</p>
            <p>{this.state.tahun}</p>
            <p>{this.state.kepalaSekolah}</p>

            {/* Ganti tampilan sekolah ketika mengalami perubahan index */}
            {this.state.hasChanged ?
                <button onClick={() => {
                    this.showSchool();
                    this.setState({ hasChanged: false })
                }}>
                    Show current school
                </button> :
                null}

            {/* Tampil/sembunyi deskripsi sekolah */}
            <button onClick={() => {
                this.state.showDesk ? this.setState({ showDesk: false }) : this.setState({ showDesk: true })
            }}>
                Click to show/hide description
            </button>

            {/* Bagian deskripsi */}
            {this.state.showDesk ?
                <p>
                    {this.state.deskripsi}
                </p> :
                null}
        </div>
    }
}