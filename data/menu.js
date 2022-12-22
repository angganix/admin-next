const menu = [
  {
    path: "/",
    title: "Dashboard",
  },
  {
    path: "#",
    title: "Data Master",
    children: [
      {
        path: "/master/mekanik",
        title: "Mekanik",
      },
      {
        path: "/master/pengguna",
        title: "Pengguna",
      },
    ],
  },
  {
    path: "#",
    title: "Data Transaksi",
    children: [
      {
        path: "/transaksi/mekanik",
        title: "Mekanik",
      },
      {
        path: "/transaksi/pengguna",
        title: "Pengguna",
      },
    ],
  },
];

export default menu;
