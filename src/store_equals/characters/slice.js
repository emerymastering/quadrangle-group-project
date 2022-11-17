import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCharacters: [
    {
      id: 1,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug11_tjwczi.png",
    },
    {
      id: 2,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug1_sibpel.png",
    },
    {
      id: 3,
      name: "/static/media/bug5.be4a1e18c1d3f42015a1.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug5_lfhkbi.png",
    },
    {
      id: 4,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug4_dhehpk.png",
    },
    {
      id: 5,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug2_ruujxr.png",
    },
    {
      id: 6,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug3_q6byno.png",
    },
    {
      id: 7,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug6_blbosx.png",
    },
    {
      id: 8,
      name: "/static/media/bug13.85f7b1b3cfae4c8276ea.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug13_lyzkfi.png",
    },
    {
      id: 9,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug7_roehff.png",
    },
    {
      id: 10,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug9_tknhxu.png",
    },
    {
      id: 11,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug10_cygbqq.png",
    },
    {
      id: 12,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439598/bug8_eoyaye.png",
    },
    {
      id: 13,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug12_npno5d.png",
    },
    {
      id: 14,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug18_kptlkx.png",
    },
    {
      id: 15,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug14_hdadmw.png",
    },
    {
      id: 16,
      name: "/static/media/bug15.7a51c62757ce5409689e.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug15_xetj5g.png",
    },
    {
      id: 17,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug17_bdda0u.png",
    },
    {
      id: 18,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug16_ik3wzb.png",
    },
    {
      id: 19,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug30_qqnnyv.png",
    },
    {
      id: 20,
      name: "/static/media/bug19.6f253ae7e297b2d2ee43.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug19_tnivoj.png",
    },
    {
      id: 21,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439594/bug_xoqvwq.png",
    },
    {
      id: 22,
      name: "/static/media/bug20.d44fc0f10e723796a10d.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439597/bug20_suquag.png",
    },
    {
      id: 23,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug21_c1ow64.png",
    },
    {
      id: 24,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug25_js3mes.png",
    },
    {
      id: 25,
      name: "/static/media/bug22.9a2d812fa7758576417f.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug22_nmwigq.png",
    },
    {
      id: 26,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug24_xgjz3m.png",
    },
    {
      id: 27,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug23_nbfcgo.png",
    },
    {
      id: 28,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug26_ay4u02.png",
    },
    {
      id: 29,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug27_erbrvj.png",
    },
    {
      id: 30,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug28_rgu5t4.png",
    },
    {
      id: 31,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug34_nqznyn.png",
    },
    {
      id: 32,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug29_uochc7.png",
    },
    {
      id: 33,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug32_rsc8ey.png",
    },
    {
      id: 34,
      name: "/static/media/bug31.e090388859c631bc86be.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439596/bug31_mtfuh7.png",
    },
    {
      id: 35,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug37_soahjn.png",
    },
    {
      id: 36,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug35_ug30pk.png",
    },
    {
      id: 37,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug33_uqxdng.png",
    },
    {
      id: 38,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug36_b2edml.png",
    },
    {
      id: 39,
      name: "/static/media/bug38.2a4290b57e0dcfb8cee6.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug38_uashp0.png",
    },
    {
      id: 40,
      name: "/static/media/bug39.64c277947cd53e796196.png",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439595/bug39_k35yiu.png",
    },
    {
      id: 41,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439594/bug40_kt1a9x.png",
    },
    {
      id: 42,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439594/bug44_wa7py1.png",
    },
    {
      id: 43,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439594/bug45_dkcgrk.png",
    },
    {
      id: 44,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439594/bug42_yi8prk.png",
    },
    {
      id: 45,
      name: "imagebug1",
      image:
        "https://res.cloudinary.com/dfwupsfxv/image/upload/v1668439594/bug41_iwtcyf.png",
    },
  ],
  points: 0,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    score: (state, action) => {
      state.points = state.points + action.payload;
    },
    scoreBad: (state, action) => {
      state.points > 0
        ? (state.points = state.points - action.payload)
        : (state.points = 0);
    },
  },
});

export const { score, scoreBad } = characterSlice.actions;
export default characterSlice.reducer;
