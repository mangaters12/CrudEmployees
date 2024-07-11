const express = require('express');
const router = express.Router();
const { Biodata } = require('../models');

// Mendapatkan semua biodata
router.get('/', async (req, res) => {
  try {
    const biodata = await Biodata.findAll();
    res.json(biodata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Mendapatkan biodata berdasarkan ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const biodata = await Biodata.findByPk(id);
    if (!biodata) {
      return res.status(404).json({ message: 'Biodata not found' });
    }
    res.json(biodata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Menambahkan biodata baru
router.post('/', async (req, res) => {
  const {
    posisi,
    nama,
    noKtp,
    tempatLahir,
    tanggalLahir,
    jenisKelamin,
    agama,
    golonganDarah,
    status,
    alamatKtp,
    alamatTinggal,
    emailBiodata,
    noTelp,
    orangDekat,
    pendidikanTerakhir,
    namaInstitusi,
    jurusan,
    tahunLulus,
    ipk,
    skill,
    bersediaDitempatkan,
    penghasilan,
    createdAt,
    updatedAt,
    userId
  } = req.body;

  try {
    const newBiodata = await Biodata.create({
      posisi,
      nama,
      noKtp,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      agama,
      golonganDarah,
      status,
      alamatKtp,
      alamatTinggal,
      emailBiodata,
      noTelp,
      orangDekat,
      pendidikanTerakhir,
      namaInstitusi,
      jurusan,
      tahunLulus,
      ipk,
      skill,
      bersediaDitempatkan,
      penghasilan,
      createdAt,
      updatedAt,
      userId
    });

    res.status(201).json(newBiodata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Mengupdate biodata berdasarkan ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    posisi,
    nama,
    noKtp,
    tempatLahir,
    tanggalLahir,
    jenisKelamin,
    agama,
    golonganDarah,
    status,
    alamatKtp,
    alamatTinggal,
    emailBiodata,
    noTelp,
    orangDekat,
    pendidikanTerakhir,
    namaInstitusi,
    jurusan,
    tahunLulus,
    ipk,
    skill,
    bersediaDitempatkan,
    penghasilan,
    createdAt,
    updatedAt,
    userId
  } = req.body;

  try {
    let biodata = await Biodata.findByPk(id);
    if (!biodata) {
      return res.status(404).json({ message: 'Biodata not found' });
    }

    biodata = await biodata.update({
      posisi,
      nama,
      noKtp,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      agama,
      golonganDarah,
      status,
      alamatKtp,
      alamatTinggal,
      emailBiodata,
      noTelp,
      orangDekat,
      pendidikanTerakhir,
      namaInstitusi,
      jurusan,
      tahunLulus,
      ipk,
      skill,
      bersediaDitempatkan,
      penghasilan,
      createdAt,
      updatedAt,
      userId
    });

    res.json(biodata);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Menghapus biodata berdasarkan ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const biodata = await Biodata.findByPk(id);
    if (!biodata) {
      return res.status(404).json({ message: 'Biodata not found' });
    }

    await biodata.destroy();
    res.json({ message: 'Biodata deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
