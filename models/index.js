const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('biodata_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
  }
});

const Biodata = sequelize.define('Biodata', {
  posisi: DataTypes.STRING,
  nama: DataTypes.STRING,
  noKtp: DataTypes.STRING,
  tempatLahir: DataTypes.STRING,
  tanggalLahir: DataTypes.DATE,
  jenisKelamin: DataTypes.STRING,
  agama: DataTypes.STRING,
  golonganDarah: DataTypes.STRING,
  status: DataTypes.STRING,
  alamatKtp: DataTypes.STRING,
  alamatTinggal: DataTypes.STRING,
  emailBiodata: DataTypes.STRING,
  noTelp: DataTypes.STRING,
  orangDekat: DataTypes.STRING,
  pendidikanTerakhir: DataTypes.STRING,
  namaInstitusi: DataTypes.STRING,
  jurusan: DataTypes.STRING,
  tahunLulus: DataTypes.STRING,
  ipk: DataTypes.STRING,
  skill: DataTypes.STRING,
  bersediaDitempatkan: DataTypes.STRING,
  penghasilan: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

const Pendidikan = sequelize.define('Pendidikan', {
  jenjang: DataTypes.STRING,
  namaInstitusi: DataTypes.STRING,
  jurusan: DataTypes.STRING,
  tahunLulus: DataTypes.STRING,
  ipk: DataTypes.STRING,
});

const Pelatihan = sequelize.define('Pelatihan', {
  namaKursus: DataTypes.STRING,
  sertifikat: DataTypes.STRING,
  tahun: DataTypes.STRING,
});

const Pekerjaan = sequelize.define('Pekerjaan', {
  namaPerusahaan: DataTypes.STRING,
  posisiTerakhir: DataTypes.STRING,
  pendapatanTerakhir: DataTypes.STRING,
  tahun: DataTypes.STRING,
});

Biodata.hasMany(Pendidikan, { as: 'pendidikan', foreignKey: 'biodataId' });
Biodata.hasMany(Pelatihan, { as: 'pelatihan', foreignKey: 'biodataId' });
Biodata.hasMany(Pekerjaan, { as: 'pekerjaan', foreignKey: 'biodataId' });
User.hasMany(Biodata, { foreignKey: 'userId' });

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { sequelize, User, Biodata, Pendidikan, Pelatihan, Pekerjaan };
